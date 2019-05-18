module.exports = function (api) {
    api.cache(true);

    const presets = [
        [
            "@babel/env",
            {
                debug: true
            }
        ]
    ];
    const plugins = [];

    return {
        presets,
        plugins
    };
}