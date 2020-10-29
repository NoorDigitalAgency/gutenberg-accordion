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

  // if ( props.name === 'core/column' ) {

  //   return (
  //     <Fragment>
  //       <BlockEdit {...props} />
  //       <InspectorControls>
  //         <ColumnBackgrounControl {...props} />
  //       </InspectorControls>
  //     </Fragment>
  //   );
  // }

  // if ( props.name === 'core/button' ) {
    
  //   return (
  //     <Fragment>  
  //       <BlockEdit { ...props } />

  //       <InspectorControls>
  //         <ButtonIconControl {...props} />
  //       </InspectorControls>
  //     </Fragment>
  //   );
  // }

  return <BlockEdit {...props} />
}, 'blockEdit'));