module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset',
        ['@babel/preset-env', { modules: false }],
    ],
    plugins: [
        [
            'component',
            {
                libraryName: 'element-ui',
                styleLibraryName: 'theme-chalk',
            },
        ],
    ],
};
Cannot find module '@babel-preset-env/babel-preset'解决：换成['@babel/env', { modules: false }]
