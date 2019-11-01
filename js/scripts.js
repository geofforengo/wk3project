//Business Logic
var output = [];

function beepBoop(number) {
    for (i=0; i<= number; i++) {
      output.push(i);
    console.log(i);
    console.log(output);
  }
  if (i=1 ) {
    
  }
};








//User Interface Logic
$(document).ready(function() {
  $("form#beepboop").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var output = beepBoop(number);
    $("#output").text(output);
  });
});
