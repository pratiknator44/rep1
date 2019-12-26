menuOpen = false;
contents = document.getElementsByClassName("contents")[0];

function exposeMenu() {
    menuOpen = !menuOpen;
    if(menuOpen) {
        contents.classList.add("fw-anim");
        contents.classList.add("fw-anim");
            // contents.style.animation = "expose-menu-anim 1s forwards";
            // setTimeout( () => {
            //     contents.style.animation = "";
            // }, 1200);
    } else {
        contents.classList.remove("fw-anim");
        contents.classList.add("rev-anim");
        // setTimeout( () => {
        //     contents.style.animation = "";
        // }, 1200);
    }
}
