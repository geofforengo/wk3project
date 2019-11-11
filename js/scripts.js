//Business Logic
function beepBoop(number) {
    var output = [];
    for (i=0; i<= number; i++) {
      output.push(i);
    console.log(i);
    console.log(output);
  }
  if (i===3 ) {
    let i = ("I'm sorry Dave, I can't do that.");
  }
  else if (i===2) {
    let i = "Boop";
  }
  else if (i===1) {
    let i = "Beep";
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
