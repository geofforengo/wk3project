//Business Logic
function beepBoop(number) {
    var outputs = [];
    for (i=0; i<= number; i++) {
      outputs.push(i);
    console.log(i);
    console.log(outputs);
  }
  outputs.forEach(function(output) {
  if (i===3 ) {
    outputs.push("I'm sorry Dave, I can't do that.");

  }
  else if (i===2) {
    outputs.push("Boop");

  }
  else if (i===1) {
    outputs.push("Beep");

  }
  return outputs;

})
};








//User Interface Logic
$(document).ready(function() {
  $("form#beepboop").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = beepBoop(number);
    $("#output").text(result);
  });
});
