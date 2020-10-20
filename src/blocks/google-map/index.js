import { __ } from '@wordpress/i18n'
import Edit from "./edit";

export const name = 'google-map';

export const settings = {
  title: __( 'Google map', 'noorblocks' ),
  description: __( 'Embeds an google maps iframe', 'noorblocks' ),
  category: 'noor-collection',
  icon: 'location-alt',
  supports: {
    html: false,
    align: true
  },
  attributes: {
    zoom: {
      type: 'number',
      default: 20
    },
    width: {
      type: 'number',
      default: 361
    },
    height: {
      type: 'number',
      default: 160
    },
    street: {
      type: 'string'
    },
    zip: {
      type: 'string'
    },
    city: {
      type: 'string'
    },
    country: {
      type: 'string',
      default: 'sweden'
    },
    src: {
      type: 'string'
    }
  },
  edit: Edit,
  save: ( props ) => {
    
    const {width, height, src } = props.attributes;

    return (
      <div>
        <iframe width={width} height={height} frameBorder="0" src={src} allowFullScreen></iframe>
      </div>
    )
  }
}