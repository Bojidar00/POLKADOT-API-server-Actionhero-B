// A simple Action

import { Action } from "actionhero";

export class testAction extends Action {
  constructor() {
    super();
    this.name = "testAction";
    this.description = "I am an API method which will generate a random number";
    //this.outputExample = { randomNumber: 0.1234 };
  }

  async run() {
      return {data: {block:{aa:'bbbb',cc:'rrrr'},hash:'aaaaa'}};
   // return { randomNumber: Math.random() };
  }
}