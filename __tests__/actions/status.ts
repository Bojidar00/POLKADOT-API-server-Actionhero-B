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

