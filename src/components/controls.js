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

export const ButtonIconControl = props => {

  const { attributes, setAttributes } = props;

  const { alignIcon, className} = attributes;

  const classList = [ ...className.split(' ') ];

  const classes = classList.map( name => {

    
  }).join(' ');

  const iconControlOptions = [
    'arrow-right-alt',
    'arrow-left-alt',
    'arrow-right-alt2',
    'arrow-left-alt2',
    'clock',
    'location'
  ];

  const findIcon = () => iconControlOptions.filter( icon => classList.includes( `has-icon-${icon}` )).join('');

  const [useIcon, setUseIcon] = useState(className.includes( 'has-icon-' ));

  const [icon, setIcon] = useState(findIcon);

  return (
    <PanelBody
      title={ __( 'Inline Icon Control' ) }
      initialOpen={ true }
    > 
      <ToggleControl
        label={__('Use inline icon')}
        checked={useIcon}
        onChange={() => setUseIcon( ! useIcon )}
      />

      {useIcon && 
        <Fragment>
          <ToggleControl 
            label={alignIcon ? __('Icon before') : __('Icon after')}
            checked={alignIcon}
            onChange={() => setAttributes({ alignIcon: ! alignIcon })}
          />

          <RadioGroup
            label={__('Inline Icon')} 
            checked={icon}
            onClick={(event) => {
              event.preventDefault();
              setIcon(findIcon)
            }}
            options={iconControlOptions} 
            initialChecked={icon} 
            showIcons={true} 
          />
        </Fragment>}
    </PanelBody>
  );
}
