
import { Action } from "actionhero";

const apiConnection = require('../modules/nodeConnection');

const connectApi = apiConnection.getNodeConnection().then((api) => {
  return api;
});
export class LastBlock extends Action {
  constructor() {
    super();
    this.name = "LastBlock";
    this.description = "I am an API method which will return information about the last block.";
    //this.outputExample = { randomNumber: 0.1234 };
  }

  async run() {
    
    connectApi.then((api) => {
    api.rpc.chain
    .getBlock()
    .then((data) => {
      return(data);
      //res.send(data.toHuman());
    })
    .catch((err) => {
      return("Some error occured");
      
      
    });
  });

    //return { hash: "000000000000000000" };
  }
}