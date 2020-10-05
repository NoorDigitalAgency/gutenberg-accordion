import { __ } from '@wordpress/i18n';
import { withColors } from '@wordpress/block-editor'
import Edit from './edit';
import save from './save';

export const name = 'accordion';

export const settings = {
  title: __( 'Accordion', 'accordion' ),
	description: __( 'Accordion block', 'blocks' ),
	category: 'noor-collection',
	icon: 'list-view',
	supports: {
		html: false,
	},
	attributes: {
		anchorContent: {
			type: 'string',
			default: ''
		},
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
			default: '#000000'
		},
		titleBackground: {
			type: 'string',
			default: '#FFFFFF'
		},
		contentBackground: {
			type: 'string',
			default: '#FFFFFF'
		},
		expandIcon: {
			type: 'string',
			default: 'arrow-down-alt2'
		},
		collapseIcon: {
			type: 'string',
			default: 'arrow-up-alt2'
		},
		iconAlignment: {
			type: 'string',
			default: 'right'
		}
	},
	edit: withColors({
		titleColor: 'color', 
		titleBackground: 'background-color', 
		contentBackground: 'background-color'
	})( Edit ),
	save,
}