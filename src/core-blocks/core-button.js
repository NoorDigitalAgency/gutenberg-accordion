import { __ } from '@wordpress/i18n'
import { createHigherOrderComponent } from '@wordpress/compose'
import { Fragment } from '@wordpress/element'
import { InspectorControls } from '@wordpress/block-editor'
import { PanelBody, ToggleControl } from '@wordpress/components'
import { RadioGroup } from '../components/radio-group'

const iconControlOptions = [
  'arrow-right-alt',
  'arrow-left-alt',
  'arrow-right-alt2',
  'arrow-left-alt2',
  'clock'
];

export const addInlineIconAttribute = ( settings, name ) => {

  if ( 'core/button' !==  name ) {

      return settings;
  }

  Object.assign(settings.attributes, {
      useIcon: {
        type: 'boolean',
        default: true
      },
      alignIcon: {
        type: 'boolean',
        default: false
      },
      icon: {
          type: 'string',
          default: 'arrow-right-alt'
      }
  });

  return settings;
};

export const withIcon = createHigherOrderComponent( BlockEdit => props => {
        
  if ( 'core/button' !==  props.name ) {
            
    return ( <BlockEdit { ...props } /> );
  }

  const {attributes, setAttributes} = props;

  const {useIcon, alignIcon, icon} = props.attributes;
  
  const setIconClassList = () => {

    const align = alignIcon ? 'has-left-icon' : 'has-right-icon';

    const iconName = useIcon && icon !== '' ? `has-icon-${icon}` : undefined;

    const className = align + ' ' + iconName;

    setAttributes({ className });
  }
  
  const setUseIcon = useIcon => {

    setAttributes({ useIcon });

    if ( ! useIcon ) {

      setIcon( '' );
    }
  }

  const setIcon = (value, event) => {

    if ( event ) {

      event.preventDefault();
    }

    setAttributes({ icon: value });

    setIconClassList();
  }

  setIcon( icon );
  
  return (
    <Fragment>  
      <BlockEdit { ...props } />

      <InspectorControls>
        <PanelBody
          title={ __( 'Inline Icon Control' ) }
          initialOpen={ true }
        > 
          <ToggleControl
            label={__('Use inline icon')}
            checked={useIcon}
            onChange={setUseIcon}
          />

          <ToggleControl 
            label={alignIcon ? __('Icon before') : __('Icon after')}
            checked={alignIcon}
            onChange={() => setAttributes({ alignIcon: ! alignIcon })}
          />

          {useIcon && <RadioGroup
            label={__('Inline Icon')} 
            onClick={(event) => {
              event.preventDefault();
              setAttributes({ icon: event.currentTarget.value, event });
            }}
						options={iconControlOptions} 
						initialChecked={props.attributes.icon} 
						showIcons={true} 
          />}
        </PanelBody>
      </InspectorControls>
    </Fragment>
  );
}, 'withIcon' );
