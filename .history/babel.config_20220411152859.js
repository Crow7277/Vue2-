module.exports = {
    presets: ['@vue/cli-plugin-babel/preset', ['es2015', { modules: false }]],
    plugins: [
        [
            'component',
            {
                libraryName: 'element-ui',
                styleLibraryName: 'theme-chalk',
            },
        ],
    ],
};报2015错误的： ["@babel/preset-env", {       "modules": false     }]