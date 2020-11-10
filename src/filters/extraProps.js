export const extraProps = ( props, blockType, attributes ) => {

  if ( ! attributes.mediaControl ) {

    props.className = props.className + ' on-media-hide';
  }

  return props;
}