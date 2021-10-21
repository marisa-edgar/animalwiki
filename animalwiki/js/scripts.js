$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const animal = parseInt($("#animal").val());

    if (animal = 1) {
      $(".sloth").show();
    } else if (animal = 2) {
      $(".hedgehog").show();
    } else if (animal = 3) {
      $(".squirrel").show();
    } else {
      alert("please pick an animal");
    }
  });
});