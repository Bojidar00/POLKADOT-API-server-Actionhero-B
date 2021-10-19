import { Process, env, id, specHelper } from "actionhero";
import { Status } from "../../src/actions/status";
import jestOpenAPI from 'jest-openapi';
import axios from 'axios';

const swaggerDocument = require('../swagger.yaml');

jestOpenAPI(swaggerDocument);

describe("actionhero Tests", () => {
  const actionhero = new Process();

  beforeAll(async () => await actionhero.start());
  afterAll(async () => await actionhero.stop());

  test("should have booted into the test env", () => {
    expect(process.env.NODE_ENV).toEqual("test");
    expect(env).toEqual("test");
    expect(id).toBeTruthy();
  });

  test("can retrieve server uptime via the status action", async () => {
    const { uptime } = await specHelper.runAction<Status>("status");
    expect(uptime).toBeGreaterThan(0);
  });
});

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
      const nth = 1512532;

      const res = await axios.get(`http://0.0.0.0:8080/api/node/blocks/${x}/${nth}`);

      expect(res.status).toEqual(200);

      expect(res).toSatisfyApiSpec();
  });
});