const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const profesionalRouter = require('./routes/professional');

const app = express();

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
// app.use((req, res, next) => {
//     res.setHeader('Acess-Control-Allow-Origin', '*');
//     res.setHeader(
//         'Acess-Control-Allow-Methods',
//         'OPTION, GET, POST, PUT, PATCH, DELETE'
//     );
//     res.setHeader(
//         'Access-Control-Allow-Headers',
//         'Content-Type, Authorization'
//     );
//     next();
// });
app.use(profesionalRouter);

app.listen(8080);
