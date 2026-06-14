const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

/* Middlewares*/
app.use(cors())
app.use(express.json())

/* Rutas */
const aiRoutes = require('./routes/ai.routes')
app.use('/api/ai', aiRoutes)

/* Ruta de prueba */
app.get('/', (req, res) => {
    res.json({ 
        message: 'API con IA funcionando',
        version: '1.0.0'
    })
})

const PORT = process.env.PORT || 3004
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})