import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
// instancia uma conexão com o db
const prisma = new PrismaClient()

/* HTTP Methods
 * GET: Listar algo
 * POST: Criar algo
 * PUT: Atualizar algo
 * PATCH: Atualizar informação específica
 * DELETE: Deletar algo
 */

app.get('/hello', async () => {
    // findMany(), sem parâmetros, retorna todos os users
    const users = await prisma.user.findMany()
    return users
})

// server aguardando req na porta 3333
app.listen({ port: 3333 }).then(() => {
    console.log('✨ HTTP server running on http://localhost:3333')
})
