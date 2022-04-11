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
        ],["component", {
            libraryName: "antd",
            style: true,
          }, "antd"],
          ["component", {
            libraryName: "test-module",
            style: true,
          }, "test-module"]
    ],
};

