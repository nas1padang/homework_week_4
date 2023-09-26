// import express dan query
const express = require('express')
const router = express.Router()
const pool = require('./queries')

// Menampilkan data seluruh list film
router.get('/', async (req,res)=>{
    const result = await pool.query('SELECT * FROM film')
    res.json(result.rows)
})

// Menampilkan data film tertentu berdasarkan id
router.get('/:id', async (req,res)=>{
    const id = parseInt(req.params.id);

    if(isNaN(id)){
        return res.status(400).json({message : "id must be number!"})
    }

    try{
        const result = await pool.query('SELECT * FROM film where film_id = $1', [id])
        if (result.rows.length===0){
            return res.status(404).json({message : "Data not found!"})
        }
        res.json(result.rows);
    } catch(error){
        res.status(500).json({message : 'Something happen with server.'})
    }

})

module.exports = router