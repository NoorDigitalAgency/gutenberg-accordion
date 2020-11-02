const inlineIconAttributes = {
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
}

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
      ...inlineIconAttributes
    });
  }

  // wp-bootstrap-blocks plugin
  if ( 'wp-bootstrap-blocks' === name ) {

    Object.assign(settings.attributes, {
      ...inlineIconAttributes,
      backgroundColor: {
        type: 'string'
      },
      color: {
        type: 'string'
      }
    })
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