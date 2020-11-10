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
      label={__(`${mediaControl ? 'Visible' : 'Hidden'} on mobile`)}
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

  let classList = className != undefined 
    ? [...className.split( ' ' )] 
    : [ `has-icon-${iconControlOptions[0]}`, 'has-right-icon'];

  const hasAlign = boolean => boolean ? 'right' : 'left';

  const [useIcon, setUse] = useState(
    classList.some(name => name.includes('icon' ) )
  );

  const [alignIcon, setAlign] = useState(
    hasAlign( classList.some(name => name.includes('has-right-icon') ) )
  );
  
  const [icon, setIcon] = useState(
    iconControlOptions.filter( icon => classList.includes( `has-icon-${icon}` )).join('')
  );

  const classes = () => classList.map(name => {

    return name === 'has-right-icon' || name === 'has-left-icon'
      ? `has-${alignIcon}-icon`
      : name.includes( 'has-icon-' )
        ? `has-icon-${icon}`
        : name;
  }).join( ' ' );

  setAttributes({ className: useIcon ? classes() : undefined });

  return (
    <PanelBody
      title={ __( 'Inline Icon Control' ) }
      initialOpen={ true }
    > 
      <ToggleControl
        label={__('Use inline icon')}
        checked={useIcon}
        onChange={() => setUse( ! useIcon )}
      />

      {useIcon &&
        <Fragment>
          <ToggleControl 
            label={ __( `Icon to ${alignIcon}`) }
            checked={alignIcon === 'right' ? true : false}
            onChange={() => setAlign( hasAlign( alignIcon !== 'right' ) )}
          />

          <RadioGroup
            label={__('Inline Icon')} 
            onClick={event => {
              event.preventDefault();
              setIcon( event.currentTarget.value )
            }}
            options={iconControlOptions} 
            initialChecked={icon} 
            showIcons={true} 
          />
        </Fragment>
      }
    </PanelBody>
  );
}
