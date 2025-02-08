const path = require('path');
const SitemapPlugin = require('sitemap-webpack-plugin').default;

module.exports = {
    entry: './src/index.ts',
    mode: "production",
    module: {
        rules: [
            {
                test: /\.xml/,
                type: 'asset/source',
            },
            {
                test: /\.html/,
                type: 'asset/source',
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new SitemapPlugin({
            base: 'https://roeststoff.wiki', paths: [
                { path: "/", priority: 1.0 },
                { path: "/?folgen", priority: 0.8},
                { path: "/?stoffies", priority: 0.8},
                { path: "/?trinkstoff", priority: 0.8},
                { path: "/?boestofs", priority: 0.8},
                { path: "/?roestaurants", priority: 0.8},
                { path: "/?lehrstoff", priority: 0.8},
                { path: "/?sprueche", priority: 0.8},
                { path: "/?sidedishes", priority: 0.8},
            ]
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};