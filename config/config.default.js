/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  config.keys = appInfo.name + '_1628648740961_9674';
  config.middleware = [];
  const userConfig = {
    appName: 'manage-system-api',
  };

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'manage-system',
    timezone: '+08:00',
    username: 'root',
    password: '123456',
  };

  config.validate = {
    enable: true,
    package: 'egg-validate',
  };

  return {
    ...config,
    ...userConfig,
  };
};
