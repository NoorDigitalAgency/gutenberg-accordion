import { __ } from '@wordpress/i18n'
import { PanelBody, ToggleControl } from '@wordpress/components'
import { PanelColorSettings } from '@wordpress/block-editor'
import { RadioGroup } from '../components/radio-group'

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

export const ButtonIconControl = ({ attributes: {useIcon, alignIcon, icon}, setAttributes }) => {

  const iconControlOptions = [
    'arrow-right-alt',
    'arrow-left-alt',
    'arrow-right-alt2',
    'arrow-left-alt2',
    'clock',
    'location'
  ];

  const setIconClassList = () => {

    const align = alignIcon ? 'has-left-icon' : 'has-right-icon';

    const iconName = useIcon && icon !== '' ? `has-icon-${icon}` : '';

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
        initialChecked={icon} 
        showIcons={true} 
      />}
    </PanelBody>
  );
}