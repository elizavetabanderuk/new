window.addEventListener('load', theme);
const searchLine = document.querySelector('#search-line');
const imageBox = document.querySelector('.photos');
const searchIcon = document.querySelector('.search-icon');



searchIcon.addEventListener('click', function(){
    if(!searchIcon.classList.contains('cross')){
    searchIcon.classList.add('cross');
    loadImage();
    }else{
        searchIcon.classList.remove('cross');
        searchLine.value = '';
    }
})

searchLine.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
    loadImage();
    searchIcon.classList.add('cross');
    }else if (event.key === 'Delete' || event.key === 'Backspace'){
    searchIcon.classList.remove('cross');
    }else{}
})


function loadImage(){
    removeImage();
    const originaUrl = 'https://api.unsplash.com/search/photos?query='+searchLine.value+'&per_page=9&orientation=landscape&client_id=4jj1CvecLmccUPlVtb8yvmxey6z33JhWCR5xXfs4NNQ';
    fetch(originaUrl)
    .then(response => {
        if(response.ok)
        return response.json();
        else
        alert(response.status)
    })
    .then(urlData =>{
        const imgArray = [];
        for(let i = 0; i < urlData.results.length; i++){
            imgArray[i] = document.createElement('div');
            imgArray[i].className = 'img';
            imgArray[i].style.backgroundImage = 'url('+urlData.results[i].urls.raw+')';
            imgArray[i].addEventListener('dblclick', function(){
                window.open(urlData.results[i].links.download, '_blank');
            })
            imageBox.appendChild(imgArray[i]);
        }
    })
}

function removeImage(){
    imageBox.innerHTML = '';
}

function theme(){
    const date = new Date();
    const time = date.getHours();

    if (time >= 8 && time <= 19){
        document.body.style.backgroundColor = 'rgb(247, 246, 246)';
        document.body.style.color = 'black';
    }
    else{
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
}

