import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://aapz-vservice.herokuapp.com',
  headers: {
    'Access-Control-Allow-Headers':
      'Origin, Authorization, Accept, Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  // Users
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
  deleteUser(token, id) {
    return apiClient.delete(`/users/remove/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
  },
  upgradeUser(token, id) {
    return apiClient.post(`/users/upgrade/${id}`, null, {
      headers: { Authorization: `Bearer ${token}` }
    })
  },
  downgradeUser(token, id) {
    return apiClient.post(`/users/downgrade/${id}`, null, {
      headers: { Authorization: `Bearer ${token}` }
    })
  },

  // Events
  createEvent(token, data) {
    return apiClient.post('/events/create', data, {
      headers: { Authorization: `Bearer ${token}` }
    })
  },
  getAllEvents(token) {
    return apiClient.get('/events', {
      headers: { Authorization: `Bearer ${token}` }
    })
  },
  getSubEvents(token) {
    return apiClient.get('/events/subscribed', {
      headers: { Authorization: `Bearer ${token}` }
    })
  },
  getEvent(token, id) {
    return apiClient.get(`/events/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
  },
  subscribe(token, id) {
    return apiClient.post(`/events/subscribe/${id}`, null, {
      headers: { Authorization: `Bearer ${token}` }
    })
  },
  unsubscribe(token, id) {
    return apiClient.post(`/events/unsubscribe/${id}`, null, {
      headers: { Authorization: `Bearer ${token}` }
    })
  },
  getManagerEvents(token) {
    return apiClient.get('/events/manager', {
      headers: { Authorization: `Bearer ${token}` }
    })
  },
  getManagerEvent(token, id) {
    return apiClient.get(`/events/manager/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
  },
  changeAttendance(token, attId, newStatus) {
    return apiClient.post(`/events/change_att/${attId}/${newStatus}`, null, {
      headers: { Authorization: `Bearer ${token}` }
    })
  },

  // Stats
  getStats(token) {
    return apiClient.get('/stats/visit', {
      headers: { Authorization: `Bearer ${token}` }
    })
  }
}
