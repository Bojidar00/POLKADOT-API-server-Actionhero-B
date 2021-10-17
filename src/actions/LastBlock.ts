
import { Action } from "actionhero";
const Lblock = require ("../modules/LastBlock");
const apiConnection = require('../modules/nodeConnection');


export class LastBlock extends Action {
  constructor() {
    super();
    this.name = "LastBlock";
    this.description = "I am an API method which will return information about the last block.";
    //this.outputExample = { randomNumber: 0.1234 };
  }

  async run() {
      var a;
    console.log("now in last block  1");
    
       return await Lblock.getLastBlock();
    //return { hash: "000000000000000000" };
  }
}