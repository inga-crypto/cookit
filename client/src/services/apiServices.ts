import axios from 'axios'
import { Recipe, User } from './types'

const apiClient = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

//USER

export interface AuthResponse {
  accessToken: any;
  user: User
}

export const signUp = async (user: User) => {
  try {
    const response = await apiClient.post<AuthResponse>('/api/auth/signup', user)
    return response
  } catch (error) {
    console.error(error)
  }
}

export const login = async (user: User) => {
  try {
    const response = await apiClient.post<AuthResponse>('/api/auth/login', user)
    return response
  } catch (error) {
    console.error(error)
  }
}

export const logout = async (tokenName: string, user: string) => {
  localStorage.removeItem(tokenName)
  localStorage.removeItem(user)
}

//RECIPE

export const getRecipes = async () => {
  try {
    const response = await apiClient.get<Recipe[]>('/api/recipes')
    return response
  } catch (error) {
    console.error(error)
  }
}
export const getRecipe = async (id: string) => {
  try {
    const response = await apiClient.get<Recipe>('/api/recipes/' + id)
    return response
  } catch (error) {
    console.error(error)
  }
}
export const postRecipes = async (tokenName: string, data: Recipe) => {
  try {
    const response = await apiClient.post('/api/recipes/create', data, {
      headers: { 'jwt': tokenName }
    });
    return response
  } catch (error) {
    console.error(error)
  }
}

//export default api

// export default {
//   getEvents() {
//     return apiClient.get('/events')
//   },
//   getEvent(id) {
//     return apiClient.get('/events/' + id)
//   },
// }
