# manage-system-api
eggjs 实现后台管理接口

## 运行
npm run dev

## 部署
npm start

npm stop

[egg]: https://eggjs.org

## 环境
node v14.16.0

npm 6.14.11

--- 

## 初始化项目
npm init egg --type=simple

npm install

--- 

## 数据库相关
### 安装命令
npm install --save egg-sequelize mysql2

npm install --save-dev sequelize-cli

### 文档地址：
egg-sequelize文档: https://github.com/eggjs/egg-sequelize

sequelize中文文档: https://www.sequelize.com.cn/

数据库操作文档: https://sequelize.org/master/class/lib/dialects/mssql/query-interface.js~MSSqlQueryInterface.html

### 初始化 Migrations 配置文件和目录
npx sequelize init:config

npx sequelize init:migrations

### Migration 操作
创建 migration 文件：npx sequelize migration:generate --name=sys_user

执行 migration 文件：npx sequelize db:migrate

撤销：
```
npx sequelize db:migrate:undo
npx sequelize db:migrate:undo:all
```

### Seeds 操作
创建演示数据：npx sequelize-cli seed:generate --name demo-user

执行：npx sequelize-cli db:seed:all

撤销：
```
npx sequelize-cli db:seed:undo
npx sequelize-cli db:seed:undo:all
```

### sequelize-auto从数据库表自动生成Sequelize模型(Model)
https://itbilu.com/nodejs/npm/41mRdls_Z.html




