
import { Action } from "actionhero";

const dbConnection = require("../modules/dbConnection");






export class TransactionByHash extends Action {
  constructor() {
    super();
    this.name = "TransactionsByHash";
    this.description = "I am an API method which will return transactions by hash.";
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
         await db.query(`SELECT * FROM transactions WHERE hash='${params.hash}'`);})
  
  }
}