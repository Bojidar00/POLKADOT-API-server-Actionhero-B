
import { Action } from "actionhero";

const apiConnection = require('../modules/nodeConnection');



export class XBlocksAfterN extends Action {
  constructor() {
    super();
    this.name = "XBlocksAfterN";
    this.description = "I am an API method which will return x blocks after n.";
    this.inputs = {
        x: { required: true},
        n: { required: true}
    };
    
  }

  async run({ params }) {
    const connectApi = apiConnection.getNodeConnection().then((api) => {
        return api;
      });
      

    var x=params.x;
    var n=params.n;
    var blocks=[];

    for (var i =0;i<x;i++){
                blocks.push(await connectApi.then(api => api.rpc.chain.getBlockHash(n)));
                n--;
    }
       return blocks;
  
  }
}