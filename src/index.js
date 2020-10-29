import { registerBlockType } from '@wordpress/blocks'

import * as accordion from './blocks/accordion/index'

import * as bulletPoint from './blocks/bulletpoint/index'

import * as googleMap from './blocks/google-map/index'

import { addFilter } from '@wordpress/hooks'

import { __ } from '@wordpress/i18n'
import { createHigherOrderComponent } from '@wordpress/compose'
import { Fragment } from '@wordpress/element'
import { InspectorControls } from '@wordpress/block-editor'
import { PanelBody, ToggleControl } from '@wordpress/components'

import { 
  addInlineIconAttribute,
  withIcon
} from './core-blocks/core-button'

import { 
  addBackgroundColor,
  withBackgroundColor,
} from './core-blocks/core-column'

const prefix = 'noor/';

const registerBlock = block => {

	const {name, settings} = block;
	
	registerBlockType( prefix + name, settings );
}

const registerNoorBlocks = () => [
	accordion,
  bulletPoint,
  googleMap
].forEach( block => registerBlock( block ) );

registerNoorBlocks();

const mediaQueryControl = (settings, name) => {

  if ( ! name.includes( 'noor' ) ) {
  
    Object.assign(settings.attributes, {
      mediaControl: {
        type: 'boolean',
        default: true
      }
    });
  }

  return settings;
}

const mediaControl = createHigherOrderComponent( BlockEdit => props => {

  if ( ! props.name.includes( 'noor' ) ) {

    return (
      <Fragment>
        <BlockEdit {...props} />
  
        <InspectorControls>
          <PanelBody
            title={ __( 'Mobile View Control' ) }
            initialOpen={ true }
          > 
            <ToggleControl
              label={__(`${props.attributes.mediaControl ? 'Display' : 'Hide'} on mobile`)}
              checked={props.attributes.mediaControl}
              onChange={mediaControl => props.setAttributes({ mediaControl })}
            />
          </PanelBody>
        </InspectorControls>
      </Fragment>
    );
  }

  return <BlockEdit {...props} />
}, 'mediaControl');

const mediaExtraProps = ( props, blockType, attributes ) => {

  if ( ! attributes.mediaControl && ! blockType.name.includes('noor') ) {

    props.className = props.className + ' on-media-hide';
  }

  return props;
}

// MEDIA DISPLAY SWITCH
addFilter(
  'blocks.registerBlockType',
  'noor/gutenberg-blocks/custom-attributes',
  mediaQueryControl
);

addFilter( 
  'editor.BlockEdit', 
  'noor/gutenberg-blocks/custom-control', 
  mediaControl 
);

addFilter(
  'blocks.getSaveContent.extraProps',
  'noor/gutenberg-blocks/extraProps',
  mediaExtraProps
);

// CORE/BUTTON
addFilter( 
  'blocks.registerBlockType', 
  'noor/gutenberg-blocks/custom-attributes', 
  addInlineIconAttribute 
);

addFilter( 
  'editor.BlockEdit', 
  'noor/gutenberg-blocks/custom-control', 
  withIcon 
);

// CORE/COLUMN
addFilter( 
  'blocks.registerBlockType', 
  'noor/gutenberg-blocks/custom-attributes', 
  addBackgroundColor 
);

addFilter( 
  'editor.BlockEdit', 
  'noor/gutenberg-blocks/custom-control', 
  withBackgroundColor
);