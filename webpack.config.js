// webpack.config.js
module.exports = {
    // ... existing configuration ...
    module: {
        rules: [
            // ... existing rules ...
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
                exclude: [/node_modules\/html2pdf\.js/],
            },
        ],
    },
    // ... existing configuration ...
}
