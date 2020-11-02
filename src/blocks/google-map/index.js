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
      default: 100
    },
    height: {
      type: 'number',
      default: 75
    },
    address: {
      type: 'object',
      default: {
        street: '',
        zip: '',
        city: '',
        country: 'sweden'
      }
    },
    src: {
      type: 'string'
    }
  },
  edit: Edit,
  save: ( props ) => {
    
    const {width, height, src } = props.attributes;

    props.className = 'noor-block-google-map';

    return (
      <div className={props.className} style={{width: `${width}%`, paddingBottom: `${height}%`}}>
        <iframe width="361" height="160" frameBorder="0" src={src} allowFullScreen></iframe>
      </div>
    )
  }
}