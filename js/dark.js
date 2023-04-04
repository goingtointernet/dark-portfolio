/*==dark-mode============================*/
var icon = document.getElementById("nav-modes");
    /*on click add dark-theme class to body element*/
    icon.onclick = function(){
        document.body.classList.toggle("dark-theme");

        var theme;

        /* if dark-theme class avaliable in body element do this js code*/
        if(document.body.classList.contains("dark-theme")){
            icon.classList.add("fa-sun")
            icon.classList.remove("fa-moon")
            theme = "DARK"
        }
        /* if not do this*/
        else{
            icon.classList.add("fa-moon")
            icon.classList.remove("fa-sun")
            theme = "LIGHT"
        }
        /*save to localstorage beacuse we need the selected theme even user refresh the page or move to next page or open the page again after some time*/
        localStorage.setItem("PageTheme", JSON.stringify(theme));
}

    /* get value of theme varibale which we save in localStorage*/
    let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
 
    /* if "theme" varibale value is DARK do this js code*/
    if(GetTheme === "DARK"){
        document.body.classList = "dark-theme";
        icon.classList.add("fa-sun")
        icon.classList.remove("fa-moon")
    }
    /*If "theme" Value is Not DARK Value Do This*/
    else{
        document.body.classList = "";
        icon.classList.add("fa-moon")
        icon.classList.remove("fa-sun")
    }

