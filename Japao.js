var currentImgIndex = 1;
var imgSrcArray = [
    './images/taiko.jpeg',
    './images/kabuki.jpeg',
    './images/monumento.jpeg',
    './images/ukiyoe.jpeg',
    './images/origami.jpeg',
];

var fotoPrincipal = $("#Japao");

function trocar() {
    $(document).ready(() => {

        fotoPrincipal.attr("src", imgSrcArray[currentImgIndex])

            if (currentImgIndex === imgSrcArray.length -1) {
                currentImgIndex = 0;
            }
            else {
                currentImgIndex++;
            }
        });
}
