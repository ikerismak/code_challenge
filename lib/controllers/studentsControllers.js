const Reader = require('./../utils/reader.js')
const StudentService = require('../services/studentService.js')



class StudentController{


    static getStudents(students){

        if(students == 'students'){

            const studentJson = Reader.ReaderPartners('visualpartners.json')
            const studentslist = studentJson.map((element) => element)
            return studentslist; 

        }

        else{
            
            return "ERROR: ESTE DATO NO ES VALIDO : INTENTE 'students' "
        }
    }

    static studentsWithCertification(certification){

        if(certification == 'withcertification'){

            const studentJson = Reader.ReaderPartners('visualpartners.json')
            const studenCert = StudentService.getStudentCertified(studentJson);
            return studenCert
            
        }

        else{
            
            return "ERROR: ESTE DATO NO ES VALIDO : INTENTE 'visualpartnership/withcertification' "
        }
    }

    static studentCredits(credits){

        if(credits == 'credits500'){

            const studentJson = Reader.ReaderPartners('visualpartners.json')
            const studentsFH = StudentService.getStudentsFivHunCredits(studentJson)
            return studentsFH
        }

        else{
            
            return "ERROR: ESTE DATO NO ES VALIDO : INTENTE 'visualpartnership/credits500' "
        }

    }


}


module.exports = StudentController;
