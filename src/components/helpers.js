export function domLoaded( callback ) {
  if ( document.readyState === 'complete' ) {

    callback(document.readyState === 'complete');
  } else {

    window.addEventListener( 'DOMContentLoaded', callback(true));
  }
}