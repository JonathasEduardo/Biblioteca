const { z } = require('zod');

const createBookSchema = z.object({
  nome: z.string().refine(nome => nome.length > 3, { message: 'O nome da categoria precisa de no mínimo 3 letras' },z.string().min(1, {message:"Esse campo não pode ser vazio"})),
  autor: z.string().refine(descricao => descricao.length > 3, { message: 'O autor precisa de no mínimo 3 letras' },z.string().min(1, {message:"Esse campo não pode ser vazio"})),
  tamanho: z.enum(["PEQUENO","MEDIO","GRANDE"],{ message: 'Os tamanhos são PEQUENO,MEDIO,GRANDE. Não são aceitos outros valores' },z.string().min(1, {message:"Esse campo não pode ser vazio"})),
  //idcategoria: z.number().int({ message: 'Escreva um numero inteiro e positivo' }),
});


module.exports = {
  createBookSchema,
}