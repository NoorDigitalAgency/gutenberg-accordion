console.log('HEJ')
document.addEventListener('click', event => {

  if ( event.target.matches('.noor-block-accordion') ) {

    console.log(event.target)
  }
})
