var acc = document.getElementsByClassName("something") 
var i;

for(i = 0; i < acc.length; i++){
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.parentElement.classList.toggle("active");
    
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
// this code below is a reminent of a idea that didn't get finished before deadline 
const audio = new Audio();
audio.src = "00323_streaming.wav"
