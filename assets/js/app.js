function classToggle() {
    let navs = document.querySelectorAll('.Navbar-Items')
    
    navs.forEach(nav => nav.classList.toggle('Navbar-ToggleShow'));
  }
  document.querySelector('.Navbar-Link-toggle')
    .addEventListener('click', classToggle);



$(document).ready(function(){

  $(document).scroll(function(){
  
    var navScrool = $(this).scrollTop()
    if(navScrool > 800) {
      $(".Navbar").addClass('fixed')
      $(".logo-head-white").addClass('fixed-logo')
      $(".logo-head-blue").addClass('fixed-logo-scrol')
      $(".Button-Demo").addClass('fixed-button')

    }
  })
})
$(document).scroll(function() { 
  if($(window).scrollTop() < 800) {
    $(".Navbar").removeClass('fixed')
    $(".logo-head-white").removeClass('fixed-logo')
    $(".logo-head-blue").removeClass('fixed-logo-scrol')
    $(".Button-Demo").removeClass('fixed-button')
  }
})


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    })
})