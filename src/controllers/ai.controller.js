const { CohereClient } = require('cohere-ai')

const cohere = new CohereClient({
    token: process.env.COHERE_API_KEY
})

/* Chat con IA */
const chat = async (req, res) => {
    try {
        const { message } = req.body

        if (!message) {
            return res.status(400).json({ message: 'El campo message es requerido' })
        }

        const response = await cohere.chat({
            model: 'command-r-08-2024',
            message
        })

        res.json({
            message: 'Respuesta generada exitosamente',
            response: response.text
        })

    } catch (error) {
        res.status(500).json({ message: 'Error generando respuesta', error: error.message })
    }
}

/* Resumir texto */
const summarize = async (req, res) => {
    try {
        const { text } = req.body

        if (!text) {
            return res.status(400).json({ message: 'El campo text es requerido' })
        }

        const response = await cohere.chat({
            model: 'command-r-08-2024',
            message: `Resume el siguiente texto en 3 puntos clave en español:\n\n${text}`
        })

        res.json({
            message: 'Texto resumido exitosamente',
            summary: response.text
        })

    } catch (error) {
        res.status(500).json({ message: 'Error resumiendo texto', error: error.message })
    }
}

/* Traducir texto */
const translate = async (req, res) => {
    try {
        const { text, language } = req.body

        if (!text || !language) {
            return res.status(400).json({ message: 'Los campos text y language son requeridos' })
        }

        const response = await cohere.chat({
            model: 'command-r-08-2024',
            message: `Traduce el siguiente texto al ${language}. Solo devuelve la traducción sin explicaciones:\n\n${text}`
        })

        res.json({
            message: 'Texto traducido exitosamente',
            translation: response.text
        })

    } catch (error) {
        res.status(500).json({ message: 'Error traduciendo texto', error: error.message })
    }
}

module.exports = { chat, summarize, translate }