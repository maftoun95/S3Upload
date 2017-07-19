const refresh: Element = document.querySelector('.refresh');
const download: Element = document.querySelector('.download');

refresh.addEventListener('click', function(){
    alert("refreshing");
});

download.addEventListener('click', function(){
    alert("downloading");
});