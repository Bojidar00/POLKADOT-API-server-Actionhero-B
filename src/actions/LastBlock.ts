
import { Action } from "actionhero";

export class LastBlock extends Action {
  constructor() {
    super();
    this.name = "LastBlock";
    this.description = "I am an API method which will return information about the last block.";
    //this.outputExample = { randomNumber: 0.1234 };
  }

  async run() {
    return { hash: "000000000000000000" };
  }
}