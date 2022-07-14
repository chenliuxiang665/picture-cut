module.exports = {
    devServer: {

    },
    publicPath: process.env.NODE_ENV === 'production' ?
        '/picture-cut' : '/'
}