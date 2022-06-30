
let content = document.querySelector('.content');

let buttons = document.querySelectorAll('button');

buttons[0].onclick = (function () {
  document.querySelector('.content')
})

buttons[1].onclick = (function () {
  content.setAttribute('style', 'border-color: blue');
})

buttons[2].onclick = (function() {
  let a = document.createElement('a');
  a.text = 'Google';
  a.href = 'https://google.com';
  content.appendChild(a);
})

buttons[3].onclick = (function() {
  content.style.width = '500px';
})


let observerCallback = (mutations, observer) => {
  console.log(mutations);
};

let observer = new MutationObserver(observerCallback);

let observerSetting = {
  subtree: true,
  childList: true,
  characterData: true,
  attributes: true,
  attributeOldValue: true,
  characterDataOldValue: true,
}

observer.observe(content, observerSetting);


