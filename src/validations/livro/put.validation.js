const { z } = require("zod");

const putBookSchema = z.object({
  nome: z
    .string()
    .refine(
      (nome) => nome.length > 3,
      { message: "O nome do livor precisa de no mínimo 3 letras" },
      z.string().min(1, { message: "Esse campo não pode ser vazio" })
    ),
  autor: z
    .string()
    .refine(
      (autor) => autor.length > 3,
      { message: "O autor precisa de no mínimo 3 letras" },
      z.string().min(1, { message: "Esse campo não pode ser vazio" })
    ),
  tamanho: z.enum(
    ["PEQUENO", "MEDIO", "GRANDE"],
    {
      message:
        "Os tamanhos são PEQUENO,MEDIO,GRANDE. Não são aceitos outros valores",
    },
    z.string().min(1, { message: "Esse campo não pode ser vazio" })
  ),
  idcategoria: z
  .string()
  .refine(
    (idcategoria) => {
      const idCategoriaNumero = parseInt(idcategoria, 10); // Converte a string para número/ 10 serve para base numerica
      return isNaN(idCategoriaNumero) ? false : idCategoriaNumero > 0; // Verifica se é um número inteiro positivo
    },
    { message: "O ID deve ser um número inteiro positivo" },
    z.string().min(1, { message: "Esse campo não pode ser vazio" })
  ),
});

module.exports = {
  putBookSchema,
};
