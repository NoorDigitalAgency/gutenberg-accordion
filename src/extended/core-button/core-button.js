import { __ } from '@wordpress/i18n'
import { createHigherOrderComponent } from '@wordpress/compose'
import { Fragment } from '@wordpress/element'
import { InspectorControls } from '@wordpress/block-editor'
import { PanelBody  } from '@wordpress/components'
import { RadioGroup } from '../../components/radio-group'

const iconControlOptions = [
  'arrow-right-alt',
  'arrow-left-alt',
  'arrow-right-alt2',
  'arrow-left-alt2'
];

export const addInlineIconAttribute = ( settings, name ) => {

  if ( 'core/button' !==  name ) {

      return settings;
  }

  Object.assign(settings.attributes, {
      icon: {
          type: 'string',
          default: iconControlOptions[0]
      }
  });

  return settings;
};

export const withIcon = createHigherOrderComponent( ( BlockEdit ) => ( props ) => {
        
  if ( 'core/button' !==  props.name ) {
            
    return ( <BlockEdit { ...props } /> );
  }

  const { icon } = props.attributes;

  const setIcon = event => {

    event.preventDefault();
    return props.setAttributes({icon: event.currentTarget.value})
  }

  if ( icon ) {
    
    props.attributes.className = `has-icon-${ icon }`;
  }
        
  return (
    <Fragment>  
      <InspectorControls>
        <PanelBody
          title={ __( 'Inline Icon Control' ) }
          initialOpen={ true }
        >
          <RadioGroup
            label={__('Inline Icon')} 
            onClick={setIcon}
						options={iconControlOptions} 
						initialChecked={props.attributes.icon} 
						showIcons={true} 
          />
        </PanelBody>
      </InspectorControls>
      <BlockEdit { ...props } />
    </Fragment>
  );
}, 'withIcon' );