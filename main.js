$(document).ready(function(){
  var dropdown = document.getElementById("languages");
  var selected_lan = dropdown.options[dropdown.selectedIndex].text;
  var appending = "";
  if (selected_lan == English){
    appending = en;
  } else if (selected_lan == French){
    appending = fr;
  } else if (selected_lan == Spanish){
    appending = sp;
  }
  document.getElementById("languagedisplay").innerHTML = appending;
  var name = appending + ".txt";
  $('#description').load(name);
});
