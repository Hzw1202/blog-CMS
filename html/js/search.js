var searchBtn = document.getElementsByClassName('fa-search')[0];
var search = document.getElementsByClassName('ori-search')[0];
console.log(search);
searchBtn.onclick = function () {
    search.style.opacity = '1';
    search.style.dispaly = 'block';

}