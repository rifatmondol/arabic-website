$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
  if (!$(this).next().hasClass('show')) {
    $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
  }
  var $subMenu = $(this).next('.dropdown-menu');
  $subMenu.toggleClass('show');


  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
    $('.dropdown-submenu .show').removeClass('show');
  });

  return false;
});




// Icon rotation
$('.dropdown-submenu .dropdown-item').click(function(){
  $(this).toggleClass('disp',function(){
    $('.dropdown-submenu .dropdown-item.disp').click(function(){
      $(this).removeClass('disp');
    });
  });
  
});
