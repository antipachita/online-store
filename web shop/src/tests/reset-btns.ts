const resetBtns = {
  createResetBtn : function () {

  document.addEventListener('click', () => {
    this.resetFunc()});
  },
  resetFunc: function () {
    window.filterOptions = {
      year: '2003',
      color: 'all',
      producer: 'all',
      popular: 'all',
      sorting: 'none',
      rangeCount: ['0', '11'],
      rangeYear: ['1990', '2022'],
      guarantee: ['1', '2', '3'],
      search: '',
      choosenProducts: [],
    };
  }
}

export default resetBtns;