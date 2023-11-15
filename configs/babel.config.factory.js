module.exports = {
    sourceMaps: false,
    presets: [
        [
            '@babel/preset-env',
            {
                'targets': {
                    'chrome': '58',
                    'ie': '11'
                },
                // for uglifyjs...
                // @see https://babeljs.io/docs/babel-preset-env#forcealltransforms
                'forceAllTransforms': true
            }
        ],
        '@babel/preset-typescript'
    ],
    // @see https://babeljs.io/docs/options#ignore
    ignore: [
        'src/interfaces/**',
        'src/tests/**'
    ]
}
