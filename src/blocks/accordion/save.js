import { __ } from '@wordpress/i18n';
import { InnerBlocks, RichText, getColorClassName } from '@wordpress/block-editor'

export default function save( { attributes } ) {

	const { titleColor, titleBackground, contentBackground } = attributes;

	const titleColorClass = titleColor != undefined ? getColorClassName('color', titleColor) : '';

	const titleBackgroundClass = titleBackground != undefined ? getColorClassName('background-color', titleBackground) : '';

	const contentBackgroundClass = contentBackground != undefined ? getColorClassName('background-color', contentBackground) : '';
	
	return ( 
		<>
			<div 
				id={`#${attributes.anchorContent}`}
				className={`noor-block-accordion ${titleBackgroundClass}`} aria-expanded={attributes.initialState}
			>
				<RichText.Content 
					className={`noor-block-accordion__title ${titleColorClass}`}
					tagName={attributes.titleTag}
					value={attributes.titleContent}
				/>
				<span 
					className={`noor-block-accordion__icon dashicons dashicons-${attributes.expandIcon} ${titleColorClass}`} 
					aria-hidden="true" data-state={!attributes.initialState}
				></span>
				<span 
					className={`noor-block-accordion__icon dashicons dashicons-${attributes.collapseIcon} ${titleColorClass}`} 
					aria-hidden="true" data-state={attributes.initialState}
				></span>
			</div>
			<div className={`noor-block-accordion__content ${contentBackgroundClass}`}>
				<InnerBlocks.Content />
			</div>
		</>
	);
}
