
function random_image() {
    var img1 = document.getElementById("img1")
    n = Math.ceil(Math.random() * 1247);
    img1.src = "images/cat/" + n + ".jpg"

}
