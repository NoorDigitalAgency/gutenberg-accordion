import { __ } from '@wordpress/i18n'
import { createHigherOrderComponent } from '@wordpress/compose'
import { Fragment } from '@wordpress/element'
import { withColors, InspectorControls, PanelColorSettings } from '@wordpress/block-editor'
import { compose } from '@wordpress/compose'
import { PanelBody, ToggleControl } from '@wordpress/components'
import { RadioGroup } from '../components/radio-group'
import { SmallScreenControl } from '../components/controls'

const iconControlOptions = [
  'arrow-right-alt',
  'arrow-left-alt',
  'arrow-right-alt2',
  'arrow-left-alt2',
  'clock',
  'location'
];

export const blockEdit = compose(
  withColors({ backgroundColor: 'background-color' }),
  createHigherOrderComponent( BlockEdit => props => {

  if ( ! props.name.includes( 'noor' ) ) {
    
    return (
      <Fragment>
        <BlockEdit {...props} />
        <InspectorControls>
          <SmallScreenControl {...props} />
        </InspectorControls>
      </Fragment>
    )
  }

  if ( props.name === 'core/column' ) {

    const {backgroundColor, setBackgroundColor} = props;

    props.setAttributes({ className: backgroundColor.class != undefined ? backgroundColor.class + ' has-background' : '' });

    return (
      <Fragment>
        <BlockEdit {...props} />
        <InspectorControls>
          <PanelColorSettings
            title={__('Color settings')}
            initialOpen={false}
            colorSettings={[
              {
                value: backgroundColor.color,
                onChange: setBackgroundColor,
                label: __('Column background color')
              }
            ]}
          />
        </InspectorControls>
      </Fragment>
    );
  }

  if ( props.name === 'core/button' ) {

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
  }

  return <BlockEdit {...props} />
}, 'blockEdit'));