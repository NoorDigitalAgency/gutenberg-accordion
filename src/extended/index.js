import { addFilter } from '@wordpress/hooks'
import { addInlineIconAttribute, withIcon} from './core-button/core-button'

addFilter( 'blocks.registerBlockType', 'noor/gutenberg-blocks/custom-attributes', addInlineIconAttribute );

addFilter( 'editor.BlockEdit', 'noor/gutenberg-blocks/custom-control', withIcon );
