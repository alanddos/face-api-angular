var express = require("express");
var path = require('path')
var fs = require('fs')
var moment = require("moment")

var faceVerif = require = require('./faceAPI/validacaoFacial');

var app = express();
app.use(express.static(__dirname + "/dist/face-api")); //aqui você define onde está o index.html da sua aplicação.

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/face-api/index.html'))
})

app.post('/validarFace', function (req, res) {
    res.send({code: 1, msg: 'Chegou no validar'})
    async function validarFace(req, res) {
        let faces;
        if (!req.body.id) {
            console.log('Informe um id sigeauto para a consulta.')
            return res.send({ code: 2, msg: 'Informe um id sigeauto para a consulta.' });
        }

        if (!req.body.tipo) {
            console.log('Informe um tipo sigeauto para a consulta.')
            return res.send({ code: 2, msg: 'Informe um tipo sigeauto para a consulta.' });
        }

        try {
            let pessoa
            if (req.body.tipo == 0) {
                let sqlAluno_id = "select * from aluno where schema = 'principal' and sigeauto = '" + req.body.id + "'";
                pessoa = await sequelize.query(sqlAluno_id, { type: sequelize.QueryTypes.SELECT, raw: true, plain: true });
                if (pessoa == null) {
                    console.log('Aluno com id informado não está sincronizado, tente novamente!')
                    return res.send({ code: 2, msg: 'Aluno com id informado não está sincronizado, tente novamente!' });
                }
                let sql = "select f.descriptor from faces f where aluno_id = '" + pessoa.id + "'";
                faces = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
            }

            if (req.body.tipo == 1) {
                let sqlInstrutor_id = "select * from instrutor where schema = 'principal' and sigeauto = '" + req.body.id + "'";
                pessoa = await sequelize.query(sqlInstrutor_id, { type: sequelize.QueryTypes.SELECT, raw: true, plain: true });
                if (!pessoa.id) {
                    console.log('Instrutor com id informado não está sincronizado, tente novamente!')
                    return res.send({ code: 2, msg: 'Instrutor com id informado não está sincronizado, tente novamente!' });
                }
                let sql = "select f.descriptor from faces f where instrutor_id = '" + pessoa.id + "'";
                faces = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
            }

            if (!faces.length) {
                console.log('Você deve cadastrar as imagens da pessoa para poder validar.')
                return res.send({ code: 2, msg: 'Você deve cadastrar as imagens da pessoa para poder validar.' });
            }

            let album = await faceVerif.makeAlbum(faces, pessoa.nome)


            let imagemQ = await faceVerif.criarImagem(req.body.base64)
            // var base64Data = imagemQ.toDataURL('image/jpeg', 0.5).replace(/^data:image\/jpeg;base64,/, "");
            // fs.writeFile("//var//www//html//imagens//validar"+moment().format('DD-MM-YYYY HH:mm:ss')+".jpg", base64Data, 'base64', function (err) {
            //     console.log(err);
            // });
            let facesLocalizadas = await faceVerif.localizaFace(imagemQ)
            console.log(facesLocalizadas)
            if (facesLocalizadas.length == 0) {
                invertida = await faceVerif.girarImagem(req.body.base64)
                imagemQ = await faceVerif.criarImagem(invertida)
                facesLocalizadas = await faceVerif.localizaFace(imagemQ)
            }

            if (facesLocalizadas.length == 0) {
                console.log('Não foi localizado um rosto válido, tente novamente!')
                return res.send({ code: 2, msg: 'Não foi localizado um rosto na imagem recebida!' });
            }

            let validacao = await faceVerif.validar(imagemQ, album, facesLocalizadas)

            let imagem = await faceVerif.imagem(facesLocalizadas, imagemQ, validacao)

            res.send({ code: 1, pontuacao: validacao, imagem: imagem });

        } catch (error) {
            console.log(error)
            if ((typeof A === "object" || typeof A === 'function') && (A !== null)) {
                res.send({ code: 2, msg: JSON.stringify(error) });
            } else {
                res.send({ code: 2, msg: error });
            }
        }
    }

    
})
app.post('/cadastrarFace', function (req, res) {

    async function cadastrarFace(req, res) {
        if (!req.body.id) {
            return res.send({ code: 2, msg: 'Informe um id sigeauto para a consulta.' });
        }

        if (!req.body.tipo) {
            return res.send({ code: 2, msg: 'Informe um tipo sigeauto para a consulta.' });
        }

        try {
            let pessoa
            if (req.body.tipo == 0) {
                let sqlAluno_id = "select id from aluno where schema = 'principal' and sigeauto = '" + req.body.id + "'";
                pessoa = await sequelize.query(sqlAluno_id, { type: sequelize.QueryTypes.SELECT, raw: true, plain: true });
                if (!pessoa.id) {
                    return res.send({ code: 2, msg: 'Aluno com id informado não está sincronizado, tente novamente!' });
                }
            }

            if (req.body.tipo == 1) {
                let sqlInstrutor_id = "select id from instrutor where schema = 'principal' and sigeauto = '" + req.body.id + "'";
                pessoa = await sequelize.query(sqlInstrutor_id, { type: sequelize.QueryTypes.SELECT, raw: true, plain: true });
                if (pessoa == null) {
                    return res.send({ code: 2, msg: 'Instrutor com id informado não está sincronizado, tente novamente!' });
                }
            }



            let imagemQ = await faceVerif.criarImagem(req.body.base64)
            // var base64Data = imagemQ.toDataURL('image/jpeg', 0.5).replace(/^data:image\/jpeg;base64,/, "");
            // fs.writeFile("//var//www//html//imagens//cadastrar"+moment().format('DD-MM-YYYY HH:mm:ss')+".jpg", base64Data, 'base64', function (err) {
            // console.log(err);
            // });
            let facesLocalizadas = await faceVerif.localizaFace(imagemQ)
            if (facesLocalizadas.length == 0) {
                invertida = await faceVerif.girarImagem(req.body.base64)
                imagemQ = await faceVerif.criarImagem(invertida)
                facesLocalizadas = await faceVerif.localizaFace(imagemQ)
            }
            if (facesLocalizadas.length == 0) {
                return res.send({ code: 2, msg: 'Não foi localizado um rosto válido, tente novamente!' });
            }
            if (facesLocalizadas.length > 1) {
                return res.send({ code: 2, msg: 'Foi localizado mais de um rosto certifique-se que o aluno esteja sozinho na camera para cadastrá-lo, tente novamente!' });
            }


            let descr = await faceVerif.getDescriptor(imagemQ, facesLocalizadas)
            let descriptor = JSON.stringify(Array.from(descr))

            let status = req.body.base64.substring(150, 350);

            let obj = {
                canvas: req.body.base64,
                descriptor: descriptor,
                status: status
            }
            req.body.tipo == 0 ? obj.aluno_id = pessoa.id : obj.instrutor_id = pessoa.id

            try {
                await models.faces.create(obj);
            } catch (error) {
                if (error.errors['0'].message == 'status must be unique') {
                    res.send({ code: 2, msg: 'Essa imagem ja foi cadastrada! Tente outra.' });
                } else {
                    res.send({ code: 2, msg: error });
                }
                return false;
            }

            res.send({ code: 1, data: 'Imagem cadastrada com sucesso!' });
        } catch (error) {
            console.log(error)
            if ((typeof A === "object" || typeof A === 'function') && (A !== null)) {
                res.send({ code: 2, msg: JSON.stringify(error) });
            } else {
                res.send({ code: 2, msg: error });
            }
        }
    }
})
app.listen(process.env.PORT || 3000);