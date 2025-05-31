const express = require('express');
const proxyMiddleware = require('../middleware/proxy');
const rewriteLinksMiddleware = require('../middleware/rewrite-links');

const router = express.Router();

router.use(proxyMiddleware);
router.use(rewriteLinksMiddleware);

module.exports = router;