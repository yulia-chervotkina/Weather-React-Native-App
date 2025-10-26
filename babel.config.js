module.exports = {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
        [
            'module:react-native-dotenv',
            {
                moduleName: '@env',
                path: '.env',
                safe: false,
                allowUndefined: true,
                blocklist: null,
                allowlist: null,
                verbose: false,
            },
        ],
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
                },
            },
        ],
    ],
};
