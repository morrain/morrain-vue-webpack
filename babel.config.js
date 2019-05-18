module.exports = function (api) {
    api.cache(true);

    const presets = [
        [
            "@babel/env",
            {
                debug: true,
                useBuiltIns: 'usage'
            }
        ]
    ];
    const plugins = [];

    return {
        presets,
        plugins
    };
}