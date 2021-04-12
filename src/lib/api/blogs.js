import BaseApi from 'lib/api/BaseApi'
// import axios from 'axios'

class BlogsApi extends BaseApi {

  constructor(accessToken) {
    super(accessToken, '/blogs')
  }

}

export default BlogsApi