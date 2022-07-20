const sorting = {
    cardsSort : function () {
  
    document.addEventListener('click', () => {
      this.checkSorting()});
    },
    checkSorting: function () {
      const sortinputValue = <HTMLInputElement>document.querySelector('.sort-input');
    if (sortinputValue.value === 'year-highest') {
      window.filterOptions.sorting = 'year-highest';
    } else if (sortinputValue.value === 'year-lowest') {
      window.filterOptions.sorting = 'year-lowest';
    } else if (sortinputValue.value === 'name-a') {
      window.filterOptions.sorting = 'name-a';
    } else if (sortinputValue.value === 'name-z') {
      window.filterOptions.sorting = 'name-z';
    } else if (sortinputValue.value === 'randomly') {
      window.filterOptions.sorting = 'randomly';
    }
    localStorage.setItem('sortSettings', window.filterOptions.sorting);
    }
  }
  
  export default sorting;