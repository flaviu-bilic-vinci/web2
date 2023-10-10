const form = document.querySelectorAll(".form");


  form.addEventListener("submit", () => {
    form.innerText = "Hello world!";
  });

  div.addEventListener("mouseout", (e) => {
    div.innerText = `You have left the div wit id ${e.target.id}`;
  });


// code to get the reference to the form shall be imagined

const onSubmit = (e) => {
    console.log("onSubmit::");
    e.preventDefault();
  };
  
  myForm.addEventListener("submit", onSubmit);
  
