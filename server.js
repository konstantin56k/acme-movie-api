const app = require('./app');
const { syncAndSeed } = require('./db');

const init = async() => {
    try {
        await syncAndSeed();
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            `Listening on port ${PORT}`
        })
    }
    catch(ex) {
        console.log(ex);
    }
}

init();