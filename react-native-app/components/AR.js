import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import * as THREE from 'three';
import ExpoTHREE from 'expo-three';
import Expo from 'expo';
import store, { fetchMemories } from '../store';

class AR extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     memory: {},
  //   };
  // }

  componentDidMount() {
    // console.log('---------- HERE ---------')
    // console.log('---------- this.props.fetchMemories ---------', this.props.fetchMemories)
    store.dispatch(fetchMemories());
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

    scene.background = ExpoTHREE.createARBackgroundTexture(arSession, renderer);

    const geometry = new THREE.SphereGeometry(0.07, 0.07, 0.07);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.z = -0.4;
    scene.add(cube);
    

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.07;
      cube.rotation.y += 0.04;
      renderer.render(scene, camera);
      gl.endFrameEXP();
    }
    animate();
  }

  render() {
    // console.log('\n', 'THIS.STATE', this.state, '\n')
    console.log('\n', 'THIS.PROPS', this.props, '\n')
    return (
      <Expo.GLView
        ref={(ref) => this._glView = ref}
        style={{ flex: 1 }}
        onContextCreate={this._onGLContextCreate}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  userCurrentLatitude: state.position.latitude,
  userCurrentLongitude: state.position.longitude,
  memories: state.memories
});

// const mapDispatchToProps = { fetchMemories };

export default connect(mapStateToProps)(AR);