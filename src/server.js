const http = require('http');
const url = require('url');
const router = require('./routes/router');
const morgan = require('morgan');
const logger = morgan('combined');

const startServer = port => {
    const server = http.createServer(function(req, res) {
        const parsedUrl = url.parse(req.url);
        const routerCallback = router[parsedUrl.pathname] || router.default;

        logger(req, res, () => routerCallback(req, res));
    });

    server.listen(port);
}

module.exports = startServer;
