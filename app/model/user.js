'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  return app.model.define(
    'User',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(64),
      login_name: { type: STRING(64), unique: true },
      password: STRING(64),
      avatar: STRING(100),
      create_by: INTEGER,
      created_at: DATE,
      updated_at: DATE,
    },
    {
      tableName: 'sys_user',
    });
};
