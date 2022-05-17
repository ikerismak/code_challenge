const fs = require("fs");

class Reader {

    static ReaderPartners(filepath){

        const ReadPartners = fs.readFileSync(filepath)
        return JSON.parse(ReadPartners);
        
    }
}

module.exports = Reader;
