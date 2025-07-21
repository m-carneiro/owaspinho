const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
  });


sequelize.authenticate().then(() => {
    console.log('Connection established' + sequelize.threadId);
}).catch((err) => {
    console.log('Error connecting to Db' + err.stack);
    return;
});

module.exports = sequelize;
