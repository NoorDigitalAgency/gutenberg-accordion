import { registerBlockType } from '@wordpress/blocks';

import { name, accordion } from './blocks/accordion/index'

const prefix = 'noor/';

registerBlockType( prefix + name, {...accordion} );