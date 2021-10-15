import { Initializer, log } from "actionhero";
const { ApiPromise, WsProvider } = require('@polkadot/api');

let api;
export class nodeConnection extends Initializer {
  constructor() {
    super();
    this.name = "nodeConnection";
    this.loadPriority = 1000;
    this.startPriority = 1000;
    this.stopPriority = 1000;
  }

  async start() {
    if(api) return api;
  
    const provider = new WsProvider('ws://polkadot-node-container:9944');

    api = await ApiPromise.create({ provider });
    
    console.log("Creating new connection to node");
    return api;

    //log("I initialized", "debug", this.name);
  }

}