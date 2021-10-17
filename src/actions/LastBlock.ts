
import { Action } from "actionhero";

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
    await apiConnection.getNodeConnection().then((api) => {
     api.rpc.chain
    .getBlock()
    .then((data) => {
      console.log("now in last block  2");
      console.log(JSON.stringify(data));
      a=data.block;
      return {d: JSON.stringify(data)};
      
      
    })
    .catch((err) => {
      return("Some error occured");
      
      
    });
  });
       return {b:  JSON.stringify(a)};
    //return { hash: "000000000000000000" };
  }
}