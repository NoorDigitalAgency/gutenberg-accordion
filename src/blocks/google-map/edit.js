import { __ } from '@wordpress/i18n'
import { Fragment } from '@wordpress/element'
import { InspectorControls } from '@wordpress/block-editor'
import { RangeControl, PanelBody, __experimentalInputControl as InputControl } from '@wordpress/components'

export default function Edit ( props ) {

  const googleAPIKey = options.map_secret_key

  const { attributes, setAttributes } = props;

  const { width, height, zoom, street, zip, city, country, src } = attributes;

  const buildUri = ( address, zoom ) => {

    const parts = {
      base: 'https://www.google.com/maps/embed/v1/place?key=',
      key: googleAPIKey,
      address: encodeURI( address.join( ' ' ) ),
      zoom: zoom
    }

    const src = `${parts.base + parts.key}&q=${parts.address}&zoom=${zoom}`;
    
    setAttributes({ src });

    return src;
  }

  return (
    <Fragment>
      <InspectorControls>
        <PanelBody title={__( 'Map Controls' )} initialOpen={true}>
          <RangeControl 
            label={__( 'Frame Width' )}
            value={width}
            onChange={ width => setAttributes({ width })}
            min={0}
            max={100}
          />
          <RangeControl 
            label={__( 'Frame Height' )}
            value={height}
            onChange={ height => setAttributes({ height })}
            min={0}
            max={100}
          />
          <RangeControl 
            label={__( 'Frame Zoom' )}
            value={zoom}
            onChange={ zoom => setAttributes({ zoom })}
            min={0}
            max={100}
          />
        </PanelBody>

        <PanelBody title={__( 'Map Location' )} initialOpen={true}>
          <label className="block-base-control__label"><strong>{__('Street Address')}</strong></label>
          <InputControl 
            value={street}
            onChange={street => setAttributes({ street })}
          />
          <label className="block-base-control__label"><strong>{__('Postal Code/Zip')}</strong></label>
          <InputControl 
            value={zip}
            onChange={zip => setAttributes({ zip })}
          />
          <label className="block-base-control__label"><strong>{__('City')}</strong></label>
          <InputControl 
            value={city}
            onChange={city => setAttributes({ city })}
          />
          <label className="block-base-control__label"><strong>{__('Country')}</strong></label>
          <InputControl 
            value={country}
            onChange={country => setAttributes({ country })}
          />
        </PanelBody>
      </InspectorControls>

      <div>
        {googleAPIKey != '' 
          ? <iframe width={width} height={height} frameBorder="0" src={buildUri([street, zip, city, country], zoom)} allowFullScreen></iframe>
          : <p>{__( 'Please provide google API key in settings' )}</p>
        }
      </div>
    </Fragment>
  )
}