const database = require("../database/connection");
const livroService = require("../service/livroService");
const { createBookSchema } = require("../validations/livro/create.validation.");
const { putBookSchema } = require("../validations/livro/put.validation");

class LivroController {
  async novoLivro(request, response) {
    try {
      const bookVerified = createBookSchema.parse(request.body);
      const { nome, autor, tamanho, idcategoria } = bookVerified;
      console.log(nome, autor, tamanho, idcategoria);

      const book = await livroService.create(nome, autor, tamanho, idcategoria);
      return response
        .status(200)
        .json({ message: `Criado com sucesso ${book}` });
    } catch (error) {
      console.log("error ", error);
    }
  }

  async listarLivro(_request, response) {
    try {
      const book = await livroService.get();
      return response.status(200).json(book);
    } catch (error) {
      console.log("error ", error);
      return response.status(404).json({ message: "Sem listagem" });
    }
  }

  async listarUmLivro(request, response) {
    try {
      const id = parseInt(request.params.id);
      const book = await livroService.getById(id);
      return response.status(200).json(book);
    } catch (error) {
      console.log("error ", error);
      return response.status(404).json({ message: "Sem listagem" });
    }
  }

  async atualizarLivro(request, response) {
    try {
      let bookVerified = putBookSchema.parse(request.body);
      const id = parseInt(request.params.id);
      const { nome, autor, tamanho, idcategoria } = bookVerified;
      const book = await livroService.update(
        id,
        nome,
        autor,
        tamanho,
        idcategoria
      );
      return response
        .status(200)
        .json({ message: `Atualizado com sucesso ${book}` });
    } catch (error) {
      console.log("error ", error);
      return response
        .status(404)
        .json({ message: "Não foi possivel atualizar" });
    }
  }

  async removerLivro(request, response) {
    try {
      const id = parseInt(request.params.id);

      const book = await livroService.delete(id);
      return response.status(200).json({message:`Deletado com sucesso ${book}`});
    } catch (error) {
      return response.status(404).json({ message: "Não foi possivel deletar" });
    }
  }
}
module.exports = new LivroController();
