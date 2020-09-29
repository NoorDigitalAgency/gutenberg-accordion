import { __ } from '@wordpress/i18n';
import { InnerBlocks, RichText } from '@wordpress/block-editor'
import { Dashicon } from '@wordpress/components'

export default function save( { attributes } ) {

	return (
		<>
			<Dashicon arIa-controls="accordion" icon="arrow-down-alt2" />
			<RichText.Content 
				className="noor-block-accordion__title"
				tagName={attributes.titleTag} 
				value={attributes.titleContent}
				style={{color: attributes.titleColor, backgroundColor: attributes.backgroundColor}} 
			/>
			<div id="accordion" className="noor-block-accordion__content" arIa-expanded={`${attributes.initialState}`}>
				<InnerBlocks.Content className="has-background" />
			</div>
		</>
	);
}
