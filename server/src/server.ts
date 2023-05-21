import 'dotenv/config'

import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { authRoutes } from './routes/auth'

const app = fastify()

app.register(cors, {
  origin: ['https://localhost:3000']
})

app.register(jwt, {
  secret: process.env.JWT_SECRET ?? ''
})

app.register(authRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 4000,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('🚀 HTTP server running on http://localhost:4000')
  })
