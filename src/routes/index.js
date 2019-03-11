const express = require ('express');
const router = express.Router();


const Tarea = require('../models/taks');


router.get('/', (req, res) => {
    res.render('index')
});

router.post('/add', async (req, res) => {
    const tarea = new Tarea(req.body);
    await tarea.save();
    res.send('Recibido');
});

module.exports = router;


