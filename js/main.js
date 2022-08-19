// Toggle Spin Class Icon 
let settingsBox = document.querySelector(".settings-box");
let toggleIcon = document.querySelector(".settings-box .toggle-settings .fa-gear");

toggleIcon.onclick = function () {
    // Toggle Class Fa-spin For Rotation Ob Self
    this.classList.toggle("fa-spin");
    // Toggle Class Open On Main Settings Box
    settingsBox.classList.toggle("open");
}

// Scroll To Top
let scrollTop = document.querySelector(".to-top span");
function toTop() {
    window.onscroll = () => {
        this.scrollY >= 800 ? scrollTop.classList.add("up") : scrollTop.classList.remove("up");
    }
}
    scrollTop.addEventListener("click", () => {
        window.scrollTo({
            top : 0,
            behavior: "smooth"
        });
    });

    // Select All bullets 
let arrayOfBullets = Array.from(document.querySelectorAll(".nav-bullets .bullet "));
arrayOfBullets.forEach((bullet) => {

    bullet.addEventListener("click", (e) => {

        document.querySelector(e.target.dataset.section).scrollIntoView({

            behavior: "smooth"

        });
        
    });

    bullet.addEventListener("click", handelActiveClass);
});

function handelActiveClass() {

    arrayOfBullets.forEach((bullet) => {

        // Remove Active Class From All Bullets
        bullet.classList.remove("active");

    });

    // Add Active class To The Clicked Bullet
    this.classList.add("active");
}

// Swtich Colors
let arrayOfColors = Array.from(document.querySelectorAll(".color-list li"));

// Get Choosen Color From Local Storage
let choosenColor = window.localStorage.getItem("choosenColor");
// Check If There Is Any Value For The Choosen Color
if(choosenColor){
    document.documentElement.style.setProperty("--main-color",choosenColor);
    // Remove Active Class From All Colors
    arrayOfColors.forEach((element) => {
        element.classList.remove("active");
        // Add Active Class On Element With Data Color === Choosen Color
        if(element.dataset.color === choosenColor){
            // Add Active Class
            element.classList.add("active");
        }
    });
}

// Switch Random Background Option
let arrayOfbtns = Array.from(document.querySelectorAll(".random-background span"));

// Background Option
let backgroundOption = true;

let backgroundInterval;

// Get Choosen Value For BackgroundOption From Local Storage
let backgroundLoaclItem = window.localStorage.getItem("background_option");

if(backgroundLoaclItem){

    if(backgroundLoaclItem == "true"){

        backgroundOption = true;

    } else {

        backgroundOption = false;

    }
    // Remove All Active Class From Buttons
    arrayOfbtns.forEach((btn) => {

        btn.classList.remove("active");

    });

    if(backgroundLoaclItem == "true"){

        document.querySelector(".random-background .on").classList.add("active");
        // arrayOfbtns[0].classList.add("active");

    } else { 

        document.querySelector(".random-background .off").classList.add("active");
        // arrayOfbtns[1].classList.add("active");
    }   
}


randomizeImg();

// Loop On The Array Buttons
arrayOfbtns.forEach((btn) => {
    btn.addEventListener("click",switchBackgrounds);
});
function switchBackgrounds(){

    arrayOfbtns.forEach((btn) => {
        // Remove Active Class
        btn.classList.remove("active");
        // Add Active Class
        this.classList.add("active");
    });

    if(this.dataset.background == "on"){

        backgroundOption = true ;

        randomizeImg();

        window.localStorage.setItem("background_option",true);

    }else {

        backgroundOption = false;

        clearInterval(backgroundInterval);

        window.localStorage.setItem("background_option",false);

    }
}
// Loop On The Array Elements
arrayOfColors.forEach((li) => {
    li.addEventListener("click",switchColors);
});
function switchColors(){
    arrayOfColors.forEach((li) => {
        // Remove Active Class From All Colors
        li.classList.remove("active");
        // Add Active Class To The Choosen Color
        this.classList.add("active");
    });
    // Set The Choosen Color To The Page
    document.documentElement.style.setProperty("--main-color",this.dataset.color);
    // Set The Color For The Local Storage
    window.localStorage.setItem("choosenColor",this.dataset.color);
}

// Handel Setting Box For Showing The Bullets

let arrayOfBulletBtns = Array.from(document.querySelectorAll(".bullets-option span"));
let bulletsContainer = document.querySelector(".nav-bullets");
let bulletsLocalItem = window.localStorage.getItem("bullets_option");
// Set BulletsOption To Local Storage.
if(bulletsLocalItem){
    arrayOfBulletBtns.forEach((bulletBtn) => {
        bulletBtn.classList.remove("active");
    });

    if(bulletsLocalItem === "block"){
        arrayOfBullets.forEach((bullet) => {
            bullet.style.display = "block";
        });

        arrayOfBulletBtns[0].classList.add("active");
    } else {
        arrayOfBullets.forEach((bullet) => {
            bullet.style.display = "none";
        });

        arrayOfBulletBtns[1].classList.add("active");

    }
} 

