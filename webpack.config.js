module.exports = {
    context: __dirname + '/app',
    entry: './index.js', // relative to the context
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
			{test: /\.html$/, exclude: /node_modules/, loader: 'raw-loader'},
			// loaders are run from right to left. So css runs first followed by style loader
            {test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader'}
        ]
    }
};
