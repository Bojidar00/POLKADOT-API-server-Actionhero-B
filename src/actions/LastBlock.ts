const { ApiPromise, WsProvider } = require('@polkadot/api');
import { Action } from "actionhero";
import { task } from "actionhero";



export class LastBlock extends Action {
  constructor() {
    super();
    this.name = "LastBlock";
    this.description = "I am an API method which will return information about the last block.";
    //this.outputExample = { randomNumber: 0.1234 };
  }

  async run() {
    const api =await task.enqueue("Connect",{});

   /* api.rpc.chain
    .getBlock()
    .then((data) => {
      return(data);
      //res.send(data.toHuman());
    })
    .catch((err) => {
      return("Some error occured")
      //res.status(500).send({
      //message: err.message || "Some error occured",
      });
    });
  });
*/
    return { hash: "000000000000000000" };
  }
}