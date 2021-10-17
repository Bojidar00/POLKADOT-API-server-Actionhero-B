
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
    console.log("now in last block  1");
    await apiConnection.getNodeConnection().then((api) => {
     api.rpc.chain
    .getBlock()
    .then((block) => {
      console.log("now in last block  2");
      console.log(block);
      return(block.toHuman());
      
      //res.send(data.toHuman());
    })
    .catch((err) => {
      return("Some error occured");
      
      
    });
  });

    //return { hash: "000000000000000000" };
  }
}