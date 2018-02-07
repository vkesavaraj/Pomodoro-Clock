// Uses jquery 

$(document).ready(function() {
  $("#breakCount").hide();
  var breakTime = parseInt($("#breakTime").html());
  var sessionTime = parseInt($("#sessionTime").html());
  var Ssec;
  var Bsec;

  $("#addBreak").click(function() {
    breakTime += 1;
    if (breakTime > 9) {
      $("#breakTime").html(breakTime);
    } else {
      $("#breakTime").html("0" + breakTime);
    }
  });
  $("#minusBreak").click(function() {
    if (breakTime > 1) {
      breakTime -= 1;
      if (breakTime > 9) {
        $("#breakTime").html(breakTime);
      } else {
        $("#breakTime").html("0" + breakTime);
      }
    }
  });
  $("#addSession").click(function() {
    sessionTime += 1;
    if (sessionTime > 9) {
      $("#sessionTime").html(sessionTime);
    } else {
      $("#sessionTime").html("0" + sessionTime);
    }
  });
  $("#minusSession").click(function() {
    if (sessionTime > 1) {
      sessionTime -= 1;
      if (sessionTime > 9) {
        $("#sessionTime").html(sessionTime);
      } else {
        $("#sessionTime").html("0" + sessionTime);
      }
    }
  });
  var sessionCount = sessionTime;
  var breakCount = breakTime;
  sessionCount *= 60;
  breakCount *= 60;
  $("#start").click(function() { 
    if (breakCount == 0) {
      buzzer.play();
      sessionCount = sessionTime * 60;
      breakCount = breakTime * 60;
    }
    var counter = setInterval(start, 1000);
    $("#start").html($("#start").html() == "START" ? "PAUSE" : "START");

    function start() {
      if ($("#start").html() == "PAUSE") {
        if (sessionCount % 60 > 9) {
          Ssec = sessionCount % 60;
        } else {
          Ssec = "0" + sessionCount % 60;
        }
        if (breakCount % 60 > 9) {
          Bsec = breakCount % 60;
        } else {
          Bsec = "0" + breakCount % 60;
        }
        if (breakCount == 0) {
          clearInterval(counter);
        } else {
          if (sessionCount > 0) {
            $("#sessionCount").show();
            $("#breakCount").hide();
            $("#bigCircle").css("box-shadow","0px 0px 10px 3px #99CC00 inset, 0px 0px 10px 1px black inset")
            sessionCount -= 1;
            if (sessionCount / 60 > 9) {
              $("#sessionCount").html(
                Math.floor(sessionCount / 60) + ":" + Ssec
              );
            } else {
              $("#sessionCount").html(
                "0" + Math.floor(sessionCount / 60) + ":" + Ssec
              );
            }
          } else if (breakCount > 0) {
            $("#sessionCount").hide();
            $("#breakCount").show();
            $("#bigCircle").css("box-shadow","0px 0px 10px 3px blue inset, 0px 0px 10px 1px black inset")
            breakCount -= 1;
            if (breakCount / 60 > 9) {
              $("#breakCount").html(Math.floor(breakCount / 60) + ":" + Bsec);
            } else {
              $("#breakCount").html("0" + Math.floor(breakCount / 60) + ":" + Bsec);
            }
          }
        }
      } else {
        if (sessionCount % 60 > 9) {
          Ssec = sessionCount % 60;
        } else {
          Ssec = "0" + sessionCount % 60;
        }
        if (breakCount % 60 > 9) {
          Bsec = breakCount % 60;
        } else {
          Bsec = "0" + breakCount % 60;
        }
        clearInterval(counter);
        if (breakCount / 60 > 9) {
          $("#breakCount").html(Math.floor(breakCount / 60) + ":" + Bsec);
        } else {
          $("#breakCount").html("0" + Math.floor(breakCount / 60) + ":" + Bsec);
        }
        if (sessionCount / 60 > 9) {
          $("#sessionCount").html(Math.floor(sessionCount / 60) + ":" + Ssec);
        } else {
          $("#sessionCount").html(
            "0" + Math.floor(sessionCount / 60) + ":" + Ssec
          );
        }
      }
    }
  });

  $("#reset").click(function() {
    $("#start").html("START");
    $("#breakCount").hide();
    $("#sessionCount").show();
    sessionCount = sessionTime * 60;
    breakCount = breakTime * 60;
    if (sessionCount % 60 > 9) {
      Ssec = sessionCount % 60;
    } else {
      Ssec = "0" + sessionCount % 60;
    }
    if (breakCount % 60 > 9) {
      Bsec = breakCount % 60;
    } else {
      Bsec = "0" + breakCount % 60;
    }
    if (breakCount / 60 > 9) {
      $("#breakCount").html(Math.floor(breakCount / 60) + ":" + Ssec);
    } else {
      $("#breakCount").html("0" + Math.floor(breakCount / 60) + ":" + Bsec);
    }
    if (sessionCount / 60 > 9) {
      $("#sessionCount").html(Math.floor(sessionCount / 60) + ":" + Ssec);
    } else {
      $("#sessionCount").html("0" + sessionCount / 60 + ":" + Bsec);
    }
  });
});
