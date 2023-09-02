function myFunction() {
  var x = document.getElementById("part3");
  var y = document.getElementById("part2");
  if (x.style.display === "none" && y.style.display === "inline") {
    x.style.display = "inline";
    y.style.display = "none";
    document.getElementById("show").innerHTML = "Learn Less";
  } else {
    x.style.display = "none";
    y.style.display = "inline";
    document.getElementById("show").innerHTML = "Learn More";
  }
}
function myFunctionView() {
  var x = document.getElementById("pic-1");
  var y = document.getElementById("pic-2");

  if (x.style.display == "none" && y.style.display == "none") {
    x.style.display = "inline";
    y.style.display = "inline";

    document.getElementById("viewimg").innerHTML = "View Less";
  } else {
    x.style.display = "none";
    y.style.display = "none";
    document.getElementById("viewimg").innerHTML = "View More";
  }
}



var flag = 0;
function con(x) {
  flag = flag + x;
  abc(flag);
  getdark(flag);
}

abc(flag);
getdark(flag);
function abc(num) {
  let slides = document.getElementsByClassName("slide");
  if (flag == slides.length) {
    flag = 0;
    num = 0;
  }
  if (flag < 0) {
    flag = slides.length - 1;
    num = slides.length - 1;
  }
  for (var y of slides) {
    y.style.display = "none";
  }
  slides[num].style.display = "flex";
}
function getdark(num) {
  let drk = document.getElementsByClassName("dot");
  if (flag == drk.length) {
    flag = 0;
    num = 0;
  }
  if (flag < 0) {
    flag = drk.length - 1;
    num = drk.length - 1;
  }
  for (var y of drk) {
    y.style.backgroundColor = "grey";
  }
  drk[num].style.backgroundColor = "black";
}



