'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 sys_user 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING } = Sequelize;
    await queryInterface.createTable('sys_user', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(64),
      login_name: { type: STRING(64), unique: true },
      password: STRING(64),
      avatar: STRING(100),
      create_by: INTEGER,
    });
  },

  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('sys_user');
  },
};
