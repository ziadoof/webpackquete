const path = require('path');

module.exports = {
    entry: {
        app: './js/index.js',
        app: './scss/style.scss'
    },
    module:{
        rules:[
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"],
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }

};
