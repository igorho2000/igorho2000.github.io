// drop-down menu

document.getElementById("header-menu").addEventListener("click", MobileNav);
document.getElementById("header-close").addEventListener("click", MobileNav);

function MobileNav() {
    var x = document.getElementById("navigation-bar");
    var HeaderMenu = document.getElementById("header-menu");
    var HeaderClose = document.getElementById("header-close");
    if (x.className === "header-nav-container") {
        x.className = "header-nav-container-clicked";
        HeaderMenu.className= "header-menu-clicked";
        HeaderClose.className = "header-close-clicked";
        console.log("done");
    } else {
        x.className = "header-nav-container";
        HeaderMenu.className = "header-menu";
        HeaderClose.className = "header-close";
    }
  }

// infinite gallery

//  + document.querySelector(".Home-gallery-articles").style.margin * 2;
document.querySelector(".Home-gallery-left").addEventListener('click', () => {
    gotoleft();
    setTimeout(function() {
        changeorderleft();
    }, 700)
});
document.querySelector(".Home-gallery-right").addEventListener('click', () => {
    gotoright();
    setTimeout(function() {
        changeorderright();
    }, 700)
});

function gotoleft() {
    document.querySelector(".Home-gallery-container").classList.add('Home-gallery-transition');
    if (screen.width >= 992 && window.innerWidth >= 992) {
        document.querySelector(".Home-gallery-container").style.transform = 'translateX(-35vw)';
    } else {
        document.querySelector(".Home-gallery-container").style.transform = 'translateX(-110vw)';
    }
}
function gotoright() {
    document.querySelector(".Home-gallery-container").classList.add('Home-gallery-transition');
	if (screen.width >= 992 && window.innerWidth >= 992) {
        document.querySelector(".Home-gallery-container").style.transform = 'translateX(35vw)';
    } else {
        document.querySelector(".Home-gallery-container").style.transform = 'translateX(110vw)';
    }
}
function changeorderleft() {
    for (let i = 0; i<= 4; i++){
        if (document.getElementsByClassName("HGA")[i].style.order == 1) {
            document.getElementsByClassName("HGA")[i].style.order = 5;
            continue
        }
        document.getElementsByClassName("HGA")[i].style.order = parseInt(document.getElementsByClassName("HGA")[i].style.order) - 1;
    }
    document.querySelector(".Home-gallery-container").classList.remove('Home-gallery-transition');
	document.querySelector(".Home-gallery-container").style.transform = 'translateX(0)';
}
function changeorderright() {
    for (let i = 0; i<= 4; i++){
        if (document.getElementsByClassName("HGA")[i].style.order == 5) {
            document.getElementsByClassName("HGA")[i].style.order = 1;
            continue
        }
        document.getElementsByClassName("HGA")[i].style.order = parseInt(document.getElementsByClassName("HGA")[i].style.order) + 1;
    }
    document.querySelector(".Home-gallery-container").classList.remove('Home-gallery-transition');
	document.querySelector(".Home-gallery-container").style.transform = 'translateX(0)';
}

// form validation code
let input_elements = document.getElementsByClassName("Home-form-input");

for (let i of input_elements) {
    i.addEventListener('change', function() {
        if (i.matches(':valid')) {
            i.classList.add("Home-form-valid");
            i.classList.remove("Home-form-invalid");
            console.log('valid');
        } else if (i.matches(':invalid')) {
            i.classList.add("Home-form-invalid");
            i.classList.remove("Home-form-valid");
            console.log('invalid');
        } 
        if (i.value === '') {
            i.classList.remove("Home-form-invalid");
            i.classList.remove("Home-form-valid");
        }
    })
}

// return to top

document.addEventListener('scroll', function() {
    if (document.body.scrollTop > 0.5 * window.innerHeight || document.documentElement.scrollTop > 0.5 * window.innerHeight) {
        document.querySelector(".Back-to-top").style.display = "block";
    } else {
        document.querySelector(".Back-to-top").style.display = "none";
    }
})
