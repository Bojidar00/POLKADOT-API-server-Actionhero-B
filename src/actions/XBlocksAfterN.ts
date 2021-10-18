
import { Action } from "actionhero";
const Lblock = require ("../modules/LastBlock");
const apiConnection = require('../modules/nodeConnection');

const connectApi = apiConnection.getNodeConnection().then((api) => {
  return api;
});


export class XBlocksAfterN extends Action {
  constructor() {
    super();
    this.name = "XBlocksAfterN";
    this.description = "I am an API method which will return block by hash.";
    this.inputs = {
        x: { required: true},
        n: { required: true}
    };
    
  }

  async run({ params }) {
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