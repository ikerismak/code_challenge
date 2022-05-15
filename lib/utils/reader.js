const fs = require("fs");

class Reader {

    static ReaderPartners(filepath){

        const ReadPartners = fs.readFileSync(filepath)
        return JSON.parse(ReadPartners);
        
    }
}

const list = Reader.ReaderPartners("visualpartners.json")
console.log(list.length);