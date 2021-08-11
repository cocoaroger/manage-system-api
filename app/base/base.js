'use strict';
const Controller = require('egg').Controller;

class BaseController extends Controller {
  get user() {
    return this.ctx.request.header.userBody;
  }

  success(data) {
    this.ctx.body = {
      code: 200,
      message: '执行成功',
      data,
    };
  }

  error(code, message, data) {
    this.ctx.body = {
      code,
      message,
      data,
    };
  }
}

module.exports = BaseController;
