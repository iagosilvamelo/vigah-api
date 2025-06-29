'use strict'

const RegisterService = use('App/Services/Auth/RegisterService')

class AuthController {
  async register({ request }) {
    const registerService = new RegisterService();
    return await registerService.create(request);
  }

  async authenticate({ request, auth }) {
    const { email, password } = request.all();
    return await auth.attempt(email, password);
  }
}

module.exports = AuthController
