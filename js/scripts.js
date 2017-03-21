$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#cat-says").after("<li>meow!</li>");
    $("ul#dog-says").prepend("<li>you are so annoying</li>")
  });

  $("button#bark").click(function() {
    $("ul#dog-says").prepend("<li>bark</li>");
    $("ul#cat-says").prepend("<li>you too!</li>");
  });
  $("button#cat-img").click(function(){
    $("#img1").show();
  });
    $("button#dog-img").click(function(){
      $("#img2").show();
  });
});
