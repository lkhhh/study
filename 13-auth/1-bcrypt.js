import { hashSync, compareSync } from 'bcrypt';

const password ='abcd1234';
const hashed=hashSync(password,15);
console.log(`password:${password},hashed:${hashed}`);
const result=compareSync('abcd123',hashed);
console.log(result);