const parser = require('body-parser');
const express = require('express');
const path = require('path');

const app = express();
// const { PORT: port = 8000 } = process.env;
const port = process.env.PORT || 8000;

require('./server/config/database');

app.use(express.static(path.resolve('dist/public')));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(require('./server/routes'));

app.listen(port, () => console.log(`Express server listening on port ${port}`));
