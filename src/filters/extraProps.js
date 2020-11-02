export const extraProps = ( props, blockType, attributes ) => {

  if ( ! attributes.mediaControl && ! blockType.name.includes('noor') ) {

    props.className = props.className + ' on-media-hide';
  }

  return props;
}