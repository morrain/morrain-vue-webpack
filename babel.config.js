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
    const plugins = [
        [
            "@babel/plugin-transform-runtime",
            {
                corejs: 2
            }
        ],
        [
            "@babel/plugin-syntax-dynamic-import",
        ]
    ];

    return {
        presets,
        plugins
    };
}