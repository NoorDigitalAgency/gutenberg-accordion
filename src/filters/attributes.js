export const attributes = (settings, name) => {
  
  Object.assign(settings.attributes, {
    mediaControl: {
      type: 'boolean',
      default: true
    }
  });

  if ( 'core/column' === name ) {

    Object.assign(settings.attributes, {
      backgroundColor: {
        type: 'string',
      }
    })
  }

  return settings;
}