const { createProxyMiddleware } = require('http-proxy-middleware');
const { ROOT_TARGET } = require('../config/env');

if (!ROOT_TARGET) {
    throw new Error('ROOT_TARGET is not defined. Check your .env file.');
}

const proxyMiddleware = createProxyMiddleware({
    target: ROOT_TARGET,
    changeOrigin: true,
    selfHandleResponse: true, // Allows us to manipulate the response
});

module.exports = proxyMiddleware;