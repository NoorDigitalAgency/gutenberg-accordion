import { registerBlockType } from '@wordpress/blocks'
import * as accordion from './blocks/accordion/index'
import * as bulletPoint from './blocks/bulletpoint/index'

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