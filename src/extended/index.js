import { addFilter } from '@wordpress/hooks'
import { addInlineIconAttribute, withIcon } from './core-button'
import { addBackgroundColor, withBackgroundColor } from './core-column'

addFilter( 'blocks.registerBlockType', 'noor/gutenberg-blocks/custom-attributes', addInlineIconAttribute );

addFilter( 'editor.BlockEdit', 'noor/gutenberg-blocks/custom-control', withIcon );

addFilter( 'blocks.registerBlockType', 'noor/gutenberg-blocks/custom-attributes', addBackgroundColor );

addFilter( 'editor.BlockEdit', 'noor/gutenberg-blocks/custom-control', withBackgroundColor );
