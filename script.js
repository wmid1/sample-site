
var wrapper = document.getElementById('wrapper');
var footer = document.getElementById('footer');
var getStart = document.getElementById('getStart');
var topbg = document.getElementById('topbg');
getStart.onclick=scroll;

function scroll() { // Прокрутка по нажатию кнопки
  let width_client = document.body.clientWidth;
  if (width_client >= 1270) {
    width_client = 1270;
  }
  if (width_client <= 1085) {
    width_client = 1085;
  }
  window.scrollTo({
      top: topbg.height + 80 + 1270-width_client,
      behavior: "smooth"
  });
}
var blocks = document.getElementById('blocks');
var getStart_2 = document.getElementById('button');
getStart_2.onclick = scroll;


window.onresize = cutSize;
window.onload = cutSize;
function cutSize() { // Фиксация на середине при изменении размера экрана
  if (document.body.clientWidth < wrapper.offsetWidth) {
    wrapper.style.left = (document.body.clientWidth - wrapper.offsetWidth )/2 + 'px';
    footer.style.left = (document.body.clientWidth - wrapper.offsetWidth )/2 + 'px';
    blocks.style.top = -165 + 1270-document.body.clientWidth+'px';
    blocks.style.height = 100 + 1270-document.body.clientWidth+'px';
}
  if (document.body.clientWidth <= 1085){
    blocks.style.top=15 +'px';
    blocks.style.height =280+'px';
  }
  if (document.body.clientWidth > 1270) {
    wrapper.style.left=0 + "px";
    footer.style.left=(document.body.clientWidth - wrapper.offsetWidth )/2 + 'px';
    blocks.style.top = -165 +'px';
    blocks.style.height = 100 +'px';
  }
}
