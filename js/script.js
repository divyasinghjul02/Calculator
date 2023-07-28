let input = document.querySelector("#in");
let buttons = document.querySelectorAll(".btn");

let blank = "";
let newarray = Array.from(buttons);

newarray.forEach(element => {
  element.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      if(input.value==="" || input.value==="undefined" || /[a-zA-Z]/.test(input.value)){
        alert("please enter a valid number")
      }else{
        blank = eval(blank);
      input.value = blank;
      }
    } else if (e.target.innerHTML === "ac" || e.target.innerHTML === "c") {
      blank = "";
      input.value = blank;
    } else if (e.target.innerHTML === "Del") {
      blank = blank.slice(0, -1);
      input.value = blank;
    }else {
      blank += e.target.innerHTML;
      input.value = blank;
    }
  });
});
