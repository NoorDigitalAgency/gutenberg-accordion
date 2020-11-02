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
<<<<<<< HEAD
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
=======
      ...inlineIconAttributes
>>>>>>> a47aee9a909a9db0d84cb1bf537e08b971c8f5aa
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