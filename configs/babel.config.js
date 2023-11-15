module.exports = {
    sourceMaps: false,
    presets: ['@babel/preset-env','@babel/preset-typescript'],
    exclude: [
        'node_modules/**'
    ],    
    ignore: [
        'src/interfaces/**'
    ]
}