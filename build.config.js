const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const buildEnv = process.env.BUILD_ENV;

const isProd = buildEnv === 'prod';

const config={
    entry:"./src/index.tsx",
    mode: isProd ? "production" : "development",
    devtool: "source-map",

    output:{
        filename: "application.js",
        path: path.resolve(__dirname,'build')
    },

    resolve:{
      extensions:['.*', '.js','.jsx','.ts','.tsx']
    },

    module:{
        rules:[

            {
                test:/\.[jt]sx?$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        configFile:path.resolve(__dirname,'babel.config.js')
                    }
                }
            },

            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options:{
                            modules:{
                                localIdentName: isProd ? '[hash:base64:8]' : '[local]_[hash:base64:4]'
                            }
                        }
                    }
                ]
            },

            {
              test:/\.s[ac]ss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options:{
                            modules:{
                                localIdentName: isProd ? '[hash:base64:8]' : '[local]_[hash:base64:4]'
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },

            {
                test: /\.(graphql|gql)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: '@graphql-tools/webpack-loader'
                    }
                ]
            },

            {
                test: /\.(jpe?g|png|gif|bmp|webp)$/,
                type: 'asset/resource',
            },
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'./index.html')
        }),

        new MiniCssExtractPlugin()
    ]
}

module.exports =config