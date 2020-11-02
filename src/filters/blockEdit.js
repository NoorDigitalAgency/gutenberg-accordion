import { __ } from '@wordpress/i18n'
import { createHigherOrderComponent } from '@wordpress/compose'
import { Fragment } from '@wordpress/element'
import { withColors, InspectorControls } from '@wordpress/block-editor'
import { compose } from '@wordpress/compose'

import { 
  SmallScreenControl,
  ColumnBackgrounControl,
  ButtonIconControl
} from '../components/controls'

export const blockEdit = compose(
  withColors({ backgroundColor: 'background-color' }),
  createHigherOrderComponent( BlockEdit => props => {
  
  if ( ! props.name.includes( 'noor' ) ) {
    console.log(props)
    return (
      <Fragment>
        <BlockEdit {...props} />
        <InspectorControls>
          <SmallScreenControl {...props} />
          {props.name === 'core/column' && <ColumnBackgrounControl {...props} />}
          {props.name === 'core/button' && <ButtonIconControl {...props} />}
        </InspectorControls>
      </Fragment>
    )
  }

  return <BlockEdit {...props} />
}, 'blockEdit'));