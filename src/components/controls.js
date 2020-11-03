import { __ } from '@wordpress/i18n'
import { PanelBody, ToggleControl } from '@wordpress/components'
import { PanelColorSettings } from '@wordpress/block-editor'
import { RadioGroup } from '../components/radio-group'
import { Fragment, useState } from '@wordpress/element'

export const SmallScreenControl = ({ setAttributes, attributes: { mediaControl }}) => (
  <PanelBody
    title={ __( 'Mobile View Control' ) }
    initialOpen={ true }
  > 
    <ToggleControl
      label={__(`${mediaControl ? 'Display' : 'Hide'} on mobile`)}
      checked={mediaControl}
      onChange={mediaControl => setAttributes({ mediaControl })}
    />
  </PanelBody>);

export const ColumnBackgrounControl = ({ backgroundColor, setBackgroundColor, setAttributes }) => {

  setAttributes({ className: backgroundColor.class != undefined ? backgroundColor.class + ' has-background' : '' });

  return (
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
  );
}

export const ButtonIconControl = ({ attributes, setAttributes }) => {

  const iconControlOptions = [
    'arrow-right-alt',
    'arrow-left-alt',
    'arrow-right-alt2',
    'arrow-left-alt2',
    'clock',
    'location'
  ];

  const { className } = attributes;

  const classList = [...className.split( ' ' )];

  const hasAlign = boolean => boolean ? 'right' : 'left';

  const [useIcon, setUse] = useState(
    classList.some(name => name.includes('icon' ) )
  );

  const [icon, setIcon] = useState(
    iconControlOptions.filter( icon => classList.includes( `has-icon-${icon}` )).join('')
  );

  const [alignIcon, setAlign] = useState(
    hasAlign( classList.some(name => name.includes('has-right-icon') ) )
  )

  const classes = () => classList.map(name => {

    return name === 'has-right-icon' || name === 'has-left-icon'
      ? `has-${alignIcon}-icon`
      : name.includes( 'has-icon-' )
        ? `has-icon-${icon}`
        : name;
  }).join( ' ' );

  setAttributes({ className: classes() });

  return (
    <PanelBody
      title={ __( 'Inline Icon Control' ) }
      initialOpen={ true }
    > 
      
      <ToggleControl 
        label={ __( `Icon to ${alignIcon}`) }
        checked={alignIcon === 'right' ? true : false}
        onChange={() => {
          setAlign( hasAlign( alignIcon !== 'right' ) )
          // setAttributes({ className: classes() });
        }}
      />

      <RadioGroup
        label={__('Inline Icon')} 
        onClick={event => {
          event.preventDefault();
          setIcon( event.currentTarget.value )
          // setAttributes({ className: classes() });
        }}
        options={iconControlOptions} 
        initialChecked={icon} 
        showIcons={true} 
      />
    </PanelBody>
  );
}
