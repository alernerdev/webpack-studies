module.exports = {
    context: __dirname + '/app',
    entry: './index.js', // relative to the context
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    }
};