const fs = require("fs");

class Reader {

    static ReaderPartners(filepath){

        const ReadPartners = fs.readFileSync(filepath)
        return JSON.parse(ReadPartners);
        
    }
}

const list = Reader.ReaderPartners("visualpartners.json")
console.log(list.length);

// const list3 = list.map((mapper)  => mapper);
// console.log(list3);

const nuevo = list.forEach(element => {

    if(element.credits >= 500){

        console.log(element);
    }

});






// const listafinal = score(list3);
// console.log(listafinal);


// console.log(list3.length);



// const list2 = list.filter((element) => element.haveCertification == true)
// console.log(list2);
// console.log(`all the partners with certification are : ${list2.length}`);
