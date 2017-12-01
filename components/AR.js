import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View, TouchableHighlight, TouchableOpacity } from 'react-native';
import * as THREE from 'three';
import ExpoTHREE from 'expo-three';
import Expo from 'expo';
import geolib from 'geolib';
// import { watchLocation, stopWatching } from '../store';
console.disableYellowBox = true;

// ---------- NOTE -----------
// This only works with a hard coded memory on local state right now.
// Functionally this is just an AR component that keeps track of a users location,
// the distance, in meters from users current location and the hardcoded memory.
// The sphere is in no way connected to the distance measurement or anything.
// The AR part just renders the sphere always.

class AR extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      closestMemory: {},
      distanceInMeters: NaN
    };
    this.findNearestMemory = this.findNearestMemory.bind(this);
    this._onGLContextCreate = this._onGLContextCreate.bind(this);
  }

  componentDidMount() {
    this.findNearestMemory();
  }

  componentWillUnmount() {
    if (typeof this.state.intvl === 'function') {
      this.state.intvl();
      this.setState({ intvl: null });
    }
  }

  findNearestMemory = async () => {
    if (this.props.memories && this.props.currentPosition.latitude) {
      let currentLocLat = this.props.currentPosition.latitude;
      let currentLocLng = this.props.currentPosition.longitude;
      let nearestMemory = this.state.closestMemory || this.props.memories[0];
      let shortestDistance = geolib.getDistance(
        { latitude: currentLocLat, longitude: currentLocLng },
        { latitude: this.props.memories[0].lat, longitude: this.props.memories[0].lng },
        1,
        1
      );

      this.props.memories.forEach((memory) => {
        let compareDist = geolib.getDistance(
          { latitude: currentLocLat, longitude: currentLocLng },
          { latitude: memory.lat, longitude: memory.lng },
          1, 1
        );
        if (compareDist <= shortestDistance) {
          shortestDistance = compareDist;
          nearestMemory = memory;
        }
      });

      this.setState({ closestMemory: nearestMemory, distanceInMeters: shortestDistance });
      return nearestMemory;
    }
  }

  _onGLContextCreate = async (gl) => {
    const arSession = await this._glView.startARSessionAsync();
    const scene = new THREE.Scene();
    const camera = ExpoTHREE.createARCamera(
      arSession,
      gl.drawingBufferWidth,
      gl.drawingBufferHeight,
      0.01,
      1000
    );
    const renderer = ExpoTHREE.createRenderer({ gl });
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
    let animate;

    scene.background = ExpoTHREE.createARBackgroundTexture(arSession, renderer);

    // if distanceInMeters is less than __ then we render the cube/sphere in the scene.
    // Otherwise we don't render the cube/sphere, but still render the scene/camera
    if (this.state.distanceInMeters < 10) {
    const geometry = new THREE.SphereGeometry(0.15, 20, 20);
    const material = new THREE.MeshBasicMaterial({ color: 0xee82ee, wireframe: true });
    const cube = new THREE.Mesh(geometry, material);

    cube.position.z = -1.2;
    scene.add(cube);

    animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
      gl.endFrameEXP();
    }

    } else {
      animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        gl.endFrameEXP();
      }
    }

    animate();
  }

  render() {
    return (
      <TouchableOpacity onLongPress={() => Actions.recordInput({ droppedPin: false })} onPress={() => Actions.singleMemory(this.state.closestMemory)} style={{ flex: 1 }} >
        <Expo.GLView
          ref={(ref) => this._glView = ref}
          style={{ flex: 1 }}
          onContextCreate={this._onGLContextCreate}
        />
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => ({
  memories: state.memory,
  currentPosition: state.position
});

export default connect(mapStateToProps)(AR);