// import library pg
const { Pool } = require('pg');
 
// konfigurasi koneksi
const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'superadmin',
  database: 'dvdrental',
  port: 5433,
})

// panggil koneksi
pool.connect((err,res)=>{
  if(err){
    console.log('Failed to connecting!')
  }
  else{
    console.log('Connected to Database')
  }
})

module.exports = pool