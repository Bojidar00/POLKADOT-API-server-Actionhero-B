
import { Action } from "actionhero";

const apiConnection = require('../modules/nodeConnection');

const connectApi = apiConnection.getNodeConnection().then((api) => {
  return api;
});


export class BlockHashByNumber extends Action {
  constructor() {
    super();
    this.name = "BlockHashByNumber";
    this.description = "I am an API method which will return block Hash by number.";
    this.inputs = {
        number: { required: true}
    };
    
  }

  async run({ params }) {
    
       return await connectApi.then(api => api.rpc.chain.getBlockHash(params.number));
  
  }
}