const request = require('supertest');
const app = require('.');

const validWhoami = {
    "ipaddress": "::ffff:127.0.0.1",
    "software": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    "language": "en-IN,en;q=0.9,es-ES;q=0.8,es;q=0.7,en-US;q=0.6,fr-FR;q=0.5,fr;q=0.4,en-GB;q=0.3"
}
describe(`/api/whoami`, () => {
    it(`should exist`, () => {
        return request(app)
               .get('/api/whoami')
               .set('Accept','application/json')
               .expect(200)
            });
});


describe(`/api/whoami`, () => {
    it(`should return json with keys 'ipaddress','language','software'`, () => {
        return request(app)
               .get('/api/whoami')
               .set('Accept','application/json')
               .set('headers.user-agent','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36')
               .expect(200)
               .then((res)=>{
                console.log(res.body);
                expect(res.body.ipaddress).toBeDefined();
                expect(res.body.language).toBeDefined();
                expect(res.body.software).toBeDefined();
               })
            });
});

describe(`/api/whoami`, () => {
    it(`should return json with keys 'ipaddress','language','software' with valid values`, () => {
        return request(app)
               .get('/api/whoami')
               .set('ip',validWhoami.ipaddress)
               .set('Accept','application/json')
               .set('user-agent',validWhoami.software)
               .set('accept-language',validWhoami.language)
               .expect(200)
               .then((res) =>{
                expect(res.body.ipaddress).toEqual(validWhoami.ipaddress);
                expect(res.body.language).toEqual(validWhoami.language);
                expect(res.body.software).toEqual(validWhoami.software);
               })
            });
})