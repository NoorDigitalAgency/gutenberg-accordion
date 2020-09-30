import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { withColors } from '@wordpress/block-editor'
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType( 'noor/blocks', {
	title: __( 'Accordion', 'accordion' ),
	description: __( 'Accordion block', 'blocks' ),
	category: 'noor-blocks',
	icon: 'list-view',
	supports: {
		html: false,
	},
	attributes: {
		titleContent: {
			type: 'string',
			default: 'Example title...'
		},
		titleTag: {
			type: 'string',
			default: 'h4'
		},
		initialState: {
			type: 'boolean',
			default: false
		},
		textColor: {
			type: 'string',
			default: '#ECE0D1'
		},
		backgroundColor: {
			type: 'string',
			default: '#446B7E'
		},
		icon: {
			type: 'string',
			default: 'arrow-down-alt2'
		},
		iconColor: {
			type: 'string',
			default: '#0071A1'
		},
		iconAlignment: {
			type: 'string',
			default: 'right'
		}
	},
	edit: withColors({textColor: 'color', backgroundColor: 'background-color'})( Edit ),
	save,
});
