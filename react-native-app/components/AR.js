import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import * as THREE from 'three';
import ExpoTHREE from 'expo-three';
import Expo from 'expo';
import geolib from 'geolib';

class AR extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      memory: {
        title: 'memory alta restaurant',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        lng: -73.99820009999996,
        lat: 40.7344108,
        authorId: 1,
      },
    };
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
});

export default connect(mapStateToProps)(AR);