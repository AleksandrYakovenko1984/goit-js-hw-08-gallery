import prod from "./prod.js";
import refs from "./refs.js"
// console.log(prod);
// console.log(refs);
// доступ к хтмл элементам(деструктуризация)
 const { list, modalDiv, img, closeBtn } = refs
// console.log(list, modalDiv, img, closeBtn);
    
// разметка элемента списка

function createItems(array) {
  // console.log(array);
  return array.map((arr) => {
    
    // console.log(arr);
    const { description, original, preview } = arr
    // console.log(description, original, preview);

    return `<li class="gallery__item">
  <a
    class="gallery__link"
    href=${original}
  >
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>`
    
  }).join("")
 

}
const markup = createItems(prod)
console.log(markup);
// встраивание разметки в список
list.insertAdjacentHTML('afterbegin', markup)