import { __ } from '@wordpress/i18n';
import { InnerBlocks, RichText } from '@wordpress/block-editor'
import { Dashicon } from '@wordpress/components'

export default function save( { attributes } ) {

	return (
		<RichText.Content 
			tagName={attributes.titleTag} 
			value={attributes.titleContent}
			style={{color: attributes.titleColor, backgroundColor: attributes.backgroundColor}} 
		/>
	);
}
