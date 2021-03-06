import { registerBlockType, unregisterBlockStyle, registerBlockStyle } from '@wordpress/blocks'
import domReady from '@wordpress/dom-ready'

import * as accordion from './blocks/accordion/index'

import * as bulletPoint from './blocks/bulletpoint/index'

import * as googleMap from './blocks/google-map/index'

import { addFilter } from '@wordpress/hooks'

import { filters } from './filters/index'

const prefix = 'noor/';

const registerBlock = block => {

	const {name, settings} = block;
	
	registerBlockType( prefix + name, settings );
}

const registerNoorBlocks = () => [
	accordion,
  bulletPoint,
  googleMap
].forEach( block => registerBlock( block ) );

addFilter(
  'blocks.registerBlockType',
  'noor/gutenberg-blocks/custom-attributes',
  filters.attributes
);

addFilter( 
  'editor.BlockEdit', 
  'noor/gutenberg-blocks/custom-control', 
  filters.blockEdit 
);

addFilter(
  'blocks.getSaveContent.extraProps',
  'noor/gutenberg-blocks/extraProps',
  filters.extraProps
);

window.addEventListener( 'DOMContentLoaded', () => {

  unregisterBlockStyle('core/button', ['outline', 'fill']);

  registerBlockStyle( 'core/button', [
    {
      name: 'primary',
      label: 'Primary Button',
      isDefault: true
    },
    {
      name: 'secondary',
      label: 'Secondary Button'
    }
  ])
})

registerNoorBlocks();