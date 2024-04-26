const database = require("../database/connection");

class livroService {
  async create(nome, autor, tamanho, idcategoria) {
    try {
      const book = await database
        .insert({ nome, autor, tamanho, idcategoria })
        .table("livro");
      console.log("book:", book);
    } catch (error) {
      console.log("error ", error);
    }
  }
  async get() {
    try {
      const book = await database.select("*").table("livro");
      console.log("book:", book);
      return book;
    } catch (error) {
      console.log("error ", error);
      throw error;
    }
  }

  async getById(id) {
    try {
      const book = await database
        .select("*")
        .table("livro")
        .where({ idlivro: id });
      console.log("book ", book);
      return book;
    } catch (error) {
      console.log("error ", error);
      throw error;
    }
  }

  async update(id, nome, autor, tamanho, idcategoria) {
    try {
      const book = await database
        .table("livro")
        .where({ idlivro: id })
        .update({ nome, autor, tamanho, idcategoria });
      return book;
    } catch (error) {
      console.log("error ", error);
      throw error;
    }
  }

  async delete(id) {
    try {
      const book = await database.where({ idlivro: id }).del().table("livro");
      return book;
    } catch (error) {
      console.log("error ", error);
      throw error;
    }
  }
}
module.exports = new livroService();
