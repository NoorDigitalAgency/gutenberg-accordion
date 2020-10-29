import { __ } from '@wordpress/i18n'
import { PanelBody, ToggleControl } from '@wordpress/components'

export function SmallScreenControl ( props ) {
  return (
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
  );
}