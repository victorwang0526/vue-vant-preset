module.exports = [
    {
        type: 'input',
        name: 'appId',
        message: 'input a appId',
        default: 'com.example.vue.vant'
    },
    {
        type: 'input',
        name: 'appName',
        message: 'input a appName',
        default: 'vue-vant-example'
    },
    {
        type: 'list',
        name: 'template',
        message: 'Please pick a preset',
        choices: [
            {
                name: 'vue-vant',
                value: 'vue-vant'
            },
            {
                name: 'vue-vant-tabs',
                value: 'vue-vant-tabs'
            }
        ],
        default: 'vue-vant'
    }
]
