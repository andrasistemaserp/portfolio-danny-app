import auth0 from 'utils/auth0'

export default async function callback(req, res) {
  try {
    await auth0.handleCallback(req, res, { redirectTo: '/' })
  } catch (error) {
    res.status(error.status || 400).send({ message: error.message })
  }
}