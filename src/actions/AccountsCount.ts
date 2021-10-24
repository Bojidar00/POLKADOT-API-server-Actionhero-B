
import { Action } from "actionhero";

const dbConnection = require("../modules/dbConnection");






export class AccountsCount extends Action {
  constructor() {
    super();
    this.name = "AccountsCount";
    this.description = "I am an API method which will return the count of accounts.";
  
    
  }

  async run() {
    const connectDb = dbConnection.getDbConnection().then((db) => {
        db.connect().then(console.log("Connected to PostgreSQL"));
        return db;
    });
      try {
       return await connectDb.then(async db => { 
         await db.query(`SELECT COUNT(DISTINCT recipient)+COUNT(DISTINCT sender) AS count FROM transactions`);})
        } catch (error) {
          return "Some error occurred!";
      }
  
  }
}