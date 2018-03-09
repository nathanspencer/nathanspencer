$('.navbar-collapse a:not(.dropdown-toggle)').click(function(){
    $(this).parents('.navbar-collapse').collapse('hide');
});
