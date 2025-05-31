const whitelist = ['www.google.com'];

const isWhitelisted = (domain) => whitelist.includes(domain);

module.exports = { isWhitelisted };