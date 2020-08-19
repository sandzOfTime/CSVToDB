const Sequelize = require('sequelize');


module.exports.insertJson = (jsonObj) => {

    //Establish connection with database
    const sequelize = new Sequelize(process.env.POSTGRES_CONNECTION);

    //Define user tables
    const testStg = sequelize.define('User', {
        Name: Sequelize.STRING,
        IsAdult: Sequelize.BOOLEAN,
        Age: Sequelize.INTEGER
    });


    //Sync models with database and insert records
    sequelize.sync()
        .then(() => {
            testStg.destroy({ truncate: true })
                .then(() => {
                    testStg.bulkCreate(jsonObj, { validate: true })
                })
                .then(() => {
                    return testStg.findAll();
                })
                .then((data) => {
                    console.log('Data inserted');
                    console.log(data);
                })
                .catch((error) => {
                    console.log(error);
                })
        })


};