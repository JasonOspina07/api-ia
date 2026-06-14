# API con IA Integrada

API REST que integra inteligencia artificial para chat, resumen y traducción de textos, construida con Node.js, Express y Cohere AI.

## Tecnologías

- **Node.js** + **Express** — Servidor
- **Cohere AI** — Modelos de lenguaje natural
- **REST API** — Arquitectura de la API

## Características

- Chat inteligente con IA
- Resumen automático de textos en 3 puntos clave
- Traducción a cualquier idioma

## Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | /api/ai/chat | Chat con IA |
| POST | /api/ai/summarize | Resumir texto |
| POST | /api/ai/translate | Traducir texto |

## Instalación

1. Clona el repositorio
\```bash
git clone https://github.com/JasonOspina07/api-ia.git
cd api-ia
\```

2. Instala las dependencias
\```bash
npm install
\```

3. Configura las variables de entorno
\```
PORT=3004
COHERE_API_KEY=tu_clave_aqui
\```

4. Inicia el servidor
\```bash
npm run dev
\```

## Ejemplos de uso

### Chat con IA
\```json
POST /api/ai/chat
{
  "message": "Explícame qué es una API REST"
}
\```

### Resumir texto
\```json
POST /api/ai/summarize
{
  "text": "Texto largo que quieres resumir..."
}
\```

### Traducir texto
\```json
POST /api/ai/translate
{
  "text": "Hello world",
  "language": "español"
}
\```