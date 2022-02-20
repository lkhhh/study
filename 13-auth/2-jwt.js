const jwt=require('jsonwebtoken');
const secret='asdfqwefqefqg'
const token = jwt.sign({
    id:'userId',
    isAdmin:true,

},secret,
{expiresIn:2}
)//너무 커지면 계속 주고받을때 서버의 부하가 커짐

setTimeout(()=>{
    jwt.verify(token,secret,(error,decoded)=>{
        console.log(error,decoded);
    })
},3000)
console.log(token);