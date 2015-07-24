function enterPage() {
  $("#logo").fadeOut(700);
  $("#main-container").fadeIn(800);
  window.history.pushState(null, null, "/home");
}

function showContent(id, obj) {
  $(".active").removeClass("active");
  $(obj).addClass("active");
  $("#info-text").hide();
  $.ajax({
    "type": "POST",
    "url" : "/show_item",
    "data": {"id" : id}
  }).done(function(item){
    $("#info-text").text(item.contentTextEN).fadeIn();;
  });
}
