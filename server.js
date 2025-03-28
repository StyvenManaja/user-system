const app = require('./src/app');
const connectToDB = require('./src/config/db');

const PORT = process.env.PORT || 4000;

connectToDB();

app.listen(PORT, () => {
    console.log('Server launched at port : ', PORT);
})