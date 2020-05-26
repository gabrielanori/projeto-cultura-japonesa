var currentImgIndex = 1;
var imgSrcArray = [
    './images/kabuki.jpeg',
    './images/origami.jpeg',
    './images/monteFuji.jpeg',
    './images/gatinho.jpeg',
    './images/cerejeira.jpeg',
    './images/taiko.jpeg',
    './images/ukiyoe2.jpg',
    
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
