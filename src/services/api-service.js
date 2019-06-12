import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://aapz-vservice.herokuapp.com',
  headers: {
    'Access-Control-Allow-Headers':
      'Origin, Authorization, Accept, Content-Type',
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  authenticate(username, password) {
    let data = {
      username,
      password
    }
    return apiClient.post('/users/authenticate', data)
  },
  register(userData) {
    return apiClient.post('/users/register', userData)
  },
  getAllUsers(token) {
    return apiClient.get('/users', {
      headers: { Authorization: `Bearer ${token}` }
    })
  },
  getAllEvents(token) {
    return apiClient.get('/events', {
      headers: { Authorization: `Bearer ${token}` }
    })
  },
  deleteUser(token, id) {
    return apiClient.delete(`/users/remove/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
  },
  getStats(token) {
    return apiClient.get('/stats/visit', {
      headers: { Authorization: `Bearer ${token}` }
    })
  }
}
