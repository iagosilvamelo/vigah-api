'use strict'

const User = use('App/Models/User');

class RegisterService {
  async create(request) {
    const data = request.only(['username', 'email', 'password']);

    if (await this.registerExists('email', data.email)) {
      throw new Error('E-mail já cadastrado!');
    }

    if (await this.registerExists('username', data.username)) {
      throw new Error('Username já cadastrado!');
    }

    return await User.create(data);
  }

  async registerExists(column, value) {
    return !!(await User.findBy(column, value));
  }
}

module.exports = RegisterService;
