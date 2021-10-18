
import { Action } from "actionhero";

const dbConnection = require("../modules/dbConnection");






export class AccountTransactions extends Action {
  constructor() {
    super();
    this.name = "AccountTransactions";
    this.description = "I am an API method which will return the transactions of account.";
    this.inputs = {
        account: { required: true}
    };
    
  }

  async run({params}) {
    const connectDb = dbConnection.getDbConnection().then((db) => {
        db.connect().then(console.log("Connected to PostgreSQL"));
        return db;
    });
      
       return await connectDb.then(async db => { 
         await db.query(`SELECT * FROM transactions WHERE recipient='${params.account}' OR sender='${params.account}'`);})
  
  }
}