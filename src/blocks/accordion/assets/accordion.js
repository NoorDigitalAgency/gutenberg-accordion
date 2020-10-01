import { domLoaded } from '../../../components/helpers'

function Accordions( init ) {

  let accordions;

  Object.assign( this, init);
  console.log(this.accordions)
}

domLoaded(status => {
  
  const accordions = document.querySelectorAll('.noor-block-accordion');
  console.log(accordions)
 // new Accordions({ accordions });
})