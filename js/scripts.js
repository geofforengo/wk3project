//Business Logic









//User Interface Logic
$(document).ready(function() {
  $("form#beepboop").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var output = beepBoop(number);
    $("#output").text(output);
  });
});
