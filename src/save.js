import { __ } from '@wordpress/i18n';
import { InnerBlocks, RichText } from '@wordpress/block-editor'
import { Dashicon } from '@wordpress/components'

export default function save( { attributes } ) {

	return (
		<>
			<Dashicon icon="arrow-down-alt2" />
			<RichText.Content 
				className="noor-block-accordion__title"
				tagName={attributes.titleTag} 
				value={attributes.titleContent}
				style={{color: attributes.titleColor, backgroundColor: attributes.backgroundColor}} 
			/>
			<div className="noor-block-accordion__content" area-expanded={`${attributes.initialState}`}>
				<InnerBlocks.Content />
			</div>
		</>
	);
}
