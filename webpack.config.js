module.exports = (env, argv)=>{

    return {
        // エントリーポイント
        entry: './src/app.ts',
        // JSファイル名(本番JSに上書きしないように別名に)
        output:{
            filename: (argv.mode == 'production') ? '[name].js' : '[name]_dev.js'
        },
        // ソースマップ出力
        devtool: (argv.mode == 'production') ? false : 'inline-source-map',
        // import対象拡張子
        resolve:{
            extensions: ['.ts']
        },
        module:{
            rules:[
                {
                    // 対象拡張子
                    test: /\.ts$/,
                    // コンパイラ
                    use: 'ts-loader'
                }
            ]
        },
        externals:{
            'jquery': 'jquery',
            '_': 'lodash'
        }
    };
}