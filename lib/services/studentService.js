// const Reader = require("../utils/reader");

class StudentService {


    static getStudentCertified(Students){

        const StudentsCertfied = Students.filter((element) => element.haveCertification == true);
        return StudentsCertfied;    
    }

    static getStudentsFivHunCredits(students){

        const array = []

        students.forEach(element => {

            if(element.credits >= 500){

                array.push(element) 

            }
        
        });

        return array
            
    }

}

module.exports = StudentService;


// const l = Reader.ReaderPartners("visualpartners.json")
// // console.log(l);

// const a = StudentService.getStudentsFivHunCredits(l)
// console.log(a);
