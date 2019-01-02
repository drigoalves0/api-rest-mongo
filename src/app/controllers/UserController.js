const User = require('../models/User')
class UserController {
  async store (req, res) {
    const { email } = req.body
    if (await User.findOne({ email })) {
      return res.status(400).json({ error: 'Usuario ja cadastrado' })
    }
    const user = await User.create(req.body)
    return res.json(user)
  }
  async teste (req, res) {
    return res.json({ error: 'teste ok' })
  }
}
module.exports = new UserController()
