const docEl = document.documentElement;
const fly = document.createElement('div');

fly.style.cssText = `
    position: fixed;
    width: 50px;
    height: 50px;
    right: 0;
    bottom: 0;
    pointer-events: none;
    background: url('../../img/airplane/airplane.svg') center/contain;
`;
document.body.append(fly);

if (docEl.scrollWidth < 768) {
  fly.style.display = 'none';
} else {
  fly.style.display = 'block';
}

const calcPositionFly = () => {
  const maxTop = docEl.clientHeight - fly.clientHeight;
  const maxScroll = docEl.scrollHeight - docEl.clientHeight;
  const percentScroll = (window.pageYOffset * 100) / maxScroll;
  
  const heightViewPort = maxTop / 100;
  
  fly.style.top = `${heightViewPort * percentScroll}px`;
};

window.addEventListener('scroll', calcPositionFly);

calcPositionFly();
