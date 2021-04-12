import BlogApi from "lib/api/blogs"
import auth0 from "utils/auth0"

export default async function handleBlog(req, res) {

  if (req.method === 'GET') {
    const json = await new BlogApi().getById(req.query.id)
    return res.json(json.data)
  } 
  
  if (req.method === 'PATCH') {
    try {
      const { accessToken } = await auth0.getSession(req);
      const json = await new BlogApi(accessToken).update(req.query.id, req.body)
      return res.json(json.data)
    } catch(error) {
      return res.status(error.status || 422).json(error.response.data)
    }
  } 
  
  // if (req.method === 'DELETE') {
  //   try {
  //     const { accessToken } = await auth0.getSession(req);
  //     const json = await new BlogApi(accessToken).deleteBlog(req.query.id)
  //     return res.json(json.data)
  //   } catch(error) {
  //     return res.status(error.status || 422).json(error.response.data)
  //   }
  // } 
  
}