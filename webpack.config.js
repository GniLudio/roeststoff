const path = require('path');

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
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};