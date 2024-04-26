const database = require("../database/connection");

class categoriaService {
  async create(nome, descricao) {
    try {
      const category = await database
        .insert({ nome, descricao })
        .table("categoria");
      console.log("category", category);
    } catch (error) {
      console.log(error);
    }
  }
  async get() {
    try {
      const category = await database.select("*").table("categoria");
      console.log("category =>", category);
      return category;
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  }

  async getById(id) {
    try {
      const category = await database
        .select("*")
        .table("categoria")
        .where({ idcategoria: id });
      console.log("category ", category);
      return category;
    } catch (error) {
      console.log("error ", error);
      throw error;
    }
  }

  async update({ id, nome, descricao }) {
    try {
      const category = await database
        .table("categoria")
        .where({ idcategoria: id })
        .update({ nome, descricao });
      return category;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      const category = await database
        .where({ idcategoria: id })
        .del()
        .table("categoria");
      return category;
    } catch (error) {
      console.log("error ", error);
    }
  }
}

module.exports = new categoriaService();
