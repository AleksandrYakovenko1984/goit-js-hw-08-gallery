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
// console.log(markup);
// встраивание разметки в список
list.insertAdjacentHTML('afterbegin', markup)

// открытие модалки
function showElement(element) {
  element.classList.add('is-open')
  
}
function hideElement(element) {
    element.classList.remove('is-open')
  }
list.addEventListener('click', (e) => {
  const condition = e.target.nodeName === 'IMG'
  console.log(condition);
  e.preventDefault()
  if (condition) {
    showElement(modalDiv)

    const modalContent = document.getElementsByClassName('lightbox__content')[0]
    const modalImage = document.createElement('img')
    const link = e.target.getAttribute('data-source');
    modalImage.setAttribute('src', link)
    console.log(modalImage)

    modalContent.append(modalImage)

  }
})
// закрытие модального окна
// по бекдропу
// modalDiv.addEventListener('click', () => {
//   console.log(e.target.classList.contains('lightbox__overlay'));
// })
// по кнопке х

closeBtn.addEventListener('click', () => {
  hideElement(modalDiv)
  // modalDiv.classList.remove('is-open')
})
// по кнопке эскейп, влво, вправо
window.addEventListener('keydown', (e) => {
  const condition = e.code === 'Escape' || e.code === 'ArrowLeft' || e.code === 'ArrowRight'
  if (condition) {
    // modalDiv.classList.remove('is-open')
    hideElement(modalDiv)
  }
})

const options = {
  root: list,
  rootMargin: '0px',
  treshold: 0,

}
const observer = new IntersectionObserver(callback, options)

function callback(entries) {
  // console.log(entries);
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersectin) {
      console.log(entry.target);
      entry.target.img.remove('src')
    }
  })
  
}
const items = [...list.children]
console.log(items);
items.forEach((item)=>observer.observe(item))