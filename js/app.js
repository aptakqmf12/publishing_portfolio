// loading박스
let isAnimation = true;
let loadingBox = document.querySelector('.loading');
let loading = document.querySelector('.loading .left');

loading.addEventListener('animationend', ()=> {
    loadingBox.classList.add('hide');
})