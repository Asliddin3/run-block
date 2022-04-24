let title=document.querySelector('.header__content'),
    header=document.querySelector('.header');

title.addEventListener('mousemove',run)
console.log(title.Window);
function run(e){
   let height=header.offsetHeight-this.offsetHeight
   let width=header.offsetWidth-this.offsetWidth
   this.style.position='absolute'
   this.style.zIndex='6'
   this.style.marginTop=`${rand(height,30)}px`
   this.style.marginLeft=`${rand(width,30)}px`
}
function rand(max, min){
    return Math.floor(Math.random() * (max - min) + min)
}
  