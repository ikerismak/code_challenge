const Reader = require('./../utils/reader.js')
const EstudentService = require('../services/studentService.js')



class StudentController{


    static getStudents(Students){

        if(Students == 'students'){

            const studentJson = Reader.ReaderPartners('visualpartners.json')
            const studentslist = studentJson.map((element) => element)
            return studentslist; 

        }

        else{
            
            return "ERROR: ESTE DATO NO ES VALIDO : INTENTE 'students' "
        }

    }


}


module.exports = StudentController;

const l = StudentController.getStudents('')
console.log(l);