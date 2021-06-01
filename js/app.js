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
function siblingsRemoveClass (el, className) {
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
  const NavList = qs('.header__nav > li', 'array');
  const NavListA = qs('.header__nav > li > a', 'array');
  const NavCloseBtns = qs('.header__fullSub .close-btn', 'array');
  // 1뎁스 클릭시 2뎁스 노출
  NavList.forEach( v => { 
    v.addEventListener('click', (e)=>{
      v.classList.add('on') 
      siblingsRemoveClass(v, 'on') 
    })
  })
  //close버튼 클릭시 2뎁스 삭제
  NavCloseBtns.forEach( v => {
    v.addEventListener('click', e => {
      const target = e.target; 
      target.closest('li').classList.remove('on');
      e.stopPropagation();
    })
  })

