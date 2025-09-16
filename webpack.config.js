const path = require('path');
const SitemapPlugin = require('sitemap-webpack-plugin').default;

module.exports = {
    entry: './src/index.ts',
    mode: "production",
    module: {
        rules: [
            {
                test: /\.xml/,
                type: 'asset/inline',
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
            base: 'https://roeststoff.wiki',
            paths: [
                { path: "/", priority: 1.0 },
            ],
            options: {
                filename: "../sitemap.xml",
            },
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