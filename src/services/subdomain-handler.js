const { HOST } = require('../config/env');

const transformExternalLink = (url) => {
    const domain = new URL(url).hostname;
    const subdomain = domain.replace(/\./g, '-');
    return `https://${subdomain}.${HOST}`;
};

const reverseSubdomain = (subdomain) => {
    return subdomain.replace(/-/g, '.');
};

module.exports = { transformExternalLink, reverseSubdomain };