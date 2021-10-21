$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const animal = parseInt($("#animal").val());

    if (animal === 1) {
      $(".sloth").show();
      $(".hedgehog").hide();
      $(".squirrel").hide();
    } else if (animal === 2) {
      $(".hedgehog").show();
      $(".squirrel").hide(); 
      $(".sloth").hide();
    } else if (animal === 3) {
      $(".squirrel").show();
      $(".hedgehog").hide();
      $(".sloth").hide();
    } else {
      alert("please pick an animal");
    }
  });
});