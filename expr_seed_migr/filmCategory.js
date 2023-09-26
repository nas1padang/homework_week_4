// import express dan query
const express = require('express')
const router = express.Router()
var pool = require('./queries')

// Menampilkan data list category
router.get('/', async (req,res)=>{
    const result = await pool.query('SELECT * FROM category')
    res.json(result.rows)
})

// Menampilkan data list film berdasarkan category
router.get('/:id', async (req,res)=>{

    const id = parseInt(req.params.id);

    if(isNaN(id)){
        return res.status(400).json({message : "id must be number!"})
    }

    try{
        const result = await pool.query('SELECT f.* FROM film f JOIN film_category fc ON f.film_id=fc.film_id JOIN category c ON fc.category_id=c.category_id where c.category_id = $1', [id])
        if (result.rows.length===0){
            return res.status(404).json({message : "Data not found!"})
        }
        res.json(result.rows);
    } catch(error){
        res.status(500).json({message : 'Something happen with server.'})
    }

})

module.exports = router