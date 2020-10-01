const defaultConfig = require( '@wordpress/scripts/config/webpack.config' ),
      DependencyExtractionWebpackPlugin = require( '@wordpress/dependency-extraction-webpack-plugin' ),
      path = require( 'path' );

// Add entrypoint for fronend assets
defaultConfig.entry.accordion = path.resolve( process.cwd(), 'src/blocks/accordion/assets/scripts', 'accordion.js');

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