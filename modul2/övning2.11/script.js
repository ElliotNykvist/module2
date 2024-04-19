const image = document.getElementById("image");


function changePicture() {
  const img = document.getElementById("image");
  if(img.src == "images/image1.jpg") {
    img.src = "images/image2.jpg"
  } else {
    img.src = "images/image2.jpg"
  }
}


image.addEventListener("mouseover", changePicture)