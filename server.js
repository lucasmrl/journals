const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({
    path: './config.env'
}); //This will read our variables from the file config.env and save them into the NODEJS enviroment variables.
const app = require('./app');

//Start Database connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(con => {
    console.log('DB connection successful!')
});

const port = process.env.PORT || 3000;

// Start Server
app.listen(port, () => {
    //console.log(`Server running on port ${port}...`);
});