import axios from 'axios';

axios.defaults.baseURL = 'http://28e0c222.ngrok.io';

const fakeCategoryId = '5aeb7ad631fec425026bad5c';

class CategoriesApi {
  constructor() {
    this.categoryId = fakeCategoryId;
    this.path = `api/categories/${this.categoryId}/recipes`;
  }

  async fetchCategoryRecipes() {
    try {
      const { data } = await axios.get(this.path);

      return data.recipes;
    } catch (err) {
      return err
    }
  }

  async createCategoryRecipe(args) {
    try {
      const res = await axios.post(`${this.path}/new`, { ...args });
      console.log(res);
      return res;
    } catch (err) {
      console.log(err)
    }
  }
}

export { CategoriesApi };
