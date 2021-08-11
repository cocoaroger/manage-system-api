'use strict';

class App {
  constructor(app) {
    this.app = app;
  }

  configWillLoad() {
    require('module-alias/register');
  }
}

module.exports = App;
