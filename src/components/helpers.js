export function domLoaded( callback ) {
  if ( document.readyState === 'complete' ) {

    callback(document.readyState === 'complete');
  } else {

    window.addEventListener( 'DOMContentLoaded', callback(true));
  }
}

export const toggle = ( el, attribute, values ) => el.setAttribute( attribute, el.getAttribute( attribute ) === values[0] ? values[1] : values[0] );