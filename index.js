require('dotenv').config();
const server = require('./app');
const logger = require('./services/log/winston');

/**
 * @description: Database connection
*/
const connectDB = require('./services/database/index');
connectDB();

/**
 * @description: Server
 * @param: port
*/
const port = process.env.PORT || 8000;

server.listen(port, () => {
    logger.info(`Server is running on port ${port}`);
});