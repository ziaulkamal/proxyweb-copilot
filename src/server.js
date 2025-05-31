const app = require('./app');
const { HOST } = require('./config/env');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
});