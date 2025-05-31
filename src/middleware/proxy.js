const { createProxyMiddleware } = require('http-proxy-middleware');
const { ROOT_TARGET } = require('../config/env');

const proxyMiddleware = createProxyMiddleware({
    target: ROOT_TARGET,
    changeOrigin: true,
    selfHandleResponse: true, // Allows us to manipulate the response
});

module.exports = proxyMiddleware;