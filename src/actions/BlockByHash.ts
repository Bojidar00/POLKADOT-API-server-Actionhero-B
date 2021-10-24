
import { Action } from "actionhero";

const apiConnection = require('../modules/nodeConnection');




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
    const connectApi = apiConnection.getNodeConnection().then((api) => {
        return api;
      });
      try {
       return await connectApi.then(api => api.rpc.chain.getBlock(params.hash));
      } catch (error) {
        return "Some error occurred!";
    }
  }
}