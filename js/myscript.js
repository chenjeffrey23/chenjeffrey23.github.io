function main() {
  $('#accomplishments').hide();
  $('#accomplishmentsbutton').on('click',function(){
  $(this).next().slideToggle(350);
  $(this).toggleClass('aactive');
  });
}

$(document).ready(main);