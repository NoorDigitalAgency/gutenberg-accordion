import { __ } from '@wordpress/i18n';
import { MediaUpload, MediaUploadCheck, InspectorControls, BlockControls, BlockAlignmentToolbar, PanelColorSettings } from '@wordpress/block-editor'
import { PanelBody, Button, ResponsiveWrapper  } from '@wordpress/components'
import { Fragment } from '@wordpress/element'

export default function Edit( props ) {

  const {backgroundColor, setBackgroundColor, attributes, setAttributes, className} = props;

  const { align, mediaId } = attributes;

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
        <PanelBody title={__( 'Image settings' )} initialOpen={false}>
          <div className="editor-post-featured-image">
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
        </PanelBody>
        <PanelColorSettings 
          title={__( 'Colot settings' )}
          initialOpen={true}
          colorSettings={[{
            value: backgroundColor.color,
            onChange: setBackgroundColor,
            label: __( 'Background color' )
          }]}
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
          
        </div>
      </div>
    </Fragment>
  );
}