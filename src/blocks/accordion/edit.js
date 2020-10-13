import { __ } from '@wordpress/i18n';
import { Fragment, useState } from '@wordpress/element'
import { InspectorControls, InnerBlocks, RichText, PanelColorSettings } from '@wordpress/block-editor'
import { Dashicon, PanelBody, ToggleControl, __experimentalInputControl as InputControl } from '@wordpress/components'
import { RadioGroup } from '../../components/radio-group'

export default function Edit( props ) {
	
	const { titleColor, setTitleColor, titleBackground, setTitleBackground, contentBackground, setContentBackground, attributes, setAttributes } = props;
	
	const [expanded, setExpanded] = useState(false);

	const titleColorClass = titleColor != undefined ? titleColor.class : '';
	
	const titleBackgroundClass = titleBackground != undefined ? titleBackground.class : '';

	const contentBackgroundClass = contentBackground != undefined ? contentBackground.class : '';

	const titleTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

	const icons = {
		expand: ['arrow-down', 'arrow-right', 'arrow-down-alt2', 'arrow-right-alt2', 'arrow-down-alt', 'arrow-right-alt', 'plus'],
		collapse: ['arrow-up', 'arrow-up-alt2', 'minus', 'arrow-up-alt', 'no-alt']
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
		<Fragment>
			<InspectorControls>
				<PanelBody title={__('Base Settings')} initialOpen={true}>
					<label className="block-base-control__label"><strong>{__('Anchor title')}</strong></label>
					<InputControl
						value={attributes.anchorContent}
						onChange={anchorContent => setAttributes({anchorContent})}
					/>

					<label className="block-base-control__label"><strong>{__('Initial state')}</strong></label>
					<ToggleControl 
						label={attributes.initialState ? 'Expanded by default' : 'Collapsed by default'}
						checked={attributes.initialState}
						onChange={() => setAttributes({initialState: !attributes.initialState})}
					/>

					<RadioGroup 
						label={__('Title size')}
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
					title={__('Color settings')}
					initialOpen={false}
					colorSettings={[
						{
							value: titleColor.color,
							onChange: setTitleColor,
							label: __('Title text color')
						}, 
						{
							value: titleBackground.color,
							onChange: setTitleBackground,
							label: __('Title background color')
						},
						{
							value: contentBackground.color,
							onChange: setContentBackground,
							label: __('Content background color')
						}
					]}
				/>
			</InspectorControls>
			
			<div 
				id={`#${attributes.anchorContent}`} 
				className={`noor-block-accordion ${titleBackgroundClass}`} 
				onClick={() => setExpanded(!expanded)} 
				aria-expanded={`${attributes.initialState || expanded}`}
			>
				<RichText 
					className={`noor-block-accordion__title ${titleColorClass}`} 
					tagName={attributes.titleTag}
					value={attributes.titleContent}
					formattingControls={['bold', 'italic', 'align']}
					onChange={titleContent => setAttributes({titleContent})}
				/>
				<Dashicon 
					icon={expanded ? attributes.collapseIcon : attributes.expandIcon} 
					className={`noor-block-accordion__icon ${titleColorClass}`} 
				/>
			</div>
			<div className={`noor-block-accordion__content ${contentBackgroundClass}`}>
				<InnerBlocks 
					allowedBlocks={['core/paragraph', 'core/list', 'core/button']}
					template={[['core/paragraph', {}]]}
				/>
			</div>
		</Fragment>
	);
}
