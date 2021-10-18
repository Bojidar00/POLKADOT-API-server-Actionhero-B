
import { Action } from "actionhero";

const dbConnection = require("../modules/dbConnection");






export class TransactionsFromBlock extends Action {
  constructor() {
    super();
    this.name = "TransactionsFromBlock";
    this.description = "I am an API method which will return the transactions of a block.";
    this.inputs = {
        hash: { required: true}
    };
    
  }

  async run({params}) {
    const connectDb = dbConnection.getDbConnection().then((db) => {
        db.connect().then(console.log("Connected to PostgreSQL"));
        return db;
    });
      
       return await connectDb.then(async db => { 
         await db.query(`SELECT * FROM transactions WHERE block_hash='${params.hash}`);})
  
  }
}