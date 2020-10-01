import { registerBlockType } from '@wordpress/blocks';

import * as accordion from './blocks/accordion/index'

const prefix = 'noor/';

const registerBlock = block => {

	const {name, settings} = block;
	
	registerBlockType( prefix + name, settings );
}

const registerNoorBlocks = () => [
	accordion,
].forEach( block => registerBlock( block ) );

registerNoorBlocks();