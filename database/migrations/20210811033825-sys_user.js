'use strict';

module.exports = {
  // 给 sys_user 表添加字段：created_at, updated_at
  up: async (queryInterface, Sequelize) => {
    const { DATE } = Sequelize;

    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('sys_user', 'created_at', {
          type: DATE,
        }, { transaction: t }),
        queryInterface.addColumn('sys_user', 'updated_at', {
          type: DATE,
        }, { transaction: t }),
      ]);
    });
  },

  // 删除字段：created_at, updated_at
  down: async queryInterface => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('sys_user', 'created_at', { transaction: t }),
        queryInterface.removeColumn('sys_user', 'updated_at', { transaction: t }),
      ]);
    });
  },
};
