$(document).ready(function(){
 // Cache the Window object
 $window = $(window);
// Cache the Y offset and the speed
$('[data-type]').each(function() {
  $(this).data('offsetY', parseInt($(this).attr('data-offsetY')));
  $(this).data('speed', $(this).attr('data-speed'));
});
// For each element that has a data-type attribute
 $('section[data-type="background"]').each(function(){
  // Store some variables based on where we are
  $(this).data('speed', parseInt($(this).attr('data-speed')));
   var $self = $(this),
   offsetCoords = $self.offset(),
   topOffset = offsetCoords.top;
   $(window).scroll(function(){
    // The magic will happen in here!
   }); // window scroll
 });	// each data-type
}); // document ready