$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    const hobbyAnswer = parseInt($("input:radio[name=hobby]:checked").val());
    const feelingsAnswer = parseInt($("input:radio[name=feelings]:checked").val());
    const jobAnswer = parseInt($("input:radio[name=job]:checked").val());
    const creatureAnswer = parseInt($("input:radio[name=creature]:checked").val());
    const fearAnswer = parseInt($("input:radio[name=fear]:checked").val());
    const answerTotal = hobbyAnswer + feelingsAnswer + jobAnswer + creatureAnswer + fearAnswer

    console.log("hobby: " + hobbyAnswer);
    console.log("feeling: " + feelingsAnswer);
    console.log("job: " + jobAnswer);
    console.log("creature: " + creatureAnswer);
    console.log("fear: " + fearAnswer);
    console.log("answer total: " + answerTotal);

    if(answerTotal <= 5) {
      $("#chihiro").show().siblings().hide();
    } else if(answerTotal > 5 && answerTotal <= 10) {
      $("#haku").show().sibling().hide();
    } else if(answerTotal > 10 && answerTotal <= 15) {
      $("#yubaba").show().siblings().hide();
    } else if(answerTotal > 15 && answerTotal <= 20) {
      $("#noface").show().siblings().hide();
    } else {
      $("#error").show().siblings().hide()
    }

    event.preventDefault();
  });
});