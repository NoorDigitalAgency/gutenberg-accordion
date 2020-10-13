import { addFilter } from '@wordpress/hooks'
import { addInlineIconAttribute, withIcon, addExtraProps } from './core-button/core-button'

addFilter( 'blocks.registerBlockType', 'noor/gutenberg-blocks/custom-attributes', addInlineIconAttribute );

addFilter( 'editor.BlockEdit', 'noor/gutenberg-blocks/custom-control', withIcon );

// addFilter( 'blocks.getSaveContent.extraProps', 'noor/gutenberg-blocks/custom-props', addExtraProps );