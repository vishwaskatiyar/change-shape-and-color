var isTriangle = false;

const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById('circle').style.backgroundColor = "#" + randomColor;
  document.getElementById('colorButton').style.backgroundColor = "#" + randomColor;
}

const change1 = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById('colorButton2').style.backgroundColor = "#" + randomColor;
  if (!isTriangle) {
    var dis = document.getElementsByClassName("inner")[0];
    dis.className = "triangle-bottom-left";
    isTriangle = true;
  } else {
    var i = document.getElementsByClassName("triangle-bottom-left")[0];
    i.className = "inner";
    isTriangle = false;
  }
}

document.getElementById('colorButton').addEventListener("click", setBg);
document.getElementById('colorButton2').addEventListener("click", change1);

setBg();
change1();

