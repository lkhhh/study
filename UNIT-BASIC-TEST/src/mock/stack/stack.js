class Stack{
    constructor(){
        this.s=[];
    }
    size(){
        return this.s.length;
    }
    push(obj){
        this.s.push(obj);
    }
    pop(){
        if(this.s.length===0){
            throw new Error('Stack is empty');
        }
        return this.s.pop();
    }
}

module.exports =Stack;