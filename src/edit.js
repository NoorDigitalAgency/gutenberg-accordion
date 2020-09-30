
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element'
import { InspectorControls, InnerBlocks, RichText, PanelColorSettings } from '@wordpress/block-editor'
import { Button, ButtonGroup, Dashicon, PanelBody, PanelRow, ToggleControl, SelectControl } from '@wordpress/components'
import './editor.scss'

const icons = {
	expand: ['plus', 'insert', 'arrow-down', 'arrow-down-alt', 'arrow-down-alt2'],
	collapse: ['minus', 'remove', 'arrow-up', 'arrow-up-alt', 'arrow-up-alt2']
}

const AccordionHead = () => (
	<InnerBlocks 
		allowedBlocks={['core/heading']}
		template={[['core/heading', {placeholder: 'Example title...'}]]}
		templateLock="all"
	/>
);

const AccordionContent = () => (
	<InnerBlocks 
		allowedBlocks={['core/paragraph', 'core/list']}
		template={[['core/paragraph', {}]]}
	/>
)

export default function Edit( props ) {
	
	const { textColor, setTextColor, backgroundColor, setBackgroundColor, className, attributes, setAttributes } = props;
	
	const [expanded, setExpanded] = useState(false);

	const textColorClass = textColor != undefined ? textColor.class : '';
	
	const backgroundColorClass = backgroundColor != undefined ? backgroundColor.class : '';

	const titleTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

	const icons = {
		expand: ['arrow-down', 'arrow-down-alt2', 'plus'],
		collapse: ['arrow-up', 'arrow-up-alt2', 'minus']
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Toggle Settings')} initialOpen={true}>
					<ToggleControl 
						label="Initial state"
						help={attributes.initialState ? 'Expanded' : 'Collapsed'}
						checked={attributes.initialState}
						onChange={() => setAttributes({initialState: !attributes.initialState})}
					/>
				</PanelBody>

				<PanelBody title={__('Size settings')} initialOpen={false}>
					<ButtonGroup mode="radio" onClick={event => setAttributes({titleTag: event.target.value})}>
						{titleTags.map((tag, index) => <Button
							key={index}
							checked={attributes.titleTag}
							value={tag}
						>{tag.toUpperCase()}</Button>)}
					</ButtonGroup>
				</PanelBody>

				<PanelBody title={__('Icon settings')} initialOpen={false}>
				<PanelRow>
				{__('Expand Icon')}
					<ButtonGroup mode="radio">
						{icons.expand.map((icon, index) =>  <Button
							style={attributes.expandIcon === icon ? {background: 'blue'} : null}
							key={index}
							checked={attributes.expandIcon}
							value={icon}
							onClick={event => {
								event.preventDefault();
								setAttributes({expandIcon: event.currentTarget.value})
							}}
						>{<Dashicon icon={icon} />}</Button>)}
					</ButtonGroup>
					</PanelRow>
					<PanelRow>
					{__('Collapse Icon')}
					<ButtonGroup mode="radio">
						{icons.collapse.map((icon, index) =>  <Button
							key={index}
							checked={attributes.collapseIcon}
							value={icon}
							onClick={event => {
								event.preventDefault();
								setAttributes({collapseIcon: event.currentTarget.value})
							}}
						>{<Dashicon icon={icon} />}</Button>)}
					</ButtonGroup>
					</PanelRow>
				</PanelBody>
				
				<PanelColorSettings
					title={__('Text color Settings')}
					colorSettings={[{
						value: textColor.color,
						onChange: setTextColor,
						label: __('Text Color')
					}]}
					initialOpen={false}
				/>

				<PanelColorSettings
					title={__('Background color Settings')}
					colorSettings={[{
						value: backgroundColor.color,
						onChange: setBackgroundColor,
						label: __('Background Color')
					}]}
					initialOpen={false}
				/>
			</InspectorControls>
			
			<div className={`noor-block-accordion ${backgroundColorClass}`} onClick={() => setExpanded(!expanded)}>
				<RichText 
					className={`noor-block-accordion__title ${textColorClass}`} 
					tagName={attributes.titleTag}
					value={attributes.titleContent}
					formattingControls={['bold', 'italic', 'align']}
					onChange={titleContent => setAttributes({titleContent})}
				/>
				<Dashicon icon={expanded ? attributes.collapseIcon : attributes.expandIcon} className={textColorClass} />
			</div>
			<div id="accordion" className="noor-block-accordion__content" aria-expanded={`${attributes.initialState || expanded}`}>
				<InnerBlocks 
					allowedBlocks={['core/paragraph', 'core/list']}
					template={[['core/paragraph', {}]]}
				/>
			</div>
		</>
	);
}
