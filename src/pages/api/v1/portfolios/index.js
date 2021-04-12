import PortfoliosApi from "lib/api/portfolios";
import auth0 from "utils/auth0"

export default async function createPortfolio(req, res) {
  try {
    const { accessToken } = await auth0.getSession(req)
    // console.log(accessToken)
    // debugger
    const json = await new PortfoliosApi(accessToken).create(req.body)
    return res.json(json.data)
  } catch (error) {
    // console.log('We are getting error here! Error: ' + error.message)
    return res.status(error.response.status || 422).end(error.response.data)
  }
}