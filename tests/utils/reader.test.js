const Reader = require('./../../lib/utils/reader.js');


describe('This tests are for reader class and its methods',()=>{

    test('1). return all the json',()=>{

        const test1 = Reader.ReaderPartners('visualpartners.json')
        const testDataNumber = test1.map((counter) => counter)


        expect(test1.length).toEqual(testDataNumber.length)
        

    })

    
    test('2). the first element',()=>{

        const firstElement = 
            [
                {
                id: '6264d5d89f1df827eb84bb23',
                name: 'Warren',
                email: 'Todd@visualpartnership.xyz',
                credits: 508,
                enrollments: [ 'Visual Thinking Intermedio', 'Visual Thinking Avanzado' ],
                previousCourses: 1,
                haveCertification: true
                }
            ]

        const test1 = Reader.ReaderPartners('visualpartners.json')
        const testDataNumber = test1.map((counter) => counter)
        const testfirstelement = testDataNumber.slice(0,1)


        expect(testfirstelement).toEqual(firstElement)
        

    })

    test('3). the first element',()=>{

        const firstElement = {}
        const test1 = Reader.ReaderPartners('visualpartners.json')
        const testDataNumber = test1.map((counter) => counter)
        const testfirstelement = testDataNumber.slice(0,1)

        expect(typeof testfirstelement).toEqual(typeof firstElement)
        

    })

    
})