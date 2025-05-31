const cheerio = require('cheerio');
const { HOST } = require('../config/env');
const { transformExternalLink } = require('../services/subdomain-handler');

const rewriteLinksMiddleware = (req, res, next) => {
    let originalSend = res.send;

    res.send = function (body) {
        const $ = cheerio.load(body);

        // Rewrite internal links
        $('a[href]').each((_, element) => {
            const href = $(element).attr('href');
            if (href.startsWith('/')) {
                $(element).attr('href', `${HOST}${href}`);
            } else if (href.startsWith('http')) {
                $(element).attr('href', transformExternalLink(href));
            }
        });

        // Rewrite asset links
        $('link[href], script[src], img[src]').each((_, element) => {
            const attr = $(element).attr('href') || $(element).attr('src');
            if (attr && attr.startsWith('http')) {
                $(element).attr(attr.startsWith('href') ? 'href' : 'src', transformExternalLink(attr));
            }
        });

        originalSend.call(this, $.html());
    };

    next();
};

module.exports = rewriteLinksMiddleware;