import { domLoaded, toggle } from '../../../components/helpers'

const animate = args => {

  const { start, element, maxheight, duration, state } = args;

  const runtime = new Date().getTime() - start,
        progress = runtime / duration,
        currHeight = state 
          ? maxheight - (maxheight * Math.min( progress, 1))
          : (maxheight * Math.min( progress, 1 ));

  element.style.height = `${currHeight.toFixed(2)}px`;

  if ( runtime < duration ) {

    requestAnimationFrame( () => animate( args ) );
  }
}

function requestAnimation () {

  const duration = 250,
        start = new Date().getTime(),
        element = this.nextElementSibling,
        maxheight = element.scrollHeight,
        state = maxheight === element.offsetHeight;

  this.querySelectorAll('.dashicons').forEach(icon => toggle( icon, 'data-state', ['false', 'true'] ) );

  return requestAnimationFrame(() => animate( { start, element, maxheight, duration, state } ));
}

domLoaded( () => {
  
  const accordions = document.querySelectorAll('.noor-block-accordion');
  
  [...accordions].forEach( accordion => accordion.addEventListener( 'click', requestAnimation, true ) );
})