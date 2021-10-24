const webSocketsServerPort = 8000;
const webSocketServer = require('websocket').server;
const http = require('http');
const apis = require('./wsApis');



const server = http.createServer();
server.listen(webSocketsServerPort);
console.log('listening on port 8000')

const wsServer = new webSocketServer({
    httpServer: server
});



wsServer.on('request', function (request) {

    console.log(new Date() + ' Recieved a new connection from origin ' + request.origin + '.');

    
    const connection = request.accept(null, request.origin);
    let client = connection;

    connection.on('message',async function (message) {
        let msg;
        try {
            msg = JSON.parse(message.utf8Data);
        } catch (error) {
            client.send('Parse error')
            return;
        }
        if (message.type === 'utf8') {
           
            var res;
            switch (msg.method) {
                
                case 'rpc_getLastBlock':
                    try {
                    res =await apis.LastBlock();
                } catch (error) {
                    res ="Some error occurred!";
                }
                    
                    
                    break;
                case 'rpc_getBlockHashByNumber':
                    try {
                    res =await apis.getBlockHashByNumber(msg.params.num);
                } catch (error) {
                    res ="Some error occurred!";
                }
                   
                    break;
                case 'rpc_getBlockByHash':
                    try {
                    res =await apis.getBlockByHash(msg.params.hash);
                } catch (error) {
                    res ="Some error occurred!";
                }
                   
                    break;
                case 'rpc_getXBlocksAfterN':
                    try {
                    res = await apis.getXBlocksAfterN(msg.params.x, msg.params.n);
                } catch (error) {
                    res ="Some error occurred!";
                }
                    break;
                case 'rpc_getAccountsCount':
                    try {
                    res = await apis.getAccountsCount();
                } catch (error) {
                    res ="Some error occurred!";
                }
                    break;
                case 'rpc_getAddressTransactionsCount':
                    try {
                    res = await apis.getAccountTransactionsCount(msg.params.accountId);
                } catch (error) {
                    res ="Some error occurred!";
                }
                    break;
                case 'rpc_getAddressTransactions':
                    try {
                    res = await apis.getAccountTransactions(msg.params.accountId);
                } catch (error) {
                    res ="Some error occurred!";
                }
                    break;
                case 'rpc_getAccountBalance':
                    try {
                    res = await apis.getAccountBalance(msg.params.accountId);
                } catch (error) {
                    res ="Some error occurred!";
                }
                    break;
                case 'rpc_getTransactionsCount':
                    try {
                    res = await apis.getTransactionsCount();
                } catch (error) {
                    res ="Some error occurred!";
                }
                    break;
                case 'rpc_getTransactionsFromBlock':
                    try {
                    res = await apis.getTransactionsFromBlock(msg.params.blockHas);
                } catch (error) {
                    res ="Some error occurred!";
                }
                    break;
                case 'rpc_getTransactionByHash':
                    try {
                    res = await apis.getTransactionByHash(msg.params.transactionHash);
                } catch (error) {
                    res ="Some error occurred!";
                }
                    break;
                case 'rpc_getXTransactionsAfterN':
                    try{
                    res = await apis.getXTransactionsAfterNth(msg.params.x,msg.params.n);
                } catch (error) {
                    res ="Some error occurred!";
                }
                    break;
                default: res ="Invalid request!";
            }
            client.send(res);
        }
    })
})