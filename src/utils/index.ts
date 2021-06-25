import _ from 'lodash';

// * 原本方案选择动态添加删除类名，但是每次移动栅格后会重新渲染，丢失之前添加的类名
// * 所以需要修改方案，调整为动态添加style标签，修改 .react-grid-item 样式
export function toggleGirdBorderColor() {
  //查找是否有 自定义的style element,如果不存在，调用dynamicInsertStyleEl
  const styleEl = document.querySelector('.custom-style') || dynamicInsertStyleEl();

  const showGirdStyleStr = `
  .react-grid-item{
      border-color: black;
      border-width: 1px;
    }
  `;

  const styleText = styleEl.innerHTML;

  const nextStyleText = styleText ? '' : showGirdStyleStr;

  styleEl.innerHTML = nextStyleText;
}

function dynamicInsertStyleEl() {
  const styleEl = document.createElement('style');

  styleEl.classList.add('custom-style');

  document.head.appendChild(styleEl);

  return styleEl;
}
