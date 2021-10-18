
import { Action } from "actionhero";

const dbConnection = require("../modules/dbConnection");






export class XTransactionsAfterN extends Action {
  constructor() {
    super();
    this.name = "XTransactionsAfterN";
    this.description = "I am an API method which will return x transactions after n.";
    this.inputs = {
        x: { required: true},
        n: { required: true}
    };
    
  }

  async run({params}) {
    const connectDb = dbConnection.getDbConnection().then((db) => {
        db.connect().then(console.log("Connected to PostgreSQL"));
        return db;
    });
      
       return await connectDb.then(async db => { 
         await db.query(`SELECT * FROM transactions WHERE id < ${params.n} AND id > ${params.n} - ${params.x} LIMIT ${params.x}`);})
  
  }
}