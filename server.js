import express from 'express';
import expressConfig from './src/config/express.config';
import routesConfig from './src/config/routes.config';
import passportConfig from './src/config/passport.config';

import db from './src/database';
const app = express();
const port = 3000;//Todo: it shouldn't be here!!!!!!

expressConfig(app);
routesConfig(app);
//passportConfig();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});