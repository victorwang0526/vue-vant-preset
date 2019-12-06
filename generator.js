module.exports = (api, options, rootOptions) => {
    // 安装一些基础公共库
    api.extendPackage({
        dependencies: {
            "@capacitor/android": "^1.2.1",
            "@capacitor/cli": "^1.2.1",
            "@capacitor/core": "^1.2.1",
            "@capacitor/ios": "^1.2.1",
            "vant": "^2.2.16",
        },
        devDependencies: {
            "babel-plugin-import": "^1.13.0",
        }
    });

    // 配置文件
    api.render({
        './capacitor.config.json' : './template/capacitor.config.json',
    });

    if (options.template === 'vue-vant' || options.template === 'vue-vant-tabs') {
        // 复制并用 ejs 渲染 `./template` 内所有的文件
        api.render('./template/vue-vant')

        if(options.template === 'vue-vant-tabs') {
            api.render('./template/vue-vant-tabs')
        }
    }
}
