const qs = (el, option) => {
  if (document.querySelectorAll(el).length > 0) {
    if (option == "array") {
      return document.querySelectorAll(el);
    }
    if (document.querySelectorAll(el).length == 1) {
      return document.querySelector(el);
    } else {
      return document.querySelectorAll(el);
    }
  }
};
const findSibilings = () => {
  if (option == "other") {
    var res = [...currentEl.children];
    res.splice([...currentEl.children].indexOf(el), 1);
    return res;
  }
  return currentEl.children;
};
const closest = (startEl, selector) => {
  let currentEl = startEl;

  while (!currentEl.classList.contains(selector)) {
    if (currentEl.tagName === "HTML") {
      return currentEl;
    }
    currentEl = currentEl.parentElement;
  }

  return currentEl;
}
function siblings (el, className) {
  let cs = el.nextElementSibling;

  while(cs){ // 만약 다음 형제요소가 있으면
      cs.classList.remove(className);
      cs = cs.nextElementSibling;
  }
  // 다음 형제요소가 없다면
  cs = el.previousElementSibling;
  while(cs){
      cs.classList.remove(className);
      cs = cs.previousElementSibling;
  }
}
function closeParentTarget(parentClassName){
  console.log(parentClassName);
  this.closest(parentClassName).closest('li').classList.remove('on') 
}





  // loading박스
  let isAnimation = true;
  let loadingBox = qs('.loading');
  let loading = qs('.loading .left');

  loadingBox.addEventListener('animationstart', ()=> {
      qs('body').style.position = 'fixed'
  })
  loading.addEventListener('animationend', ()=> {
      loadingBox.classList.add('hide');
      qs('body').style.position = 'static'
  })

  //nav 클릭시
  let NavList = qs('.header__nav > li', 'array');

  NavList.forEach( v => {
      v.addEventListener('click', ()=>{
        v.classList.add('on')
        siblings(v, 'on')

      })
  } )

  let NavCloseBtns = qs('.header__fullSub .close-btn', 'array');

  NavCloseBtns.forEach( v => {
    v.addEventListener('click', e => {
      e.preventDefault
      let target = e.target;
      target.closest('li').classList.remove('on');
    })
  })

