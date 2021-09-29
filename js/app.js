import prod from "./prod.js";
import refs from "./refs.js"
// console.log(prod);
// console.log(refs);
// доступ к хтмл элементам(деструктуризация)
 const { list, modalDiv, img, closeBtn } = refs

// разметка элемента списка

function createItems(array) {

  return array.map((arr) => {
    
    const { description, original, preview } = arr

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
closeBtn.insertAdjacentHTML('afterbegin', '<img src="icon-close.svg">')
// открытие модалки
function showElement(element) {
  element.classList.add('is-open')
  
}
// закрытие модалки
function hideElement(element) {
  element.classList.remove('is-open')
  img.setAttribute('src', "")  // зачистка src
  
  }

list.addEventListener('click', (e) => {
  const condition = e.target.nodeName === "IMG"
  console.log(condition);
  e.preventDefault()
  if (condition) {
    showElement(modalDiv)

    const link = e.target.getAttribute('data-source');
    const altName = e.target.getAttribute('alt');
    img.setAttribute('alt', altName)
    img.setAttribute('src', link)
    
    
  } 
})
// закрытие модального окна
// по бекдропу
modalDiv.addEventListener('click', (e) => {
 
  const condition = e.target.classList.contains('lightbox__overlay')
  if (condition) {
    hideElement(modalDiv)
  }
})
// по кнопке х

closeBtn.addEventListener('click', () => {
  hideElement(modalDiv)
})
// по кнопке эскейп, 
window.addEventListener('keydown', (e) => {
  const condition = e.code === 'Escape'
    
  if (condition) {
    hideElement(modalDiv)
  }
})


