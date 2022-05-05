function convertir(e){
  //console.log(e.target);
  //console.log(e.target.value);
  let num = parseInt(e.target.value);
  console.log(num);
  console.log(typeof num);
  let spans = document.querySelectorAll("span");
  for (let s of spans) {
    s.textContent = num.toString(parseInt(s.dataset.base)).toUpperCase();
  }
}
