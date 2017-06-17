const project = require('../config/project.config');
const app = require('../server/main');
const debug = require('debug')('app:bin:dev-server');
const http = require('http');
// const fs = require('fs');
// const https = require('https');
/* eslint-disable */
// const options = {
//   key: fs.readFileSync(process.cwd() + '/keys/YourKey.key'),
//   cert: fs.readFileSync(process.cwd() + '/keys/YourCrt.crt'),
//   ca: [
//     fs.readFileSync(process.cwd() + '/keys/YourCA.crt'),
//     fs.readFileSync(process.cwd() + '/keys/YourCA.crt'),
//   ],
// };
/* eslint-enable */

http.createServer(app).listen(project.server_port, () => {
  debug(`Server is now running at http://localhost:${project.server_port}.`);
});

// https.createServer(options, app).listen(project.ssl_server_port, () => {
//   debug(`Server is now running at https://localhost:${project.ssl_server_port}.`);
// });
