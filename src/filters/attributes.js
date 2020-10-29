export const attributes = (settings, name) => {

  if ( ! name.includes( 'noor' ) ) {
  
    Object.assign(settings.attributes, {
      mediaControl: {
        type: 'boolean',
        default: true
      }
    });
  }

  if ( 'core/button' === name ) {

    Object.assign(settings.attributes, {
      useIcon: {
        type: 'boolean',
        default: true
      },
      alignIcon: {
        type: 'boolean',
        default: false
      },
      icon: {
          type: 'string',
          default: 'arrow-right-alt'
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