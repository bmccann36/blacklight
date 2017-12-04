'use strict';
import React from 'react';
import { View, TouchableHighlight, TouchableOpacity } from 'react-native';
import * as THREE from 'three';
import ExpoTHREE from 'expo-three';
import Expo from 'expo';
import geolib from 'geolib';
console.disableYellowBox = true;

// ---------- NOTE -----------
// This only works with a hard coded memory on local state right now.
// Functionally this is just an AR component that keeps track of a users location,
// the distance, in meters from users current location and the hardcoded memory.
// The sphere is in no way connected to the distance measurement or anything.
// The AR part just renders the sphere always.

export default class AR extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      memory: {
        title: 'starbucks across the street',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        lng: -74.00882289999998,
        lat: 40.70459220000001,
        authorId: 1,
      },
      distance: NaN,
      intvl: null
    };
  }

  componentDidMount() {
    let intvl = setInterval(() => {
      Expo.Location.getCurrentPositionAsync({ enableHighAccuracy: true })
        .then((result) => {
          let newDistance = geolib.getDistance(
            { latitude: result.coords.latitude, longitude: result.coords.longitude },
            { latitude: this.state.memory.lat, longitude: this.state.memory.lng },
            1,
            3
          );
          this.setState({ distance: newDistance });
        });
    }, 100);

    this.setState({ intvl });
  }

  componentWillUnmount() {
    if (typeof this.state.intvl === 'function') {
      this.state.intvl();
      this.setState({ intvl: null });
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

    // This doesn't work at the moment because it only checks initially. And initially this.state.distance
    // is NaN. So it can't compare that to a number. just goes straight to the else.
    // if distance is less than __ then we render the cube/sphere in the scene.
    // Otherwise we don't render the cube/sphere, but still render the scene/camera
    // if (this.state.distance < 100) {
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
    animate();
  }

  render() {
    return (
      <TouchableOpacity onPress={() => console.log('PRESSED')} style={{ flex: 1 }} >
        <Expo.GLView
          ref={(ref) => this._glView = ref}
          style={{ flex: 1 }}
          onContextCreate={this._onGLContextCreate.bind(this)}
        />
      </TouchableOpacity>
    );
  }
}
