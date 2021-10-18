
import { Action } from "actionhero";

const apiConnection = require('../modules/nodeConnection');

const connectApi = apiConnection.getNodeConnection().then((api) => {
  return api;
});


export class LastBlock extends Action {
  constructor() {
    super();
    this.name = "LastBlock";
    this.description = "I am an API method which will return information about the last block.";
    
  }

  async run() {
    
       return await connectApi.then(api => api.rpc.chain.getBlock());
  
  }
}