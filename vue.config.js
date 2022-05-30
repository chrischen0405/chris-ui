module.exports = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: false,
    productionSourceMap: false,
    css: {
        loaderOptions: {
            scss: {
                data: `@import "./src/styles/common/variables.scss";`
            }
        }
    }
}
