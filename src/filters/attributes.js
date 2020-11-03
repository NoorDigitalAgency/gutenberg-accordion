export const attributes = (settings, name) => {

  if ( ! name.includes( 'noor' ) ) {
  
    Object.assign(settings.attributes, {
      mediaControl: {
        type: 'boolean',
        default: true
      }
    });
  }

  if ( 'core/column' === name ) {

    Object.assign(settings.attributes, {
      backgroundColor: {
        type: 'string',
      }
    })
  }

  return settings;
}