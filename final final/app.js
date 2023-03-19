coverImage = document.getElementById("homeCover")
// console.log(coverImage.style.backgroundImage)

images = ["url('./images/homeCover.jpg')", "url('./images/homeCover2.jpg')", "url('./iamges/homeCover3.jpg')"]

// for (var i=0;i<=3;i++){
//     coverImage.style.backgroundImage=url(images[i])
// };

function imageChange() {
    for (var i = 0; i <= 3; i++) {
        console.log(images[i])
        setInterval(coverImage.style.backgroundImage = "url( %f,5000)", images[i]);
        console.log(coverImage.style.backgroundImage = images[i])
    }
    // console.log(coverImage.style.backgroundImage)
}
// setInterval(imageChange,5000)

// imageChange()

// AOS.init();

navbutton = document.getElementById("navbutton")
function navDisplay() {

}

// var x = window.matchMedia("(max-width: 700px)")
// function myFunction(x) {
//     if (x.matches) {
//         document.main.
//     }
// }
// x.addListener(myFunction)
