const path = require('path');

const config = {
    mode: 'development',
    target: 'node',
    entry: {
        'main': './src/extension.ts',
        // 'vendor':'vscode'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'extension.js',
        libraryTarget: 'commonjs',
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: /node_modules/,
            use: [{
                loader: 'ts-loader',
                options: {
                   /*  compilerOptions: {
                        "module": "es6" // override `tsconfig.json` so that TypeScript emits native JavaScript modules.
                    } */
                }
            }]
        }]
    },
    externals: {
        vscode: 'commonjs vscode'
    },
    /*     optimization: {
            splitChunks: {
                chunks: 'all'
            }
        } */
}
module.exports = config;