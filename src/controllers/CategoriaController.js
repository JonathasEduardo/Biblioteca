const database = require("../database/connection");
const categoriaService = require("../service/categoriaService");
const {
  createCategorySchema,
} = require("../validations/categoria/create.validation");

class CategoriaController {
  async novaCategoria(request, response) {
    try {
      const categoryVerified = createCategorySchema.parse(request.body);
      const { nome, descricao } = categoryVerified;
      console.log(nome, descricao);

      const category = await categoriaService.create(nome, descricao);
      return response
        .status(200)
        .json({ message: `Criado com sucesso ${category}` });
    } catch (error) {
      console.log("error", error);
      return response.status(404).json({ message: "Erro" });
    }
  }

  async listarCategoria(_request, response) {
    try {
      const category = await categoriaService.get();
      return response.status(200).json(category);
    } catch (error) {
      console.log("error", error);
      return response.status(404).json({ message: "Sem listagem" });
    }
  }

  async listarUmaCategoria(request, response) {
    try {
      const id = parseInt(request.params.id);
      const category = await categoriaService.getById(id);
      return response.status(200).json(category);
    } catch (error) {
      return response.status(404).json({ message: "Sem listagem" });
    }
  }

  async atualizarCategoria(request, response) {
    try {
      const { id } = request.params;
      const { nome, descricao } = request.body;
      const category = await categoriaService.update({ id, nome, descricao });
      return response
        .status(200)
        .json({ message: `Atualizado com sucesso ${category}` });
    } catch (error) {
      return response.status(404).json({ message: "Sem listagem" });
    }
  }

  async removerCategoria(request, response) {
    try {
      const id = parseInt(request.params.id);
      
      const category = await categoriaService.delete(id)
      return response.status(200).json({message:`Deletado com sucesso ${category}`})
    } catch (error) {
      console.log("error ", error);
      return response.status(404).json({message:"Erro ao deletar"});
    }
  }
}

module.exports = new CategoriaController();
