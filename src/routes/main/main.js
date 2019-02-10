const mainRoute = (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write('Welcome to food delivery service');
    res.end();
}

module.exports = mainRoute;
