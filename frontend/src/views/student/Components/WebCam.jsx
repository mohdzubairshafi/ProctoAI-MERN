// import styles from './page.module.css'
// Import dependencies
import React, { useRef, useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as cocossd from '@tensorflow-models/coco-ssd';
import Webcam from 'react-webcam';
import { drawRect } from './utilities';
// import '@tensorflow/tfjs-node';
import { Box, Card } from '@mui/material';
import swal from 'sweetalert';

// implements nodejs wrappers for HTMLCanvasElement, HTMLImageElement, ImageData
// Import dependencies

export default function Home() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  // Main function
  const runCoco = async () => {
    const net = await cocossd.load();
    console.log('Ai models loaded.');
    //  Loop and detect faces
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== 'undefined' &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;
      // Make Detections
      const obj = await net.detect(video);
      // Draw mesh
      const ctx = canvasRef.current.getContext('2d');
      console.log('OBJ', obj);
      if (obj.length < 1) {
        // alert('no face detected');
        swal('Face Not Visible', 'Action has been Recorded', 'error');
      }
      let person_count = 0;
      obj.forEach((element) => {
        if (element.class === 'cell phone') {
          console.log('OBJ', obj);
          swal('Cell Phone Detected', 'Action has been Recorded', 'error');
        }
        if (element.class === 'book') {
          // console.log('OBJ', obj);
          // alert('Book');
          swal('Prohibited Object Detected', 'Action has been Recorded', 'error');
        }

        if (!element.class === 'person') {
          swal('Face Not Visible', 'Action has been Recorded', 'error');
        }
        if (element.class === 'person') {
          person_count++;
          if (person_count > 1) {
            swal('Multiple Faces Detected', 'Action has been Recorded', 'error');
            person_count = 0;
          }
        }
      });
      // drawRect(obj, ctx);s
    }
  };
  useEffect(() => {
    runCoco();
  }, []);

  return (
    <Box>
      <Card variant="outlined">
        <Webcam
          ref={webcamRef}
          muted={true}
          style={{
            // position: 'absolute',
            // marginLeft: 'auto',
            // marginRight: 'auto',
            left: 0,
            right: 0,
            textAlign: 'center',
            zindex: 9,
            width: 300,
            height: 300,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: 0,
            right: 0,
            textAlign: 'center',
            zindex: 8,
            width: 240,
            height: 240,
          }}
        />
      </Card>
    </Box>
  );
}
