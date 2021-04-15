import axios from 'axios'

class BaseApi {

  constructor(accessToken, subPath) {
    this.config = {}

    if (accessToken) {
      this.config.headers = {
        authorization: `Bearer ${accessToken}`
      }
    }

    this.apiUrl = process.env.PORTFOLIO_API_URL + subPath
  }

  async getAll() {
    return axios.get(this.apiUrl)
  }

  async getById(id) {
    return axios.get(`${this.apiUrl}/${id}`)
  }

  async getByUser() {
    return axios.get(`${this.apiUrl}/profile`, this.config)
  }

  async getBySlug(slug) {
    return axios.get(`${this.apiUrl}/s/${slug}`)
  }

  async create(data) {
    return axios.post(this.apiUrl, data, this.config)
  }

  async update(id, data) {
    return axios.patch(`${this.apiUrl}/${id}`, data, this.config)
  }

}

export default BaseApi