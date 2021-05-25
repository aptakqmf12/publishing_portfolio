// loading박스
let isAnimation = true;
let loadingBox = document.querySelector('.loading');
let loading = document.querySelector('.loading .left');

loading.addEventListener('animationend', ()=> {
    loadingBox.classList.add('hide');
})

//nav 클릭시
let test = document.querySelectorAll('.header__nav li');

test.forEach( v => {
    v.addEventListener('click', ()=>{
        v.classList.toggle('on')
        siblings(v, 'on')
    })
} )

// function siblings (el, className) {
//     let cs = el.nextElementSibling;

//     while(cs){ // 만약 다음 형제요소가 있으면
//         cs.classList.remove(className);
//         cs = cs.nextElementSibling;
//     }
//     // 다음 형제요소가 없다면
//     cs = el.previousElementSibling;
//     while(cs){
//         cs.classList.remove(className);
//         cs = cs.previousElementSibling;
//     }

// }


function siblings(el, cn) {
    let cs = el.nextElementSibling;
    cs.classList.remove(cn);
    while (cs) {
      if (cs) {
        cs = cs.nextElementSibling;
      } else {
        cs = cs.previousElementSibling;
      }
    }
  }