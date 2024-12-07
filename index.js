const express = require("express");
const cors = require("cors");
const port = process.env.APP_PORT || 3000;
const NotesRoutes = require("./routes/NotesRoutes");
const Notes = require("./models/NotesModel");
const db = require("./config/database");
require("dotenv").config();

const app = express();

(async () => {
    try {
        await db.authenticate();
        console.log('Database connected...');
        
        // Sinkronisasi model
        await Notes.sync(); 

        console.log('Tabel berhasil dibuat!');
    } catch (error) {
        console.error('Database error:', error);
    }
})();

app.use(cors());
app.use(express.json());
app.use("/api", NotesRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});