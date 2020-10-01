<?php
/**
 * Plugin Name:     Blocks
 * Description:     Example block written with ESNext standard and JSX support – build step required.
 * Version:         0.1.0
 * Author:          The WordPress Contributors
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     blocks
 *
 * @package         noor
 */

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
	wp_register_script(
		'noor-blocks-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['index.js']['dependencies'],
		$script_asset['index.js']['version']
	);
	wp_set_script_translations( 'noor-blocks-block-editor', 'blocks' );

	$editor_css = 'build/index.css';
	wp_register_style(
		'noor-blocks-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'noor-blocks-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'noor/blocks', array(
		'editor_script' => 'noor-blocks-block-editor',
		'editor_style'  => 'noor-blocks-block-editor',
		'style'         => 'noor-blocks-block',
	) );

	add_theme_support( 'disable-custom-colors' );

	add_theme_support( 'editor-color-palette', [
		[
			'name' => 'Black',
			'slug' => 'black',
			'color' => '#000000'
		],
		[
			'name' => 'Blackish',
			'slug' => 'black-ish',
			'color' => '#353535'
		],
		[
			'name' => 'Primary',
			'slug' => 'primary',
			'color' => '#446B7E'
		],
		[
			'name' => 'Secondary',
			'slug' => 'secondary',
			'color' => '#ECE0D1'
		],
		[
			'name' => 'Secondary Light',
			'slug' => 'secondary-light',
			'color' => '#F5EFE8'
		],
		[
			'name' => 'White',
			'slug' => 'white',
			'color' => '#FFFFFF'
		]
	]);
});

add_action( 'wp_enqueue_scripts', function () {

	if ( ! is_admin() && has_block( 'noor/accordion' ) ) {
		wp_enqueue_script(
			'noor-blocks',
			plugins_url( 'build/accordion.js', __FILE__),
			NULL,
			filemtime( plugin_dir_path(__FILE__) . 'build/accordion.js')
		);
	}
});

add_filter( 'block_categories', function( $cat, $post ) {
	return array_merge(
		$cat,
		[[
			'slug' => 'noor-blocks',
			'title' => 'Noor blocks'
		]]
		);
}, 10, 2);
