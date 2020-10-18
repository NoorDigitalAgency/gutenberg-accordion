import { __ } from '@wordpress/i18n'
import { createHigherOrderComponent } from '@wordpress/compose'
import { Fragment } from '@wordpress/element'
import { withColors, InspectorControls, PanelColorSettings, getColorClassName } from '@wordpress/block-editor'
import { compose } from '@wordpress/compose'

export const addBackgroundColor = (settings,  name) => {
  
  if ( name != 'core/column' ) {

    return settings;
  }

  Object.assign(settings.attributes, {
    backgroundColor: {
      type: 'string',
    }
  })

  return settings;
}

export const withBackgroundColor = compose(
  withColors({ backgroundColor: 'background-color' }),
  createHigherOrderComponent( BlockEdit => props => {

  if ( props.name != 'core/column' ) {

    return <BlockEdit {...props} />
  }

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
}, 'withBackgroundColor'));
