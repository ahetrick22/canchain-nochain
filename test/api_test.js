const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();
chai.use(chaiHttp);

describe('POST /delivery', () => {

  it('should add a new delivery to the deliveries table', done => {
    chai.request(server)
    .post('/delivery')
    .send({centerId: 1, contractId: 1, centerCount: 500})
    .end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.an('object');
      res.body.contractId.should.be.eql(1);
    })
    done();
  }

  )})