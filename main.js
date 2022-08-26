window.addEventListener("resize", () => {
    // CODE
    if(innerWidth<=550){
        document.getElementById("img").src = "images/image-product-mobile.jpg";
    }else{
        document.getElementById("img").src = "images/image-product-desktop.jpg"
    }
});