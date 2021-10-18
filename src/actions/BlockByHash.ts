
import { Action } from "actionhero";

const apiConnection = require('../modules/nodeConnection');

const connectApi = apiConnection.getNodeConnection().then((api) => {
  return api;
});


export class BlockByHash extends Action {
  constructor() {
    super();
    this.name = "BlockByHash";
    this.description = "I am an API method which will return block by hash.";
    this.inputs = {
        hash: { required: true}
    };
    
  }

  async run({ params }) {
    
       return await connectApi.then(api => api.rpc.chain.getBlockByHash(params.hash));
  
  }
}