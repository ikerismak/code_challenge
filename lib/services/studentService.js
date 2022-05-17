class StudentService {


    static getStudentCertified(Students){

        const StudentsCertfied = Students.filter((element) => element.haveCertification == true);
        return StudentsCertfied;    
    }

    static getStudentsFivHunCredits(Estudents){

        const fiveHundreadCredits = Estudents.forEach(element => {

            if(element.credits >= 500){
        
                return fiveHundreadCredits;
            }
        
        });
            
    }

}

module.exports = StudentService;