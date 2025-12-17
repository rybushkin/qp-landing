module.exports = {
    plugins: [
        // Ensure CSS custom properties are preserved
        require('postcss-preset-env')({
            preserve: true,
            features: {
                'css-variables': true
            }
        })
    ]
}
