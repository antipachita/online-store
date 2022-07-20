import drawElements from './draw-products-cards';

function createSearch() {
  const searchInput: HTMLInputElement = document.querySelector('.search')!;
  const clearSearchBtn: HTMLElement = document.querySelector('.clear_search')!;
  if (localStorage.getItem('placeHolderValue')) {
    searchInput.value = localStorage.getItem('placeHolderValue')!;
  }
  searchInput.focus();
  clearSearchBtn.addEventListener('click', function () {
    searchInput.value = '';
    window.filterOptions.search = '';
    drawElements();
  });

  searchInput.addEventListener('input', function (e: Event) {
    const inputValue = this.value.trim();
    window.filterOptions.search = inputValue;
    localStorage.setItem('placeHolderValue', window.filterOptions.search);
    drawElements();
  });
}

export default createSearch;
