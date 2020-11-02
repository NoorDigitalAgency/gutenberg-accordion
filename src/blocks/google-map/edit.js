import { __ } from '@wordpress/i18n'
import { Fragment } from '@wordpress/element'
import { InspectorControls } from '@wordpress/block-editor'
import { RangeControl, PanelBody, __experimentalInputControl as InputControl } from '@wordpress/components'

export default function Edit ( props ) {

  const srcBase = 'https://www.google.com/maps/embed/v1/place?key=';

  const googleAPIKey = options.map_secret_key;

  const { attributes, setAttributes } = props;

  const { width, height, zoom, address } = attributes;
  
  const getaddress = Object.values(address).filter(line => line != '');
  
  const queryString = getaddress.reduce((acc, curr, i) => acc + ' ' + curr, '').trim().toLowerCase();

  const getSrc = `${srcBase + googleAPIKey}&q=${encodeURI(queryString)}&zoom=${zoom}`;

  setAttributes({ src: getSrc });

  const styles = {
    width: width + '%',
    paddingBottom: height + '%',
  };

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
            value={address.street}
            onChange={street => setAttributes({ address: { ...address, street } })}
          />
          <label className="block-base-control__label"><strong>{__('Postal Code/Zip')}</strong></label>
          <InputControl 
            value={address.zip}
            onChange={zip => setAttributes({ address: { ...address, zip } })}
          />
          <label className="block-base-control__label"><strong>{__('City')}</strong></label>
          <InputControl 
            value={address.city}
            onChange={city => setAttributes({ address: { ...address, city } })}
          />
          <label className="block-base-control__label"><strong>{__('Country')}</strong></label>
          <InputControl 
            value={address.country}
            onChange={country => setAttributes({ address: { ...address, country } })}
          />
        </PanelBody>
      </InspectorControls>

      <div className="noor-block-google-map" style={styles}>
        {
          googleAPIKey != ''
            ? <iframe width="361" height="160" src={getSrc} frameBorder="0" allowFullScreen />
            : <p>{__( 'Please provide API key in settings' )}</p>
        }
      </div>
    </Fragment>
  )
}