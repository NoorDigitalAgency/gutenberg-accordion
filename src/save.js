import { __ } from '@wordpress/i18n';
import { InnerBlocks, RichText, getColorClassName } from '@wordpress/block-editor'

export default function save( { attributes } ) {

	const { textColor, backgroundColor } = attributes;

	const textColorClass = textColor != undefined ? getColorClassName('color', textColor) : '';

	const backgroundColorClass = backgroundColor != undefined ? getColorClassName('background-color', backgroundColor) : '';
	
	return ( 
		<>
			<div className={`noor-block-accordion ${backgroundColorClass}`}>
				<RichText.Content 
					className={`noor-block-accordion__title ${textColorClass}`}
					tagName={attributes.titleTag}
					value={attributes.titleContent}
				/>
				<span className={`dashicons dashicons-${attributes.icon} ${textColorClass}`} area-hidden="true"></span>
			</div>
			<div id="accordion" className="noor-block-accordion__content" aria-expanded={attributes.initialState}>
				<InnerBlocks.Content />
			</div>
		</>
	);
}
