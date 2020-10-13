import { __ } from '@wordpress/i18n';
import { MediaUpload, MediaUploadCheck, InspectorControls, BlockControls, BlockAlignmentToolbar, PanelColorSettings } from '@wordpress/block-editor'
import { PanelBody, Button, ResponsiveWrapper, __experimentalInputControl as InputControl, ToggleControl } from '@wordpress/components'
import { Fragment } from '@wordpress/element'

export default function Edit( props ) {

  const {color, setColor, backgroundColor, setBackgroundColor, attributes, setAttributes, className} = props;

  const { align, mediaId } = attributes;

  const colorClass = color != undefined ? color.class : '';

  const backgroundColorClass = backgroundColor != undefined ? backgroundColor.class : '';

  const removeMedia = () => {
		props.setAttributes({
			mediaId: 0,
			mediaUrl: ''
		});
	}
 
 	const onSelectMedia = (media) => {
		props.setAttributes({
			mediaId: media.id,
			mediaUrl: media.url
		});
	}
 
	const blockStyle = {
		backgroundImage: attributes.mediaUrl != '' ? 'url("' + attributes.mediaUrl + '")' : 'none'
	};
  
  return (
    <Fragment>

      <InspectorControls>
        <PanelBody title={__( 'Content settings' )} initialOpen={false}>
          <ToggleControl 
            label={attributes.useMedia ? 'Set text content' : 'Set background image'}
            checked={attributes.useMedia}
            onChange={() => setAttributes({useMedia: !attributes.useMedia})}
          />
          {attributes.useMedia 
            ? <div className="editor-post-featured-image">
                <MediaUploadCheck>
                  <MediaUpload
                    onSelect={onSelectMedia}
                    value={mediaId}
                    allowedTypes={['image']}
                    render={({open}) => (
                      <Button
                        className={mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
                        onClick={open}
                      >
                        {mediaId == 0 && __( 'Choose an image' )}
                        {props.media != undefined && 
                          <ResponsiveWrapper
                            naturalWidth={ props.media.media_details.width }
                            naturalHeight={ props.media.media_details.height }
                          >
                            <img src={props.media.source_url} />
                          </ResponsiveWrapper>
                        }
                      </Button>
                    )}
                  />
                </MediaUploadCheck>
              </div>
            : <InputControl 
                value={attributes.mediaInput}
                onChange={mediaInput => setAttributes({ mediaInput })}
              />}
        </PanelBody>

        <PanelColorSettings 
          title={__( 'Colot settings' )}
          initialOpen={true}
          colorSettings={[
            {
              value: color.color,
              onChange: setColor,
              label: __( 'Text color' )
            },
            {
              value: backgroundColor.color,
              onChange: setBackgroundColor,
              label: __( 'Background color' )
            }
          ]}
        />
      </InspectorControls>
      
      <BlockControls>
        <BlockAlignmentToolbar
          value={align}
          onChange={nextAlign => {
            setAttributes({ align: nextAlign });
          }}
          controls={['left', 'right', 'center']}
        />
      </BlockControls>

      <div className={`noor-block-bullet-point has-align-${align}`}>
        <div className={`noor-block-bullet-point__point ${backgroundColorClass}`}>
          {attributes.useMedia && attributes.mediaId != 0 
            ? <img src={attributes.mediaUrl} /> 
            : <h3 class={`noor-block-bullet-point__text-content ${colorClass}`}>{attributes.mediaInput}</h3>
          }
        </div>
      </div>
    </Fragment>
  );
}