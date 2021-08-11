'use strict';
const BaseController = require('../base/base');

class UserController extends BaseController {
  async index() {
    const users = await this.ctx.model.User.findAll({ limit: 20, offset: 0 });
    this.success(users);
  }
}

module.exports = UserController;
