import { Initializer, log } from "actionhero";
import { task } from "actionhero";
export class nodeConnection extends Initializer {
  constructor() {
    super();
    this.name = "nodeConnection";
    this.loadPriority = 1000;
    this.startPriority = 1000;
    this.stopPriority = 1000;
  }

  async start() {
    await task.enqueue("Connect",{});
  }
   
}

