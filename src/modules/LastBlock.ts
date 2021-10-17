
const apiConnection = require('../modules/nodeConnection');




const getLastBlock = async () => {

    await apiConnection.getNodeConnection().then((api) => {
        api.rpc.chain
       .getBlock()
       .then((data) => {
         console.log("now in last block  2");
         //console.log(JSON.stringify(data));
         return data;
         
         
       })
       .catch((err) => {
         return("Some error occured");
         
         
       });
     });

    
}

module.exports = { getLastBlock };