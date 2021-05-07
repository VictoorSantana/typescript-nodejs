require('dotenv/config');
import app from './app';


app.listen(process.env.SERVER_PORT ? process.env.SERVER_PORT : 5000, function () {
    console.log(`App is listening on port ${process.env.SERVER_PORT ? process.env.SERVER_PORT : 5000}!`);
});

