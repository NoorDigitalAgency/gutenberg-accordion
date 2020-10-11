import { createHigherOrderComponent } from '@wordpress/compose'
import { InspectorControls } from '@wordpress/block-editor'
import { PanelBody  } from '@wordpress/components'
import { addFilter } from '@wordpress/hooks'

const { __ } = wp.i18n;

// Enable spacing control on the following blocks
const allowIconsOnBlocks = [
    'core/button',
];

// Available spacing control options
const iconControlOptions = [
    '',
    'arrow-right-alt',
    'arrow-right-alt2'
];

/**
 * Add spacing control attribute to block.
 *
 * @param {object} settings Current block settings.
 * @param {string} name Name of block.
 *
 * @returns {object} Modified block settings.
 */
const addSpacingControlAttribute = ( settings, name ) => {
    // Do nothing if it's another block than our defined ones.
    if ( ! allowIconsOnBlocks.includes( name ) ) {
        return settings;
    }

    // Use Lodash's assign to gracefully handle if attributes are undefined
    Object.assign(settings.attributes, {
        spacing: {
            type: 'string',
            default: iconControlOptions[ 0 ],
        }
    });

    return settings;
};

addFilter( 'blocks.registerBlockType', 'extend-block-example/attribute/spacing', addSpacingControlAttribute );


/**
 * Create HOC to add spacing control to inspector controls of block.
 */
const withSpacingControl = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {
        // Do nothing if it's another block than our defined ones.
        if ( ! allowIconsOnBlocks.includes( props.name ) ) {
            return (
                <BlockEdit { ...props } />
            );
        }

        const { spacing } = props.attributes;

        // add has-spacing-xy class to block
        if ( spacing ) {
            props.attributes.className = `has-spacing-${ spacing }`;
        }

        return (
            <>
                <BlockEdit { ...props } />
                <InspectorControls>
                    <PanelBody
                        title={ __( 'My Spacing Control' ) }
                        initialOpen={ true }
                    >
                        <SelectControl
                            label={ __( 'Spacing' ) }
                            value={ spacing }
                            options={ iconControlOptions }
                            onChange={ ( selectedSpacingOption ) => {
                                props.setAttributes( {
                                    spacing: selectedSpacingOption,
                                } );
                            } }
                        />
                    </PanelBody>
                </InspectorControls>
            </>
        );
    };
}, 'withSpacingControl' );

addFilter( 'editor.BlockEdit', 'extend-block-example/with-spacing-control', withSpacingControl );

/**
 * Add margin style attribute to save element of block.
 *
 * @param {object} saveElementProps Props of save element.
 * @param {Object} blockType Block type information.
 * @param {Object} attributes Attributes of block.
 *
 * @returns {object} Modified props of save element.
 */
const addSpacingExtraProps = ( saveElementProps, blockType, attributes ) => {
  // Do nothing if it's another block than our defined ones.
  if ( ! allowIconsOnBlocks.includes( blockType.name ) ) {
      return saveElementProps;
  }

  const margins = {
      small: '5px',
      medium: '15px',
      large: '30px',
  };

  if ( attributes.spacing in margins ) {
      // Use Lodash's assign to gracefully handle if attributes are undefined
      assign( saveElementProps, { style: { 'margin-bottom': margins[ attributes.spacing ] } } );
  }

  return saveElementProps;
};

addFilter( 'blocks.getSaveContent.extraProps', 'extend-block-example/get-save-content/extra-props', addSpacingExtraProps );