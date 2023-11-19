const baseUrl = import.meta.env.VITE_API_URL
const auth = baseUrl + '/auth'
const users = baseUrl + '/users'
const posts = baseUrl + '/posts'
const images = baseUrl + '/images'

const api = Object.freeze({
  login: auth + '/login',
  register: auth + '/register',
  changePassword: auth + '/password',
  forgotPassword: auth + '/forgot-password',
  resetPassword: auth + '/reset-password',
  users,
  getUser: users + '/profile',
  updateUser: users + '/personaldata',
  posts,
  images
})

const method = Object.freeze({
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  patch: 'PATCH',
  delete: 'DELETE',
  head: 'HEAD'
})

export {
  api,
  method
}
