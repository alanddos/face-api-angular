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

  objeto = []
  constructor() {
    console.log(faceapi)
    //faceapi.loadSsdMobilenetv1Model('assets/')
    faceapi.loadMtcnnModel('assets/')
    faceapi.loadFaceRecognitionModel('assets/')
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


    let selectedFaceDetector = MTCNN

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

    console.log()
    
    
    $('#overlay').height(videoEl.getAttribute('heigth'))
    $('#overlay').width(videoEl.getAttribute('width'))
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

  async start() {
    const options = await this.getFaceDetectorOptions()
    const videoEl = $('#video').get(0)

    ////Localiza faces
    const mtcnnResults = await faceapi.mtcnn(videoEl, options)

    if (mtcnnResults) {
      $('#overlay').height(videoEl.getAttribute('heigth'))
      $('#overlay').width(videoEl.getAttribute('width'))
      this.drawDetections(videoEl, $('#overlay').get(0), mtcnnResults.map(res => res.detection))
      ////extrai as faces
      const canvases = await faceapi.extractFaces(videoEl, mtcnnResults.map(res => res.alignedRect.box))
      ////extrai os descritores
      if (canvases != undefined && canvases != [] && canvases.length > 0) {
        const descriptor = await faceapi.computeFaceDescriptor(canvases)

        let labeledFaceDescriptors = new faceapi.LabeledFaceDescriptors('Alan ddos', descriptor)
        if (labeledFaceDescriptors) {
          if (this.objeto['descricao']) {
            this.objeto['descricao'].push(labeledFaceDescriptors)
          } else {
            this.objeto['descricao'] = []
            this.objeto['descricao'].push(labeledFaceDescriptors)
          }
        }
        console.log(labeledFaceDescriptors)
        console.log(descriptor)
        console.log(this.objeto)
        ////Se tiver mais de uma pessoa sera um array de 128 cada index da const descriptor

        ////miniatura do rosto
        var detectArea = $('#detectedFaces').get(0);

        for (let index = 0; index < canvases.length; index++) {
          const element = canvases[index];

          var canvas = document.createElement('canvas');
          let ctx = canvas.getContext("2d");
          canvas.id = String(this.objeto['descricao'].length);
          canvas.width = 100;
          canvas.height = 100;
          //canvas.style.zIndex = 8;
          //canvas.style.position = "absolute";
          canvas.style.border = "1px solid";
          ctx.drawImage(element, 0, 0, 100, 100);
          ctx.font = 'italic 14pt Calibri';
          ctx.fillText(this.objeto['id'], 10, 95);
          detectArea.prepend(canvas)
          if (this.objeto['canvas']) {
            this.objeto['canvas'].push(canvas)
          } else {
            this.objeto['canvas'] = []
            this.objeto['canvas'].push(canvas)
          }
        }
      }
    } else {
      ////esconde o overlay caso n encontre ninguem
      $('#overlay').height(0)
      $('#overlay').width(0)
    }

    // for (let index = 0; index < mtcnnResults.length; index++) {
    //   const element = mtcnnResults[index];



    //   console.log(element.detection._score)
    //   if (element.detection._score > 0.8) {
    //     console.log('=======================================')  
    //   }
    // }

  }


}
