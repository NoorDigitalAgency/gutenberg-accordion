const defaultConfig = require( '@wordpress/scripts/config/webpack.config' ),
      DependencyExtractionWebpackPlugin = require( '@wordpress/dependency-extraction-webpack-plugin' ),
      OptimizeCSSAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' ),
      path = require( 'path' );

defaultConfig.entry = {
  index: [
    path.resolve( process.cwd(), 'src', 'index.js' ),
    path.resolve( process.cwd(), 'src/styles', 'style.scss' ),
    path.resolve( process.cwd(), 'src/styles', 'editor.scss' ),
  ],
  accordion: path.resolve( process.cwd(), 'src/blocks/accordion/assets', 'accordion.js' )
};

defaultConfig.optimization.minimizer.push(
  new OptimizeCSSAssetsPlugin({
    cssProcessorOptions: {
      map: {
        inline: false,
        annotation: true
      }
    }
  })
)

module.exports = (env, argv) => {

  const isDevelopment = () => argv.mode === 'development';
  
  const config = {
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

  return config;
}