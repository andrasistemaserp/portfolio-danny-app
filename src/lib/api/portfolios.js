import axios from 'axios'
import BaseApi from './BaseApi'

class PortfoliosApi extends BaseApi {

  constructor(accessToken) {
    super(accessToken, '/portfolios')
  }

  async getAll() {
    return axios.get(this.apiUrl)
  }

  async delete(id) {
    return axios.delete(`${this.apiUrl}/${id}`, this.config)
  }

}

export default PortfoliosApi