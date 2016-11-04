function main() {
  $("#indexpic1").fancybox({
          helpers: {
              title : {
                  type : 'float'
              }
          }
      });
    $("#biopic").fancybox({
          helpers: {
              title : {
                  type : 'float'
              }
          }
      });
  $("#resumepic").fancybox({
          helpers: {
              title : {
                  type : 'float'
              }
          }
      });
  $('#accomplishments').hide();
  $('#accomplishmentsbutton').on('click',function(){
  $(this).next().slideToggle(350);
  $(this).toggleClass('aactive');
  });
}

$(document).ready(main);