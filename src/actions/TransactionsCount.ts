
import { Action } from "actionhero";

const dbConnection = require("../modules/dbConnection");






export class TransactionsCount extends Action {
  constructor() {
    super();
    this.name = "TransactionsCount";
    this.description = "I am an API method which will return the count of transactions.";
    
    
  }

  async run() {
    const connectDb = dbConnection.getDbConnection().then((db) => {
        db.connect().then(console.log("Connected to PostgreSQL"));
        return db;
    });
      
       return await connectDb.then(async db => { 
         await db.query(`SELECT COUNT(*) AS count FROM transactions`);})
  
  }
}