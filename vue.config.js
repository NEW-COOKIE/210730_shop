
const path = require('path');
const px2rem = require('postcss-px2rem');

const postcss = px2rem({
    // 基准大小 baseSize，需要和rem.js中相同
    remUnit: 35.7
})

module.exports = {
    lintOnSave: false,

    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    postcss
                ]
            }
        }
    },

    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                "@": path.resolve(__dirname, 'src')
            }
        }
    },

    devServer: {
        port: 8080,

        proxy: {
            "/api": {
                target: "http://localhost:4000",
                pathRewrite: { "^/api": "" },
                changeOrigin: true
            }
        }
    }
}
