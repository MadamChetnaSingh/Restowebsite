var i = true;
var cn = 35;
function fun1() {
  let t1 = document.getElementById("onethousand");
  t1.innerHTML =cn;
  switch (i) {
    case true:
      t1.classList.remove("Test");
      t1.classList.add("Test1");
      i = !i;
      break;
    case false:
      t1.classList.remove("Test1");
      t1.classList.add("Test");
      i = !i;
    default:
      break;
  }
  cn++;
}

document.getElementById("btn").addEventListener("click", fun1);
