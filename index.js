require('dotenv').config({ path: 'variables.env' });
//User defined modules
const csvConvert = require('./csv-convert');
const sqlConnector = require('./sqlConnector');




var main = async () => {

    //CSV file path
    const csvPath = './TestDBFile.csv';

    try {
        
        var json =  await csvConvert.convertCSVtoJSON(csvPath);

        sqlConnector.insertJson(json);
        
    } catch (error) {
        
        console.error(error);
    }



};


//Run main
main();