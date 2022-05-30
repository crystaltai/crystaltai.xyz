const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(['/api', '/auth/google'], createProxyMiddleware({ target: 'http://localhost:5000' }));
};

// TODO: remove the "/auth/google" later since you're not using it
