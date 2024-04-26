const { z } = require('zod');

const createCategorySchema = z.object({
  nome: z.string().refine(nome => nome.length > 3, { message: 'O nome da categoria precisa de no mínimo 3 letras' }),
  descricao: z.string().refine(descricao => descricao.length > 10, { message: 'A descrição da categoria precisa de no mínimo 10 letras' }),
});

module.exports = {
  createCategorySchema,
}