import { Task } from "actionhero";
const { ApiPromise, WsProvider } = require('@polkadot/api');

let api;
export class Connect extends Task {
  constructor() {
    super();
    this.name = "Connect";
    this.description = "I connect to polkadot node";
    this.frequency = 0;
    this.queue = "high-priority";
  }

  async run(data) {
    if(api) return api;
  
    const provider = new WsProvider('ws://localhost:9944');

    api = await ApiPromise.create({ provider });
    
    console.log("Creating new connection to node");
    return api;
  }
}