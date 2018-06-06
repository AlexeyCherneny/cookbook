import axios from 'axios';

axios.defaults.baseURL = 'http://c9c13f12.ngrok.io';

class CategoriesApi {
  constructor() {
    this.path = 'api/categories';
  }

  async fetchCategoryRecipes(args) {
    const { categoryId } = args;
    try {
      const { data } = await axios.get(`${this.path}/${categoryId}/recipes`);

      return data.recipes;
    } catch (err) {
      throw err;
    }
  }

  async createCategoryRecipe(args) {
    const { categoryId } = args;

    try {
      const resp = await axios.post(`${this.path}/${categoryId}/recipes/new`, { ...args });

      return resp.data;
    } catch (err) {
      throw err;
    }
  }

  async deleteCategoryRecipe(args) {
    const { categoryId } = args;

    try {
      const resp = await axios.delete(`${this.path}/${categoryId}/recipes`, { data: args });

      return resp.data;
    } catch (err) {
      throw err;
    }
  }

  async updateCategory(args) {
    const { categoryId } = args;

    try {
      const resp = await axios.post(`api/categories/${categoryId}/update`, args);

      return resp.data;
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

  async getUserInfo(args) {
    const { userId } = args;

    try {
      const resp = await axios.get(`${this.path}/${userId}`);

      return resp;
    } catch (err) {
      throw err;
    }    
  }

  async fetchUserCategories(args) {
    const { userId } = args;

    try {
      const resp = await axios.get(`${this.path}/${userId}/categories`);

      return { userCategories: resp.data.categories };
    } catch (err) {
      throw err;
    }
  }

  async deleteUserCategory(args) {
    const { userId } = args;

    try {
      const resp = await axios.delete(`${this.path}/${userId}/categories`, { data: args });

      return { categoryIds: resp.data.categoryIds, categoryId: resp.data.categoryId };
    } catch (err) {
      throw err;
    }
  }

  async createUserCategory(args) {
    const { userId } = args;

    try {
      const resp = await axios.post(`${this.path}/${userId}/categories`, args);

      return resp.data;
    } catch (err) {
      throw err;
    }
  }
}

export { UserApi };

export const User = new UserApi();

// ------------------ Recipes API ------------------
class RecipesApi {
  constructor() {
    this.path = 'api/recipes';
  }

  async updateRecipe(args) {
    const { recipeId } = args;

    try {
      const resp = await axios.post(`${this.path}/${recipeId}/update`, args);

      return resp.data;
    } catch (err) {
      throw err;
    }
  }
}

export { RecipesApi };
