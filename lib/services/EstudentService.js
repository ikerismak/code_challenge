class EstudentService {

    static getEstudents(Estudents){

        const estudentslist = Reader.ReaderPartners(Estudents);
        return estudentslist;  
    }


    static getEstudentCertified(Estudents){

        const estudentsCertfied = Estudents.filter((element) => element.haveCertification == true);
        return estudentsCertfied;    
    }

    static getEstudentsFivHunCredits(Estudents){

        const fiveHundreadCredits = Estudents.forEach(element => {

            if(element.credits >= 500){
        
                return fiveHundreadCredits;
            }
        
        });
            
    }

}

module.exports = EstudentService;