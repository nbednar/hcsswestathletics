window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.height = "75px";
    document.getElementById("logo").style.width = "50px";
    document.getElementById("title").style.fontSize = "30px";

  } else {
    document.getElementById("navbar").style.height = "150px";
    document.getElementById("logo").style.width = "100px";
    document.getElementById("title").style.fontSize = "60px";
  }
}