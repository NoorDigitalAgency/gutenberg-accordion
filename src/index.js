import { registerBlockType } from '@wordpress/blocks'

import * as accordion from './blocks/accordion/index'

import * as bulletPoint from './blocks/bulletpoint/index'

import * as googleMap from './blocks/google-map/index'

import { addFilter } from '@wordpress/hooks'

import { filters } from './filters/index'

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

<<<<<<< HEAD
registerNoorBlocks();

const mediaQueryControl = (settings, name) => {

  Object.assign(settings.attributes, {
    mediaControl: {
      type: 'boolean',
      default: true
    }
  });

  return settings;
}

const mediaControl =   createHigherOrderComponent( BlockEdit => props => {

  return (
    <Fragment>
      <BlockEdit {...props} />

      <InspectorControls>
        <PanelBody
          title={ __( 'Mobile View Control' ) }
          initialOpen={ true }
        > 
          <ToggleControl
            label={__('Display on mobile')}
            checked={props.attributes.mediaControl}
            onChange={mediaControl => props.setAttributes({ mediaControl })}
          />
        </PanelBody>
      </InspectorControls>
    </Fragment>
  );
}, 'mediaControl');

const mediaExtraProps = ( props, blockType, attributes ) => {
  
  if ( ! attributes.mediaControl ) {

    props.className = props.className + ' on-media-hide';
  }

  return props;
}

// MEDIA DISPLAY SWITCH
=======
>>>>>>> 748fc5c28efc5ed9f991a9eb3463d39c40f8649f
addFilter(
  'blocks.registerBlockType',
  'noor/gutenberg-blocks/custom-attributes',
  filters.attributes
);

addFilter( 
  'editor.BlockEdit', 
  'noor/gutenberg-blocks/custom-control', 
  filters.blockEdit 
);

addFilter(
  'blocks.getSaveContent.extraProps',
  'noor/gutenberg-blocks/extraProps',
  filters.extraProps
);

registerNoorBlocks();