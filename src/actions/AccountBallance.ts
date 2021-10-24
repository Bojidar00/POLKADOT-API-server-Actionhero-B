
import { Action } from "actionhero";

const apiConnection = require('../modules/nodeConnection');




export class AccountBallance extends Action {
  constructor() {
    super();
    this.name = "AccountBallance";
    this.description = "I am an API method which will return account ballance.";
    this.inputs = {
        account: { required: true}
    };
  }

  async run({params}) {
    const connectApi = apiConnection.getNodeConnection().then((api) => {
      return api;
    });
    try{
       return await connectApi.then(api => api.query.system.account(params.account));
      } catch (error) {
        return "Some error occurred!";
    }
  
  }
}