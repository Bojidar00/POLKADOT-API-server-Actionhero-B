export const DEFAULT = {
  routes: (config) => {
    return {
      get: [
        { path: "/status", action: "status" },
        { path: "/swagger", action: "swagger" },
        { path: "/createChatRoom", action: "createChatRoom" },
        { path: "/node/blocks", action: "LastBlock" },
        { path: "/node/blocks/num/:number", action: "BlockHashByNumber" },
        { path: "/node/blocks/:x/:n", action: "XBlocksAfterN" },
        { path: "/node/address/balance/:account", action: "AccountBallance" },
        { path: "/node/address/count/", action: "AccountsCount" },
        { path: "/node/address/transactions/:account", action: "AccountsTransactions" },
        { path: "/node/address/transactions/count/:account", action: "AccountsTransactionsCount" },
        { path: "/node/transactions/count/", action: "TransactionsCount" },
        { path: "/node/transactions/block/", action: "TransactionsFromBlock" },
        { path: "/node/transactions/:x/:n", action: "XTransactionsAfterN" }
        
        
      ],
      post:[
        { path: "/node/blocks/hash/", action: "BlockByHash" },
        { path: "/node/transactions/hash/", action: "TransactionByHash" }
      ]

      /* ---------------------
      For web clients (http and https) you can define an optional RESTful mapping to help route requests to actions.
      If the client doesn't specify and action in a param, and the base route isn't a named action, the action will attempt to be discerned from this routes.js file.

      Learn more here: https://www.actionherojs.com/tutorials/web-server#Routes

      examples:

      get: [
        { path: '/users', action: 'usersList' }, // (GET) /api/users
        { path: '/search/:term/limit/:limit/offset/:offset', action: 'search' }, // (GET) /api/search/car/limit/10/offset/100
      ],

      post: [
        { path: '/login/:userID(^\\d{3}$)', action: 'login' } // (POST) /api/login/123
      ],

      all: [
        { path: '/user/:userID', action: 'user', matchTrailingPathParts: true } // (*) /api/user/123, api/user/123/stuff
      ]

      ---------------------- */
    };
  },
};
