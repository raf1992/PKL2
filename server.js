const express = require("express"); // Import Express framework
const cors = require("cors");// Import CORS middleware
const db = require("./db");// Import database connection
const app = express();// Create an instance of Express

app.use(cors());// Enable CORS for all routes
app.use(express.json());// Enable JSON parsing for incoming requests

app.get("/siswa", (req, res)=>{
    const sql =`
    SELECT 
    siswa.nama,
    perusahaan.nama_perusahaan,
    pembimbing.nama_pembimbing

    FROM siswa

    JOIN perusahaan
    ON siswa.perusahaan_id = perusahaan.id

    JOIN pembimbing
    ON siswa.pembimbing_id = pembimbing.id
    `;

    db.query(sql, (err, result)=>{
        if(err){
            return res.json(error);
        }

        res.json(result);
});
});

app.listen(3000, ()=>{
    console.log("Server running");
});