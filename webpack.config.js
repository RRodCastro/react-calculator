module.exports = {
    entry: "./index.js",
    output: {
        path: `${__dirname}/dist`,
        publicPath: '/dist',
        filename: "bundle.js"
    },
    module: {
      rules: [
         {
           test: /\.jsx?$/,
           use: ['babel-loader']
         },
		 {
			test: /\.png?$/,
			loader: 'url-loader'
		 },
		 {
			test: /\.jpg?$/,
			loader: 'url-loader'
		 },
		 {
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		 },
		 { test: /\.(woff|woff2|eot|ttf|svg)$/, 
			loader: 'url-loader?limit=100000' }
      ]
    }
}
