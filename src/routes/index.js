const express = require ('express');
const router = express.Router();


const Tarea = require('../models/taks');


router.get('/', async(req, res) => {
    const tareas =  await Tarea.find();
    res.render('index', {
        tareas
    });
});

router.post('/add', async (req, res) => {
    const tarea = new Tarea(req.body);
    await tarea.save();
    res.redirect('/');
});

router.get('/convertir/:id', async (req, res) => {
    const { id } = req.params;
    const tarea = await Tarea.findById(id);
    tarea.estado = !tarea.estado;
    await tarea.save();
    res.redirect('/');
});

router.get('/editar/:id', async (req,res) =>{
    const { id } = req.params;
    const tarea = await Tarea.findById(id);
    res.render('edit')
    
})



router.get('/delete/:id', async (req, res)=>{
    const { id } = req.params;
    await Tarea.remove({_id: id});
    res.redirect('/');
});



module.exports = router;


