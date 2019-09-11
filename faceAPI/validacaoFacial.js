// import nodejs bindings to native tensorflow,
// not required, but will speed up things drastically (python required)
//var tensorflow = require('@tensorflow/tfjs-node');

const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');

var fetch = require('node-fetch')

var path = require('path')

// implements nodejs wrappers for HTMLCanvasElement, HTMLImageElement, ImageData
//import * as canvas from 'canvas';
var canvas = require('canvas-node')

// implements nodejs wrappers for HTMLCanvasElement, HTMLImageElement, ImageData
//import * as canvas from 'canvas';
//var canvas = require('canvas')

//import * as faceapi from 'face-api.js';

var faceapi = require('./face-api')

// patch nodejs environment, we need to provide an implementation of
// HTMLCanvasElement and HTMLImageElement, additionally an implementation
// of ImageData is required, in case you want to use the MTCNN
const { Canvas, Image, ImageData } = canvas
faceapi.env.monkeyPatch({ Canvas: Canvas, Image: Image, ImageData: ImageData, fetch: fetch })

const MODELS_URL = path.join(__dirname, 'weights');

faceapi.nets.ssdMobilenetv1.loadFromDisk(MODELS_URL)
faceapi.nets.mtcnn.loadFromDisk(MODELS_URL)
faceapi.nets.faceLandmark68Net.loadFromDisk(MODELS_URL)
faceapi.nets.faceRecognitionNet.loadFromDisk(MODELS_URL)

module.exports = {
    makeAlbum: async function (faces, renach) {
        try {
            let album = []
            for (const imagem of faces) {
                var buffer = JSON.parse(imagem.descriptor)[0];//etapa 1 conversao
                var res = Object.keys(buffer).map(function (key) { //etapa 2 conversao
                    return buffer[key];
                });
                let descriptors = new Array(Float32Array.from(res, (v, k) => v));//etapa 3 conversao novo float32array

                let labeledFaceDescriptors = new faceapi.LabeledFaceDescriptors(renach, descriptors)//etapa 4 cria descricao

                album.push(labeledFaceDescriptors)
            }
            return album
        } catch (error) {
            console.log(error)
        }
    },

    criarImagem: async function (base64) {
        const img = new Image();
        img.src = base64;
        console.log(img.height, img.width)
        let altura
        let largura

        if (img.width > 1800){
            altura = img.height * 0.40
            largura = img.width * 0.40
        }else{
            altura = img.height
            largura = img.width
        }
        
        const outQuery = await faceapi.createCanvasFromMedia(img, {width: largura, height:altura})
        console.log(outQuery)
        return outQuery
    },
    localizaFace: async function (img) {
        console.log('imgheigth' , img.height)
        let facesize = img.height * 0.25;
        console.log(facesize)
        const options = new faceapi.MtcnnOptions({ minFaceSize: facesize })
        mtcnnResults = await faceapi.mtcnn(img, options)
        return mtcnnResults
    },
    validar: async function (tempcontext, faces, mtcnnResults) {
        try {
            // const faceMatcher = new faceapi.FaceMatcher(faces)
            // const queryDrawBoxes = resultsQuery.map(res => {
            //     return bestMatch = faceMatcher.findBestMatch(res.descriptor)
            // })

            // return queryDrawBoxes

            var canvases = await faceapi.extractFaces(tempcontext, mtcnnResults.map(res => res.alignedRect.box))

            //extrai a pontuação das miniaturas recortadas
            const descriptor = await faceapi.computeFaceDescriptor(canvases)

            //Prepara o album de faces dos alunos para comparar e define pontuação minima para dar como verdadeiro
            const faceMatcher = new faceapi.FaceMatcher(faces, 0.5)

            //localiza as faces detectadas
            var best;
            const results = descriptor.map((fd) => {
                best = faceMatcher.findBestMatch(fd)
                return best;
            })
            return results

        } catch (error) {
            console.log(error)
        }


        return faces
    },
    imagem: async function (mtcnnResults, queryImage, results) {
        try {
            const outQuery = queryImage//await faceapi.createCanvasFromMedia(queryImage)

            //inicio TEXTO
            let box = []
            let anchor = { x: 0, y: 0 }

            const drawOptions = {
                anchorPosition: 'TOP_LEFT',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                fontSize: 30,
                lineWidth: 5
            }

            let textBox
            let drawBox

            results.map(async (bestMatch, i) => {
                box.push(mtcnnResults[i].detection.box)
                anchor.x = mtcnnResults[i].detection.box._x
                anchor.y = (mtcnnResults[i].detection.box._y + mtcnnResults[i].detection.box._height)
                // console.log(bestMatch)
                // console.log(mtcnnResults[i].detection)
                let msg = bestMatch._label != 'unknown' ? bestMatch._label : 'Face não reconhecida!'
                let text = []
                text.push(msg)
                textBox = new faceapi.draw.DrawTextField(text, anchor, drawOptions)
                await textBox.draw(outQuery)
            })
            for (const b of box) {
                drawBox = new faceapi.draw.DrawBox(b, drawOptions)
                await drawBox.draw(outQuery)
            }



            return outQuery.toDataURL('image/jpeg', 0.5);


        } catch (error) {
            console.log(error)
        }
    },
    getDescriptor: async function (tempcontext, mtcnnResults) {
        try {
            var canvases = await faceapi.extractFaces(tempcontext, mtcnnResults.map(res => res.alignedRect.box))

            //extrai a pontuação das miniaturas recortadas
            const descriptor = await faceapi.computeFaceDescriptor(canvases)
            return descriptor
        } catch (error) {
            console.log(error)
        }
    },
    girarImagem: async function (base64) {
        try {
            let img = new Image();
            img.src = base64;
            let c = await faceapi.createCanvasFromMedia(img)
            let ctx = c.getContext('2d');
            let altura = img.height / 2;
            let largura = img.width / 2;
            let alturaNegativa = altura * -1;
            let larguraNegativa = largura * -1;

            ctx.translate(altura, largura);
            ctx.rotate(Math.PI);
            ctx.translate(alturaNegativa, larguraNegativa);
            return c.toDataURL('image/jpeg')
        } catch (error) {
            console.log(error)
        }
    }
}