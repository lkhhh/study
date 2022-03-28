const fetchProduct=require('../async.js');

describe('Async',()=>{
    if('async',(done)=>{
        fetchProduct().then((item)=>{
            expect(item).toEqual({item:'Milk',price:200});
        })//프로미스는 비동기이기 때문에 그냥 하면 성공이뜸
    })
})