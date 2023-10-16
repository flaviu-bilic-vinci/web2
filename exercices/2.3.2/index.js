const colorTiles = document.querySelectorAll(".color-div");

colorTiles.forEach((div) => {
    let big = false;
    div.addEventListener("click",(event) => {
        if(big === false){
            div.style.width = "200px";
            div.style.height = "200px";
            div.innerHTML = event.target.style["background-color"];
            big = true;
            console.log("do we get here?1");
        }else{
            div.style.width = "50px";
            div.style.height = "50px";
            div.innerHTML = "";
            big = false;
        };
        
    });
});
