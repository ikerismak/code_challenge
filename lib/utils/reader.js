const fs = require("fs");

class Reader {

    static ReaderPartners(filepath){

        const ReadPartners = fs.readFileSync(filepath)
        return JSON.parse(ReadPartners);
        
    }
}

module.exports = Reader;







// const finArray = array.map((element) => element)
// const otra = finArray.find(element2 => element2 != {})
// const otra2 = finArray.slice(0,1)
// // console.log(otra);
// // console.log(otra2);

// const ejemplo = otra2.map((element) => element.credits)
// const l = {}

// console.log(typeof l);
// console.log(typeof ejemplo);