
(function(){
  const spanEl = document.querySelector("main h2 span");
  const txtArr = ['an Appraiser', 'the CEO of the Company', 'a Front-End Developer', 'a Back-End Developer'];
  let index = 0;
  let currentTxt = txtArr[index].split("");
  function writeTxt(){
    spanEl.textContent += currentTxt.shift();
    if(currentTxt.length !==0){
      setTimeout(writeTxt, Math.floor(Math.random() * 100))
    }else{
      currentTxt = spanEl.textContent.split("");
      setTimeout(deleteTxt, 3000);
    }
  }
  function deleteTxt(){
    currentTxt.pop();
    spanEl.textContent = currentTxt.join("");
    if(currentTxt.length !==0){
      setTimeout(deleteTxt, Math.floor(Math.random() * 100))
    }else{
      index = (index + 1) % txtArr.length;
      currentTxt = txtArr[index].split("");
      writeTxt();
    }
  }
  writeTxt();
})();

// 스크롤 발생하면 active 추가
const headerEl = document.querySelector('header');
window.addEventListener('scroll', function(){
  requestAnimationFrame(scrollCheck);
});
function scrollCheck(){
  let browserScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
  if(browserScrollY > 0){
    headerEl.classList.add('active');
  }else{
    headerEl.classList.remove('active');
  }
} 
  
// 메뉴 클릭 시 이동
const animationMove = function(selector){
  const targetEl = document.querySelector(selector);
  const browserScrollY = window.pageYOffset;
  const targetScrollY = targetEl.getBoundingClientRect().top + browserScrollY;
  window.scrollTo({top: targetScrollY, behavior:'smooth'});
};

// 스크롤 이벤트 연결
const scrollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
for(let i = 0; i < scrollMoveEl.length; i++){
  scrollMoveEl[i].addEventListener('click', function(e){
    const target = this.dataset.target;
    animationMove(target);
  });
}


