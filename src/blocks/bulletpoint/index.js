import { __ } from '@wordpress/i18n';
import { withColors } from '@wordpress/block-editor'
import { getColorClassName } from '@wordpress/block-editor'
import { compose } from '@wordpress/compose'
import { withSelect } from '@wordpress/data'
import Edit from './edit';

export const name = 'bullet-point';

export const settings = {
  title: __( 'Bullet point', 'accordion' ),
	description: __( 'Bullet point block', 'blocks' ),
	category: 'noor-collection',
	icon: 'marker',
	supports: {
		html: false,
	},
	attributes: {
		color: {
			type: 'string'
		},
		backgroundColor: {
			type: 'string'
		},
		align: {
			type: 'string',
			default: 'center'
		},
		useMedia: {
			type: 'boolean',
			default: false
		},
		mediaInput: {
			type: 'string',
			default: ''
		},
		mediaId: {
			type: 'number',
			default: 0
		},
		mediaUrl: {
			type: 'string',
			default: ''
		}
	},
  edit: compose(
		withColors({ color: 'color', backgroundColor: 'background-color' }), 
		withSelect((select, props) => {
			return { media: props.attributes.mediaId ? select('core').getMedia(props.attributes.mediaId) : undefined}
		}))( Edit ),
  save: ({ attributes }) => {

		const {color, backgroundColor, align, mediaControl} = attributes;

		const colorClass = color != undefined ? getColorClassName( 'color', color ) : '';
		
		const backgroundColorClass = backgroundColor != undefined ? getColorClassName('background-color', backgroundColor) : '';

		return (
			<div className={`noor-block-bullet-point has-align-${align}`}>
				<div className={`noor-block-bullet-point__point ${backgroundColorClass}`}>
					{attributes.useMedia && attributes.mediaId != 0 
						? <img src={attributes.mediaUrl} /> 
						: <h3 className={`noor-block-bullet-point__text-content ${colorClass}`}>{attributes.mediaInput}</h3>
					}
				</div>
			</div>
		);
	}
}