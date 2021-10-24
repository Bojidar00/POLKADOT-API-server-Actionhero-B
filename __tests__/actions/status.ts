import { Process, env, id, specHelper } from "actionhero";
import { Status } from "../../src/actions/status";
import jestOpenAPI from 'jest-openapi';
import axios from 'axios';
const dbConnection = require("../../src/modules/dbConnection");
const swaggerDocument = require('../../swagger.json');

jestOpenAPI(swaggerDocument);

const connectDb = dbConnection.getDbConnection().then((db) => {
  db.connect().then(console.log("Connected to PostgreSQL"));
  return db;
});
connectDb.then(async db => { 
  await
db.query(
  `INSERT INTO transactions(hash, issigned, recipient, amount, method, nonce, signature, sender, block_hash)` +
    `VALUES('0x2261184f6bd42eb775f2a55477ce65e7d710a535a8c9da98441908bc2ba87170', 'true', '1743nDTMZisPgBCYSAgkUn1kVG7MePc9rvMEjoRNf4ipVkF', '50000', 
           'transfer', '1000', 'aaaaaaaaa', '12xtAYsRUrmbniiWQqJtECiBQrMn8AypQcXhnQAc6RB6XkLW', '0x527dbeb44ff53d4a805d72e1350ad76fd6e86116a1ba34c6d058f752bcc5db36')`,
  (err) => {
    if (!err)
      console.log(
        "Inserted to DB test transaction: " 
         
      );
    else console.log("Error occured: " + err.message);
  });});

describe('GET api/node/blocks', () => {
  it('should satisfy OpenAPI spec', async() => {
      const res = await axios.get('http://0.0.0.0:8080/api/node/blocks/');

      expect(res.status).toEqual(200);

      expect(res).toSatisfyApiSpec();
      
  });
});

describe('GET /api/node/blocks/{x}/{nth}', () => {
  it('should satisfy OpenAPI spec', async() => {
      const x = 5;
      const nth = 151;

      const res = await axios.get(`http://0.0.0.0:8080/api/node/blocks/${x}/${nth}`);

      expect(res.status).toEqual(200);

      expect(res).toSatisfyApiSpec();
  });
});
/*
describe('GET /api/node/blocks/num/{num}', () => {
  it('should satisfy OpenAPI spec', async() => {
      const num = '1000';

      const res = await axios.get(`http://0.0.0.0:8080/api/node/blocks/num/${num}`);

      expect(res.status).toEqual(200);

      expect(res).toSatisfyApiSpec();
  });
});

describe('POST /api/node/blocks/hash', () => {
  it('should satisfy OpenAPI spec', async() => {
      const queryParam = { hash: '0xc0096358534ec8d21d01d34b836eed476a1c343f8724fa2153dc0725ad797a90' };

      const res = await axios.post('http://0.0.0.0:8080/api/node/blocks/hash', queryParam);

      expect(res.status).toEqual(200);

      expect(res).toSatisfyApiSpec();
  });
});

describe('GET /api/node/accounts/count/', () => {
  it('should satisfy OpenAPI spec', async() => {
      const res = await axios.get('http://0.0.0.0:8080/api/node/accounts/count/');

      expect(res.status).toEqual(200);

      expect(res).toSatisfyApiSpec();
  });
});

describe('GET /api/node/address/transactions/count/{adr}', () => {
  it('should satisfy OpenAPI spec', async() => {
      const adr = '1743nDTMZisPgBCYSAgkUn1kVG7MePc9rvMEjoRNf4ipVkF';

      const res = await axios.get(`http://0.0.0.0:8080/api/node/address/transactions/count/${adr}`);

      expect(res.status).toEqual(200);

      expect(res).toSatisfyApiSpec();
  });
});

describe('GET /api/node/address/transactions/{adr}', () => {
  it('should satisfy OpenAPI spec', async() => {
      const adr = '1743nDTMZisPgBCYSAgkUn1kVG7MePc9rvMEjoRNf4ipVkF';

      const res = await axios.get(`http://0.0.0.0:8080/api/node/address/transactions/${adr}`);

      expect(res.status).toEqual(200);

      expect(res).toSatisfyApiSpec();
  });
});

describe('GET /api/node/address/balance/{adr}', () => {
  it('should satisfy OpenAPI spec', async() => {
      const adr = '1743nDTMZisPgBCYSAgkUn1kVG7MePc9rvMEjoRNf4ipVkF';

      const res = await axios.get(`http://0.0.0.0:8080/api/node/address/balance/${adr}`);

      expect(res.status).toEqual(200);

      expect(res).toSatisfyApiSpec();
  });
});

describe('POST /api/node/address/transactions/{x}/{n}', () => {
  it('should satisfy OpenAPI spec', async() => {
      const queryParam = { accountId: '12xtAYsRUrmbniiWQqJtECiBQrMn8AypQcXhnQAc6RB6XkLW' };
      const x = 5;
      const n = 10;

      const res = await axios.post(`http://0.0.0.0:8080/api/node/address/transactions/${x}/${n}`, queryParam);

      expect(res.status).toEqual(200);

      expect(res).toSatisfyApiSpec();
  });
});

describe('GET /api/node/transactions/count/', () => {
  it('should satisfy OpenAPI spec', async() => {
      const res = await axios.get('http://0.0.0.0:8080/api/node/transactions/count/');

      expect(res.status).toEqual(200);

      expect(res).toSatisfyApiSpec();
  });
});

describe('POST /api/node/transactions/block', () => {
  it('should satisfy OpenAPI spec', async() => {
      const queryParam = { blockHash: '0x527dbeb44ff53d4a805d72e1350ad76fd6e86116a1ba34c6d058f752bcc5db36' };

      const res = await axios.post('http://0.0.0.0:8080/api/node/transactions/block', queryParam);

      expect(res.status).toEqual(200);

      expect(res).toSatisfyApiSpec();
  });
});

describe('POST /api/node/transactions/hash', () => {
  it('should satisfy OpenAPI spec', async() => {
      const queryParam = { transactionHash: '0x2261184f6bd42eb775f2a55477ce65e7d710a535a8c9da98441908bc2ba87170' };

      const res = await axios.post('http://0.0.0.0:8080/api/node/transactions/hash', queryParam);

      expect(res.status).toEqual(200);

      expect(res).toSatisfyApiSpec();
  });
});

describe('GET /api/node/transactions/{x}/{n}', () => {
  it('should satisfy OpenAPI spec', async() => {
      const x = 5;
      const n = 10;

      const res = await axios.get(`http://0.0.0.0:8080/api/node/transactions/${x}/${n}`);

      expect(res.status).toEqual(200);

      expect(res).toSatisfyApiSpec();
  });
});
*/