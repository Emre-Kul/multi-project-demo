process.env.DEFAULT_CONTENT_TIMEOUT = "70000";
process.env.GLOBAL_REQUEST_TIMEOUT = "75000";

const PuzzleJs = require('puzzle-microfrontends');
const path = require('path');
const fs = require('fs');

const storefront = new PuzzleJs.Storefront({
    port: 4445,
    gateways: [
        {
            name: 'platform-gw',
            url: 'http://localhost:4444/',
        },
        {
            name: 'browsing-gw',
            url: 'http://localhost:4443/',
        }
    ],
    pages: [
        {
            name: 'homepage',
            url: '/',
            html: fs.readFileSync(path.join(__dirname, './pages/main.html'), 'utf8')
        },
        {
            name: 'about',
            url: '/about',
            html: fs.readFileSync(path.join(__dirname, './pages/about.html'), 'utf8')
        },
        {
            name: 'photo',
            url: '/photo/:id',
            html: fs.readFileSync(path.join(__dirname, './pages/photo.html'), 'utf8')
        }
    ],
    dependencies: []
});

storefront.init(() => {
    console.log('Storefront is ready to respond');
});
