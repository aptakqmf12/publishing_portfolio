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
  const NavCloseBtns = qs('.header__fullSub .close-btn', 'array');
  // 1뎁스 클릭시 2뎁스 노출
  NavList.forEach( v => { 
    v.addEventListener('click', ()=>{
      v.classList.add('on') 
      siblingsRemoveClass(v, 'on') 
    })
  })
  //close버튼 클릭시 2뎁스 삭제
  NavCloseBtns.forEach( v => {
    v.addEventListener('click', (e) => {
      const target = e.target; 
      target.closest('li').classList.remove('on');
      e.stopPropagation();
    })
  })

//2뎁스 클릭시 1뎁스 노출
const NavSubList = qs('.header__sub > li', 'array');
console.log(NavSubList);
NavSubList.forEach( v => {
  v.addEventListener('click', (e)=>{
    
    // 2뎁스 클릭시 3렙스 토글
    v.classList.toggle('on')

    // 클릭한 li의 부모 .header__sub 중에서 해당 li를 포함하지않은 .header__sub의 자식 li는 모두 on삭제
    
    const headerSubs = v.closest('.wrap').querySelectorAll('.header__sub')

    headerSubs.forEach( sub => {
      if(sub !== v.closest('.header__sub')){
        sub.querySelector('li').classList.remove('on')
      }
    })
    e.stopPropagation();

  })
})