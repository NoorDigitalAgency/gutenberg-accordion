import { domLoaded } from '../../../components/helpers'

const animate = ( isExpanded, starttime, element, maxheight, duration ) => {

  const runtime = new Date().getTime() - starttime,
        progress = runtime / duration,
        value = isExpanded 
          ? maxheight - (maxheight * Math.min( progress, 1))
          : (maxheight * Math.min( progress, 1 ));

  element.style.height = `${value.toFixed(2)}px`;

  if ( runtime < duration ) {

    requestAnimationFrame( () => animate( isExpanded, starttime, element, maxheight, duration ) );
  }
}

function toggle ( accordions ) {

  const attribute = 'aria-expanded',
        sibling = this.nextElementSibling,
        maxheight = sibling.scrollHeight,
        isExpanded = maxheight === sibling.offsetHeight;

  return requestAnimationFrame( () => animate( isExpanded, new Date().getTime(), sibling, maxheight, 300 ) );
}

domLoaded( () => {
  
  const accordions = document.querySelectorAll('.noor-block-accordion');
  
  [...accordions].forEach( accordion => accordion.addEventListener( 'click', toggle, true ) );
})