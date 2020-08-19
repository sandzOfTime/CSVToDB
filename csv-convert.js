const csv = require("csvtojson");

//Converts CSV to JSON object
module.exports.convertCSVtoJSON =  async (csvPath) => {

    try {
        
        return await csv().fromFile(csvPath);
        
    } catch (error) {
        
        console.error(error);
    }

    return '';

};