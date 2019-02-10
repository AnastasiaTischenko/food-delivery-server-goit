const mainRoute = require('./main/main');
const productsRoute = require('./products/products');
const signupRouter = require('./singup/signup');
const router = {
    '/products': productsRoute,
    '/signup': signupRouter,
    '/': mainRoute,
    default: mainRoute
};

module.exports = router;