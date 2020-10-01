import { __ } from '@wordpress/i18n';
import { withColors } from '@wordpress/block-editor'
import './assets/styles/style.scss'
import Edit from './edit';
import save from './save';

export const name = 'accordion';

export const accordion = {
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
		expandIcon: {
			type: 'string',
			default: 'arrow-down-alt2'
		},
		collapseIcon: {
			type: 'string',
			default: 'arrow-down-alt2'
		},
		iconAlignment: {
			type: 'string',
			default: 'right'
		}
	},
	edit: withColors({textColor: 'color', backgroundColor: 'background-color'})( Edit ),
	save,
}