const { Initializer, api } = require('actionhero');

// Adjust to suit... Or optionally move into config...
const allowedOrigins = [
    'https://node5.blackseachain.com:8080',
    'http://localhost:8080',
];

const fallbackOrigin = 'https://localhost';

const setHeaders = (connection, origin) => {
    const { responseHeaders } = connection.rawConnection;
    const setOrigin = allowedOrigins.indexOf(origin) !== -1 ? origin : fallbackOrigin;

    responseHeaders.push(['Access-Control-Allow-Methods', 'HEAD, GET, POST, PUT, DELETE, OPTIONS']);
    responseHeaders.push(['Access-Control-Allow-Origin', setOrigin]);
};

const processCORS = data => {
    const { action, connection } = data;

    if (action === 'getSystemStatus') {
        return;
    }

    const rawConnection = connection.rawConnection || {};
    const headers = (rawConnection.req || {}).headers || {};

    setHeaders(connection, headers.origin);
};

module.exports = class CORS extends Initializer {
    constructor() {
        super();

        this.name = 'CORS';
        this.loadPriority = 1000;
        this.startPriority = 1000;
        this.stopPriority = 1000;
    }

    async start() {
        // Check incoming requests for authentication requirements
        // NOTE: Doesn't work because OPTIONS requests don't get processed through middleware. Left here as
        // documentation for that fact.
        api.actions.addMiddleware({
            name: 'Request Processing : CORS',
            global: true,
            priority: 50,
            preProcessor: processCORS,
        });

        const webServer = api.servers.servers.web;
        webServer.respondToOptions = connection => {
            const { origin } = connection.rawConnection.req.headers;

            setHeaders(connection, origin);
            webServer.sendMessage(connection, '');
        };
    }
};