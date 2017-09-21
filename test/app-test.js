const request = require('supertest');
const app = require('../app');
describe('#test koa app',()=>{
    let server=app.listen(9900)
    describe('#test server',()=>{
        it('#test GET/',async()=>{
            //构造一个GET请求，发送给koa的应用，然后获得响应。
            let res=await request(server).get('/')
            //可以手动检查响应对象，例如，res.body，还可以利用supertest提供的expect()更方便地断言响应的HTTP代码、返回内容和HTTP头。断言HTTP头时可用使用正则表达式
                                        .expect('Content-Type', /text\/html/)
                                        .expect(200, '<h1>Hello, world!</h1>');

        });
        it('#test GET/path?name=Bob', async () => {
            let res = await request(server).get('/path?name=Bob')
                                           .expect('Content-Type', /text\/html/)
                                           .expect(200, '<h1>Hello, Bob!</h1>');
        });
    })
})
