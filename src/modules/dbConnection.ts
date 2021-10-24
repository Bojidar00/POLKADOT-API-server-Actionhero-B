const { Client } = require("pg");

let client;



const getDbConnection = async () => {

    if(client) return client;

    const newClient = new Client({
        host: process.env.DB_HOST || "postgreSql-container-actionhero",
        user: process.env.DB_USER || "postgres",
        port: process.env.DB_PORT || "5432",
        password: process.env.DB_PASS || "root",
        database: process.env.DB_DATABASE || "polkadot_explorer",
        idleTimeoutMillis: 0,
        connectionTimeoutMillis: 0,
    });

    
    return newClient;

}

module.exports = {getDbConnection};