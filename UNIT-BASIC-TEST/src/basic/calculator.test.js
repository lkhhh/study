const Calculator = require('../calculator')
const cal=require('../calculator')
const tmp =new Calculator();

describe('Calculator',()=>{
    let cal;
    beforeEach(()=>{
        cal=new Calculator();
    });
    it('inits with 0',()=>{
        expect(cal.value).toBe(0);
    })

    it('sets',()=>{
        cal.set(9);
        expect(cal.value).toBe(9);
    })

    it('clear',()=>{
        cal.set(9);
        cal.clear();
        expect(cal.value).toBe(0)
    })

    it('adds',()=>{
        cal.set(1);
        cal.add(2);

        expect(cal.value).toBe(3);

    })
    it('add should throw an error if value is greater than100',()=>{
        expect(()=>{
            cal.add(101);
        }).toThrow('Value can not be greater than 100');
    });

    describe('divides',()=>{
        it('0/0===NaN',()=>{
            cal.divide(0);
            expect(cal.value).toBe(NaN);
        });
        it('1/0===Inginity',()=>{
            cal.set(1);
            cal.divide(0);
            expect(cal.value).toBe(Infinity);
        });
        it('4/4===1',()=>{
            cal.set(4)
            cal.divide(4);
            expect(cal.value).toBe(1);
        })
    })
})