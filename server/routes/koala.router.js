
const express = require('express');
const koalaRouter = express.Router();

//let koala = [];

// DB CONNECTION

const pool = require('../routes/pool');

// GET
koalaRouter.get('/',(req,res)=>{
    console.log('in /koalas GET');
    const queryString = `SELECT * FROM koalas`; 
    pool.query(queryString).then ((result)=>{
       res.send(result.rows); 
    }).catch ((err)=>{
        console.log (err);
        res.sendStatus(500);
    });
});

// POST
koalaRouter.post('/', (req,res)=>{
console.log ('in koala POST', req.body);
const queryString = `INSERT INTO koalas ( name, age, gender, ready_to_transfer,notes) VALUES ($1,$2,$3,$4,$5);`;
const values = [req.body.name, req.body.age, req.body.gender, req.body.readyForTransfer, req.body.notes];
pool.query( queryString, values).then((result)=>{
    res.sendStatus(201);//201 = created
}).catch((err)=>{
    console.log(err);
    res.sendStatus(500);
});
});

// PUT


// DELETE

module.exports = koalaRouter;