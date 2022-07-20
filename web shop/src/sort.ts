import drawElements from './draw-products-cards';


class CreatCardsorting {
  cardsSort() {
    const options = <HTMLInputElement>document.getElementById('sort');
    options.value = localStorage.getItem('sortSettings') || 'randomly';
    options.addEventListener('change', this.checkSorting);    
  }

  checkSorting() {
    const sortinputValue = <HTMLInputElement>document.querySelector('.sort-input');
    if (sortinputValue.value === 'year-highest') {
      window.filterOptions.sorting = 'year-highest';
      drawElements();
    } else if (sortinputValue.value === 'year-lowest') {
      window.filterOptions.sorting = 'year-lowest';
      drawElements();
    } else if (sortinputValue.value === 'name-a') {
      window.filterOptions.sorting = 'name-a';
      drawElements();
    } else if (sortinputValue.value === 'name-z') {
      window.filterOptions.sorting = 'name-z';
      drawElements();
    } else if (sortinputValue.value === 'randomly') {
      window.filterOptions.sorting = 'randomly';
      drawElements();
    }
    localStorage.setItem('sortSettings', window.filterOptions.sorting);
  }
}

  


export default CreatCardsorting;
