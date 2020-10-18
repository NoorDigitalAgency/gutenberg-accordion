import { registerBlockType } from '@wordpress/blocks'

import * as accordion from './blocks/accordion/index'

import * as bulletPoint from './blocks/bulletpoint/index'

import { addFilter } from '@wordpress/hooks'

import { 
  addInlineIconAttribute,
  withIcon
} from './core-blocks/core-button'

import { 
  addBackgroundColor,
  withBackgroundColor 
} from './core-blocks/core-column'

const prefix = 'noor/';

const registerBlock = block => {

	const {name, settings} = block;
	
	registerBlockType( prefix + name, settings );
}

const registerNoorBlocks = () => [
	accordion,
	bulletPoint,
].forEach( block => registerBlock( block ) );

registerNoorBlocks();

// CORE/BUTTON
addFilter( 
  'blocks.registerBlockType', 
  'noor/gutenberg-blocks/custom-attributes', 
  addInlineIconAttribute 
);

addFilter( 
  'editor.BlockEdit', 
  'noor/gutenberg-blocks/custom-control', 
  withIcon 
);

// CORE/COLUMN
addFilter( 
  'blocks.registerBlockType', 
  'noor/gutenberg-blocks/custom-attributes', 
  addBackgroundColor 
);

addFilter( 
  'editor.BlockEdit', 
  'noor/gutenberg-blocks/custom-control', 
  withBackgroundColor
);