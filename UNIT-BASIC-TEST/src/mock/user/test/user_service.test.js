const UserService = require('../user_service');
const UserClient = require('../user_client');
jest.mock('../user_service.js');
//특정 상황에 대한 행동을 검사하는 경우 Mock을 이용하는게 편함
describe('UserService',()=>{
    const login=jest.fn(async()=>'success');
    UserClient.mockImplementation(()=>{
        return{
            login,
        };
    });
    let UserService;

    beforeEach(()=>{
        UserService=new UserService(new UserClient());
    });

    it('calls login() on UserClient when tries to login',async()=>{
        await UserService.login('abc','abc');
        expect(login.mock.calls.length).toBe(1); //로그인을 처음 한다면 1번 호출
    });
    it('should not call login() on UserClient again~',async()=>{
        await UserService.login('abc','abc');
        await UserService.login('abc','abc');

        expect(login.mock.calls.length).toBe(1);//다시 로그인을 해도 한번만 호출 되어야 함
    })
})
