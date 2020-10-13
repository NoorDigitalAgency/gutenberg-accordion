import { __ } from '@wordpress/i18n';
import { withColors } from '@wordpress/block-editor'
import { getColorClassName } from '@wordpress/block-editor'
import { compose } from '@wordpress/compose'
import { withSelect } from '@wordpress/data'
import Edit from './edit';
// import save from './save';

const BulletPoint = compose(
	withColors({backgroundColor: 'background-color'}), 
	withSelect((select, props) => {
		return { media: props.attributes.mediaId ? select('core').getMedia(props.attributes.mediaId) : undefined}
	}))( Edit );

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
		backgroundColor: {
			type: 'string'
		},
		align: {
			type: 'string',
			default: 'center'
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
  edit: (props) => <BulletPoint {...props} />,
  save: ({ attributes }) => {

		const {backgroundColor, align} = attributes;

		const backgroundColorClass = backgroundColor != undefined ? getColorClassName('background-color', backgroundColor) : '';

		return (
			<div class={`noor-block-bullet-point has-align-${align}`}>
				<div className={`noor-block-bullet-point__point ${backgroundColorClass}`}>
					
				</div>
			</div>
		);
	}
}