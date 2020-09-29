import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
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
		titleColor: {
			type: 'string',
			default: '#0071A1'
		},
		backgroundColor: {
			type: 'string',
			default: '#252525'
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
	edit: Edit,
	save,
});
