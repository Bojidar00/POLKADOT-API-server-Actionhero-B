import { Initializer, log } from "actionhero";
import { task } from "actionhero";
const apiConnection = require('../modules/nodeConnection');
const indexer = require("../module/Indexer");



export class nodeConnection extends Initializer {
  constructor() {
    super();
    this.name = "nodeConnection";
    this.loadPriority = 1000;
    this.startPriority = 1000;
    this.stopPriority = 1000;
  }

  async start() {
    const connectApi = apiConnection.getNodeConnection().then((api) => {
      return api;
    });
    indexer.run();
    
  }
   
}

