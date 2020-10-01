import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element'
import { InspectorControls, InnerBlocks, RichText, PanelColorSettings } from '@wordpress/block-editor'
import { Dashicon, PanelBody, ToggleControl } from '@wordpress/components'
import { RadioGroup } from '../../components/radio-group'
import './assets/styles/editor.scss'

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

	const setTitleTag = event => setAttributes({ titleTag: event.target.value });

	const setExpandIcon = event => {
		
		event.preventDefault();
		return setAttributes({ expandIcon: event.currentTarget.value });
	}

	const setCollapseIcon = event => {
		
		event.preventDefault();
		return setAttributes({ collapseIcon: event.currentTarget.value });
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
					<RadioGroup 
						onClick={setTitleTag} 
						options={titleTags} 
						initialChecked={attributes.titleTag} 
					/>
				</PanelBody>

				<PanelBody title={__('Icon settings')} initialOpen={false}>
					<RadioGroup 
						label={__('Expand Icon')} 
						onClick={setExpandIcon} 
						options={icons.expand} 
						initialChecked={attributes.expandIcon} 
						showIcons={true} 
					/>

					<RadioGroup 
						label={__('Collapse Icon')} 
						onClick={setCollapseIcon} 
						options={icons.collapse} 
						initialChecked={attributes.collapseIcon} 
						showIcons={true} 
					/>
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
