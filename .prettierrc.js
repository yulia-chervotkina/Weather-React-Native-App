module.exports = {
    arrowParens: 'avoid',
    singleQuote: true,
    trailingComma: 'all',
    tabWidth: 4,
    importOrder: [
        '^react',
        '^react-native',
        '@react',
        '@react-native',
        '^[a-zA-Z]',
        '^@?\\w',
        '^[./]',
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
};
