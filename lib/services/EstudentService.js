class EstudentService {

    static getStudents(students){

        const estudentslist = Reader.ReaderPartners(students);
        return estudentslist;  
    }


    static getStudentCertified(students){

        const studentsCertfied = students.filter((element) => element.haveCertification == true);
        return studentsCertfied    
    }

}