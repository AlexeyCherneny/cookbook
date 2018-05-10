import axios from 'axios';

axios.defaults.baseURL = 'http://606fc638.ngrok.io';

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
      throw err;
    }
  }

  async createCategoryRecipe(args) {
    try {
      const res = await axios.post(`${this.path}/new`, { ...args });
 
      return res;
    } catch (err) {
      throw err;
    }
  }
}

export { CategoriesApi };

class UserApi {
  constructor() {
    this.path = 'api/users';
  }

  async login(args) {
    try {
      const { data } = await axios.post(`${this.path}/auth0`, args);

      return data;
    } catch (err) {
      throw err;
    }
  }
}

export const User = new UserApi();
