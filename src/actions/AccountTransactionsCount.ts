
import { Action } from "actionhero";

const dbConnection = require("../modules/dbConnection");






export class AccountTransactionsCount extends Action {
  constructor() {
    super();
    this.name = "AccountTransactionsCount";
    this.description = "I am an API method which will return the count of transactions for account.";
    this.inputs = {
        account: { required: true}
    };
    
  }

  async run({params}) {
    const connectDb = dbConnection.getDbConnection().then((db) => {
        db.connect().then(console.log("Connected to PostgreSQL"));
        return db;
    });
      try {
       return await connectDb.then(async db => { 
         await db.query(`SELECT COUNT(*) AS count FROM transactions WHERE sender='${params.account}' OR recipient='${params.account}`);})
        } catch (error) {
          return "Some error occurred!";
      }
  }
}