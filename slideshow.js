let img = document.getElementsByClassName("slides");
let viTri = 0;

function hienThiAnh(viTri) {
    img[viTri].style.display = "block";
}
hienThiAnh(viTri);

function hienThiSlideKeTiep() {
    img[viTri].style.display = "none";
    if (viTri == img.length - 1) {
        viTri = 0;
    }
    else {
        viTri++;
    }  
    hienThiAnh(viTri);
}

function hienThiSlideTruocDo() {
    img[viTri].style.display = "none";
    if (viTri == 0) {
        viTri = img.length - 1;
    }
    else {
        viTri--;
    }
    hienThiAnh(viTri);
}
setInterval(function(){
    hienThiSlideKeTiep()
},3000);