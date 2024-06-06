document.addEventListener('DOMContentLoaded', function () {

    var menu_button = document.getElementById("menu");

    var main = document.querySelector('main');

    function createNew() {

        function addImage() {
            var newImage = document.createElement('img');
            newImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png'; // Substitua pelo caminho da sua imagem
            newImage.alt = 'bandeira-brasil';
            newImage.classList.add('imagens'); // Adiciona a classe CSS à nova imagem

            return newImage;
        }

        var newNew = document.createElement('div');
        var newParagraph = document.createElement('p');
        var newTitle = document.createElement('h2');
        var aHorizontalRow = document.createElement('hr');

        newTitle.textContent = "Manchete 4";//título da notícia

        newNew.appendChild(newTitle)//add o novo título
        newNew.appendChild(aHorizontalRow);//add linha horizontal

        newNew.appendChild(addImage());

        newParagraph.textContent = "Eis a notícia";//texto da notícia
        newNew.appendChild(newParagraph);

        main.appendChild(newNew);
    }

    menu_button.addEventListener('click', createNew);

}); 