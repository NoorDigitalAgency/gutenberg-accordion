<?php
/**
 * Plugin Name:     Noor Blocks
 * Description:     Collection of custom blocks.
 * Version: 				1.1.2
 * Author:          Noor Digital Agency
 * Author URI:      https://noordigital.com
 * Text Domain:     blocks
 *
 * @package         noor
 */

 // Require composer autoloader
require plugin_dir_path( __FILE__ ) . 'vendor/autoload.php';

// Require settings page for google map api key
require plugin_dir_path( __FILE__ ) . 'includes/settings.php';

$package = json_decode( file_get_contents( __DIR__ . '/composer.json' ), false );

/**
 * Plugin updater to push updates from github to wp admin interface
 */
$plugin_updater = Puc_v4_Factory::buildUpdateChecker(
	$package->homepage,
	__FILE__,
	$package->name
);

// Stable branch master
// $plugin_updater->setBranch( 'master' );

$plugin_updater->getVcsApi()->enableReleaseAssets();

 // Register each block type
function noor_register_block( $dir, $namespace, $assets ) {
	
	$blocks = new DirectoryIterator( $dir );

	foreach( $blocks as $block ) {

		if ( ! $block->isDot() ) {

			$block_name = $block->getBaseName();

			$callback = $block->getPath() . '/' . $block_name . '/' . $block_name . '_callback.php';

			if ( file_exists( $callback ) ) {

				$assets['render_callback'] = $block . '_callback';
			}

			register_block_type( trailingslashit( $namespace ). $block_name, $assets );
		}	
	}
}

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
add_action( 'init', function () {

	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "noor/blocks" block first.'
		);
	}
	
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );

	wp_register_script( 'noor-blocks-block-editor', plugins_url( $index_js, __FILE__ ), $script_asset['index.js']['dependencies'], $script_asset['index.js']['version'] );

	wp_localize_script( 'noor-blocks-block-editor', 'options', get_option( 'map_settings' ) );

	wp_set_script_translations( 'noor-blocks-block-editor', 'blocks' );

	$editor_css = 'build/index.css';
	wp_register_style( 'noor-blocks-block-editor', plugins_url( $editor_css, __FILE__ ), [], filemtime( "$dir/$editor_css" ) );

	$style_css = 'build/style-index.css';
	wp_register_style( 'noor-blocks-block', plugins_url( $style_css, __FILE__ ), [], filemtime( "$dir/$style_css" ) );

	noor_register_block( "$dir/src/blocks/", 'noor', [
		'editor_script' => 'noor-blocks-block-editor',
		'editor_style'  => 'noor-blocks-block-editor',
		'style'         => 'noor-blocks-block',
	]);
});

// Enqueue frontend assets
add_action( 'wp_enqueue_scripts', function () {

	if ( has_block( 'noor/accordion' ) ) {
		
		wp_enqueue_script( 'noor-blocks', plugins_url( 'build/accordion.js', __FILE__), NULL, filemtime( plugin_dir_path(__FILE__) . 'build/accordion.js'), true );
	}
});

// Register block category
add_filter( 'block_categories', function( $categories, $post ) {
	return array_merge(
		$categories,
		[
			[
				'slug' => 'noor-collection',
				'title' => 'Noor Collection'
			]
		]
	);
}, 10, 2);
