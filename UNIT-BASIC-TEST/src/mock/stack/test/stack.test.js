const Stack = require('../stack.js');
jest.mock('../stack');

describe('Stack',()=>{
    let stack;

    beforeEach(()=>{
        stack=new Stack();
    });
    it('is createsd empty',()=>{
        expect(stack.size()).toBe(0);
    })
    it('push',()=>{
        stack.push(1);
        expect((stack.size()).toBe(1));
    });
    
    describe('pop',()=>{
        it('empty stack throw error',()=>{
            expect(()=>{
                stack.pop();
            }).toThrow('Stack is empty');
        });
        it('returns last item and remove last item',()=>{
            stack.push(1);
            stack.push(2);

            expect(stack.pop()).toBe(2);
            expect(stack.size()).toBe(1);
        })
    });
    
    i
})