arrayOfBulletBtns.forEach((bulletBtn) => {
    bulletBtn.addEventListener("click",handelBullets);
});

function handelBullets () {

    if(this.dataset.display == "block"){
        arrayOfBullets.forEach((bullet) => {
            bullet.style.display = "block";

            window.localStorage.setItem("bullets_option","block");
        });
    } else {
        arrayOfBullets.forEach((bullet) => {
            bullet.style.display = "none";

            window.localStorage.setItem("bullets_option","none");
        });
    }
    // Remove Active Class From Bullets Buttons
    arrayOfBulletBtns.forEach((bulletBtn) => {
        bulletBtn.classList.remove("active");
    });
    //  Add Active Calss To The Clicked Button
    this.classList.add("active");
} 
// Select Landing Page Element
let landingPage = document.querySelector(".landing");

// Get Array Of Images 
let arrayOfImages = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"];

function randomizeImg(){
    if(backgroundOption == true) {
        backgroundInterval = setInterval( () => {
            let randomIndex = Math.floor(Math.random() * arrayOfImages.length);
            landingPage.style.backgroundImage = `url(./images/img${arrayOfImages[randomIndex]})`;
        },10000);
    }
}

// Our SKills Section

// Select All Progress Span
let progressSpan = document.querySelectorAll(".skill .the-progress span");

const skillProgress = () => {

    window.onscroll = () => {
        
        if(this.scrollY >= 1050){
            progressSpan.forEach((span) => {
                span.style.width = span.dataset.prog;
            });
            // From toTop Function
            scrollTop.classList.add("up");
        } else {
            progressSpan.forEach((span) => {
                span.style.width = 0;
            });
            // From toTop Function
            scrollTop.classList.remove("up");
        }
    }
}
skillProgress();

// Gallery Section

let ourGallery = Array.from(document.querySelectorAll(".gallrey-sec .box-images img"));

ourGallery.forEach((img) => {
    img.addEventListener("click",popUp);
});

function popUp(){
        // Create Over Lay When Any Img Gets Clikced
        let overLay = document.createElement("div");
        // Set The Over Lay Class Name 
        overLay.className = "popup-overlay";
        // Appned The Over Lay To The Body
        document.body.appendChild(overLay);

        // Create Pop Up Box
        let popupBox = document.createElement("div");
        // Set The Box Class Name 
        popupBox.className = "popup-box";
        // Create The Image 
        let popUpImage = document.createElement("img");
        // Set The SRC for The popupImage As For The Clicked One 
        popUpImage.src = this.src;
        // Add Image To The popUp Box
        popupBox.appendChild(popUpImage);
        // Appned popUp Box To The Body 
        document.body.appendChild(popupBox);

        // Check If There Is Any alt Attribute
        if (this.alt) {
            // Create Title
            let imgHeading = document.createElement("h3");
            // Create Title Text 
            let imgTitle = document.createTextNode(this.alt);
            // Appned The Title To The Heading
            imgHeading.appendChild(imgTitle);
            // Appned The Heading To The popUp box
            popupBox.prepend(imgHeading);
        }
        // Create Close Button 
        let closeSpan = document.createElement("span");
        closeSpan.className = "close-btn";
        // Appned Close Button Text Node
        closeSpan.appendChild(document.createTextNode("X"));
        // Appned Close Button TO PopUp BOX
        popupBox.appendChild(closeSpan);
}
// Remove Galley Images 
document.addEventListener("click",(e) => {
    if(e.target.classList.contains("close-btn")) {
        e.target.parentElement.remove();
        document.querySelector(".popup-overlay").remove();
    }
});
document.onkeyup = (e) => {
    // Check IF There Is A PopUp Box
    if(document.querySelector(".popup-box")){
        if(e.key == "Escape"){
            document.querySelector(".popup-box").remove();
            document.querySelector(".popup-overlay").remove();
        }
    }
}

// Reset Button
document.querySelector(".rest-option").onclick = () => {
    // Reset All Local Storage Options
    window.localStorage.removeItem("choosenColor");
    window.localStorage.removeItem("background_option");
    window.localStorage.removeItem("bullets_option");

    // Refresh The WebSite
    window.location.reload();

}
// Toogle span 
let toggleSpan = document.querySelector('.landing header .toggle');
let tLinks = document.querySelector(".landing header .nav");

toggleSpan.onclick =  function (e) {
    // Add Active Menu To The Toggle Span 
    this.classList.toggle("active-menu");
    // Add Open Class On Nav (Links)
    tLinks.classList.toggle("open");
    // Stop Propagation
    e.stopPropagation();
}
tLinks.onclick - function (e) {
    // Stop Propagation
    e.stopPropagation();
}

document.onclick = function (e) {
    if(tLinks.classList.contains("open")){
        if(e.target != tLinks && e.target != toggleSpan) {
            // Add Active Menu To The Toggle Span 
            toggleSpan.classList.toggle("active-menu");
            // Add Open Class On Nav (Links)
            tLinks.classList.toggle("open");
        }
    }
}