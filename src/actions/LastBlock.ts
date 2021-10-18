
import { Action } from "actionhero";

const apiConnection = require('../modules/nodeConnection');




export class LastBlock extends Action {
  constructor() {
    super();
    this.name = "LastBlock";
    this.description = "I am an API method which will return information about the last block.";
    
  }

  async run() {
    const connectApi = apiConnection.getNodeConnection().then((api) => {
      return api;
    });
       return await connectApi.then(api => api.rpc.chain.getBlock());
  
  }
}