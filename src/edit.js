
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element'
import { InspectorControls, InnerBlocks, RichText } from '@wordpress/block-editor'
import { Button, ButtonGroup, Dashicon, PanelBody, ColorPalette, ToggleControl } from '@wordpress/components'
import './editor.scss'

const icons = {
	expand: ['plus', 'insert', 'arrow-down', 'arrow-down-alt', 'arrow-down-alt2'],
	collapse: ['minus', 'remove', 'arrow-up', 'arrow-up-alt', 'arrow-up-alt2']
}

export default function Edit( { className, attributes, setAttributes } ) {

	const [ expanded, setToggle ] = useState( attributes.initialState );

	const tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

	return (
		<>
			<InspectorControls>
				<ToggleControl
					label="Initial state"
					help={attributes.initialState ? 'Expanded' : 'Collapsed'}
					checked={attributes.initialState}
					onChange={() => setAttributes({initialState: !attributes.initialState})}
				/>

				<PanelBody title="Titletag" initialOpen={ false }>
					<ButtonGroup mode="radio" onClick={event => setAttributes({ titleTag: event.target.value })}>
						{tags.map((tag, index) => <Button 
							key={index}
							checked={attributes.titleTag}
							value={tag}
						>{tag.toUpperCase()}</Button>)}
					</ButtonGroup>

					<ColorPalette onChange={titleColor => setAttributes({titleColor})} />

					<ColorPalette onChange={backgroundColor => setAttributes({backgroundColor})} />
				</PanelBody>
			</InspectorControls>
			
			<Dashicon icon="arrow-down-alt2" onClick={() => setToggle(!expanded)} />
			<RichText 
				className="noor-block-accordion__title"
				style={{color: attributes.titleColor, backgroundColor: attributes.backgroundColor}}
				tagName={attributes.titleTag}
				value={attributes.titleContent}
				allowedFormats={['bold', 'italic', 'align']}
				onChange={titleContent => setAttributes({titleContent})}
			/>
			<div className="noor-block-accordion__content" area-expanded={`${expanded}`}>
				<InnerBlocks 
					allowedBlocks={['core/paragraph', 'core/list']}
					template={[['core/paragraph', {}]]}
				/>
			</div>
		</>
	);
}
