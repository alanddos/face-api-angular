import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { WebCamComponent } from 'ack-angular-webcam';

declare var faceapi: any;
declare var faceDetectionControls: any;



@Component({
  selector: 'app-webcam-detect',
  templateUrl: './webcam-detect.component.html',
  styleUrls: ['./webcam-detect.component.css']
})
export class WebcamDetectComponent implements OnInit {

  constructor() {
    console.log(faceapi)
    faceapi.loadSsdMobilenetv1Model('assets/')
  }

  ngOnInit() {
    // this.run()
  }

  drawDetections(dimensions, canvas, detections) {
    const resizedDetections = this.resizeCanvasAndResults(dimensions, canvas, detections)
    faceapi.drawDetection(canvas, resizedDetections)
  }

  resizeCanvasAndResults(dimensions, canvas, results) {
    const { width, height } = dimensions instanceof HTMLVideoElement
      ? faceapi.getMediaDimensions(dimensions)
      : dimensions
    canvas.width = width
    canvas.height = height
  
    // resize detections (and landmarks) in case displayed image is smaller than
    // original size
    return faceapi.resizeResults(results, { width, height })
  }

  getFaceDetectorOptions() {
    const SSD_MOBILENETV1 = 'ssd_mobilenetv1'
    const TINY_FACE_DETECTOR = 'tiny_face_detector'
    const MTCNN = 'mtcnn'


    let selectedFaceDetector = SSD_MOBILENETV1

    // ssd_mobilenetv1 options
    let minConfidence = 0.5

    // tiny_face_detector options
    let inputSize = 512
    let scoreThreshold = 0.5

    //mtcnn options
    let minFaceSize = 20

    return selectedFaceDetector === SSD_MOBILENETV1
      ? new faceapi.SsdMobilenetv1Options({ minConfidence })
      : (
        selectedFaceDetector === TINY_FACE_DETECTOR
          ? new faceapi.TinyFaceDetectorOptions({ inputSize, scoreThreshold })
          : new faceapi.MtcnnOptions({ minFaceSize })
      )
  }

  webcam: WebCamComponent//will be populated by <ack-webcam [(ref)]="webcam">
  base64


  genBase64() {
    this.webcam.getBase64()
      .then(base => this.base64 = base)
      .catch(e => console.error(e))
  }
  async run() {
    const options = this.getFaceDetectorOptions()
    
    const videoEl = $('#video').get(0)
    
    
    const result = await faceapi.detectSingleFace(videoEl, options)
    console.log(result)

    if (result) {
      this.drawDetections(videoEl, $('#overlay').get(0), [result])
    }
  }
  //  async run() {
  //   const videoEl = $('#inputImage')
  //   //const video = document.createElement('video');
  //   //videoEl.src = URL.createObjectURL(stream);
  //   const options = faceapi.getFaceDetectorOptions()
  //   console.log(options)

  // }

}
