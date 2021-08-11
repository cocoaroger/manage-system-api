'use strict';

module.exports = {
  // 修改字段类型
  up: async (queryInterface, Sequelize) => {
    const { BIGINT } = Sequelize;

    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.changeColumn('sys_user', 'id', {
          type: BIGINT,
        }, { transaction: t }),
        queryInterface.changeColumn('sys_user', 'create_by', {
          type: BIGINT,
        }, { transaction: t }),
      ]);
    });
  },

  // 修改字段类型
  down: async (queryInterface, Sequelize) => {
    const { INTEGER } = Sequelize;
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.changeColumn('sys_user', 'id', {
          type: INTEGER,
        }, { transaction: t }),
        queryInterface.changeColumn('sys_user', 'create_by', {
          type: INTEGER,
        }, { transaction: t }),
      ]);
    });
  },
};
