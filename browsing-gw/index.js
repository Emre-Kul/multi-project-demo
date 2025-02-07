process.env.DEFAULT_CONTENT_TIMEOUT = "70000";
process.env.GLOBAL_REQUEST_TIMEOUT = "75000";
const PuzzleJs = require('puzzle-microfrontends');
const path = require('path');

const gateway = new PuzzleJs.Gateway({
    name: "browsing-gw",
    fragments: [
        {
            name: "album",
            testCookie: "my-product-ab",
            version: "1.0.0",
            versions: {
                "1.0.0": {
                    assets: [],
                    dependencies: []
                }
            },
            render: {
                url: "*",
                placeholder: true
            }
        },
        {
            name: "about",
            testCookie: "my-about-ab",
            version: "1.0.0",
            versions: {
                "1.0.0": {
                    assets: [],
                    dependencies: []
                }
            },
            render: {
                url: "*"
            }
        },
        {
            name: "price",
            testCookie: "my-header-ab",
            version: "1.0.0",
            versions: {
                "1.0.0": {
                    assets: [],
                    dependencies: []
                }
            },
            render: {
                url: "*"
            }
        },
        {
            name: "item",
            testCookie: "my-header-ab",
            version: "1.0.0",
            versions: {
                "1.0.0": {
                    assets: [],
                    dependencies: []
                }
            },
            render: {
                url: "/photo/:id",
                placeholder: true
            }
        }
    ],
    api: [

    ],
    port: 4443,
    url: 'http://localhost:4443',
    fragmentsFolder: path.join(__dirname, "./src/fragments")
});


gateway.init(() => {
    console.log('Browsing-GW is ready to respond');
});