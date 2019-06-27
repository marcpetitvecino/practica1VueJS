const express = require('express')
const app = express()
var llistatProductes =  require('./data.json');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var path = require('path');
var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get('/', function(req, res) {

    res.sendFile(__dirname+'/akemi_vue/index.html');

});

app.use(express.static(__dirname + '/akemi_vue/media'));


/*

function findTasquesByUserID(userId) {

    return llistatTasques.filter(x => x.propietari === userId);

}

function addTasca(tasca) {

    llistatTasques.push(tasca);

}

function updateTasca(idTasca, tasca) {

    var indexTrobat = llistatTasques.findIndex(x => x.id == idTasca);
    llistatTasques[indexTrobat] = tasca;
    console.log(indexTrobat);

}

function deleteTasca(idTasca) {

    var indexTrobat = llistatTasques.findIndex(x => x.id == idTasca)
    llistatTasques.splice(indexTrobat, 1)

}

app.post('/tasques', function (req, res) {

    addTasca(req.body)
    console.log(req.body)
    res.send(req.body)

})
*/

app.get('/productes', function (req, res) {

    res.send(llistatProductes);

})
/*

app.get('/tasques/:userId', function (req, res) {

    res.send(findTasquesByUserID(req.params.userId))

})

app.post('/tasques', function (req, res) {

    res.send('Preparat per a insertar una tasca')

})

app.put('/tasques/:tascaId', function (req, res) {

    updateTasca(req.params.tascaId,req.body);
    console.log(req.body)
    res.send(req.body)

})

app.delete('/tasques/:tascaId', function (req, res) {

    deleteTasca(req.params.tascaId)
    res.send('Tasca: ' + req.params.tascaId + ' esborrada')

})
*/
app.use('/', router);
app.listen(3000, () => console.log('ApiServer escoltant el port 3000!'))

