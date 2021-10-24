import { Process, env, id, specHelper } from "actionhero";
import { Status } from "../../src/actions/status";
import jestOpenAPI from 'jest-openapi';
import axios from 'axios';

const swaggerDocument = require('../../swagger.json');

jestOpenAPI(swaggerDocument);



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

