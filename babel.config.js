module.exports = {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
        ['module:react-native-dotenv'],
        [
            'module-resolver',
            {
                root: ['./'],
                extensions: [
                    '.ios.js',
                    '.android.js',
                    '.js',
                    '.ts',
                    '.tsx',
                    '.json',
                ],
                alias: {
                    '@': './src',
                    // '@components': './src/components',
                    // '@utils': './src/utils',
                    // '@stores': './src/stores',
                    // '@assets': './src/assets',
                    // '@screens': './src/screens',
                    // '@constants': './src/constants',
                },
            },
        ],
    ],
};
