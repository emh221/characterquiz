$(document).ready(function(){
  $("form#quiz").submit(function(){
    event.preventDefault();
    var loyal = parseInt($("input:radio[name=loyal]:checked").val());
    var handsome = parseInt($("input:radio[name=handsome]:checked").val());
    var generous = parseInt($("input:radio[name=generous]:checked").val());
    var result = "you have to answer the questions first!"


    if (loyal === 4 && handsome === 4 && generous === 4) {
      var result = "Legolas."
    } else if (loyal === 4 && handsome === 3 && generous === 4) {
      var result = "Aragon."
    } else if (loyal === 4 && handsome === 2 && generous === 4) {
      var result = "Sam Gamgee."
    } else if (loyal === 4 && handsome === 2 && generous === 4) {
      var result = "Sam Gamgee."
    } else if (loyal === 4 && handsome === 1 && generous === 4) {
      var result = "Gimli."
    } else if (loyal === 3 && handsome === 4 && generous < 4) {
      var result = "Elven Royalty."
    } else if (loyal === 4 && handsome === 1 && generous < 4) {
      var result = "Tree People."
    } else if (loyal === 1 && handsome === 1 && generous === 1) {
      var result = "Gollum."
    } else if (loyal < 4 && handsome < 4 && generous < 4) {
      var result = "an Orc."
    }


    $("#name").text(result);
    $("#output").show();

  });
});
