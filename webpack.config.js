const defaultConfig = require( '@wordpress/scripts/config/webpack.config' ),
      DependencyExtractionWebpackPlugin = require( '@wordpress/dependency-extraction-webpack-plugin' ),
      path = require( 'path' );

defaultConfig.entry = {
  index: [
    path.resolve( process.cwd(), 'src', 'index.js' ),
    path.resolve( process.cwd(), 'src', 'style.scss' ),
    path.resolve( process.cwd(), 'src', 'editor.scss' ),
  ],
  accordion: path.resolve( process.cwd(), 'src/blocks/accordion/assets', 'accordion.js' )
};

module.exports = {
  
  ...defaultConfig,
  
  plugins: [
    ...defaultConfig.plugins.filter(plugin => 
      plugin.constructor.name !== 'DependencyExtractionWebpackPlugin'
    ),
    new DependencyExtractionWebpackPlugin({
      injectPolyfill: true,
      combineAssets: true,
      combinedOutputFile: 'index.asset.php'
    })
  ]
}