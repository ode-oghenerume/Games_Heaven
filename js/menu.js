// var boy = {
//     "name":"Jerry",
//     "age": 45
// }

// var girl= {
//     "name":"Princess",
//     "age": 67
// }

// if(boy.age>girl.age){
//     console.log(boy.name + "is older than" + girl.name)
// }
//     else{
//         console.log(boy.name + "is not older than" + girl.name)
//     }


// Functions are lines of code you do not want to execute until they are called upon

// function change(){
//     var my = document.getElementById("d")

//     my.innerHTML="Welcome to Javascript"
// }

var menu = document.getElementById("menu_items")
var is_menu_open = false
var slideshow = document.getElementById("swipe")

function open_items(){
     if(is_menu_open)
     {
        is_menu_open = false
        menu.classList.add("options")
        
   }else{
        is_menu_open = true
        menu.classList.remove("options")
    }
}

function slide(){
    slideshow.style.backgroundImage = "url(./img/nadine-shaabana-YsPnamiHdmI-unsplash.jpg)"
}
