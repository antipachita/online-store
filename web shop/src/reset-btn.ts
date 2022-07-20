import drawElements from './draw-products-cards';

function createResetBtn() {
  const ResetBtn = document.querySelector('.reset');
  ResetBtn?.addEventListener('click', function () {
    window.filterOptions = {
      year: '2003',
      color: 'all',
      producer: 'all',
      popular: 'all',
      sorting: window.filterOptions.sorting,
      rangeCount: ['0', '11'],
      rangeYear: ['1990', '2022'],
      guarantee: ['1', '2', '3'],
      search: '',
      choosenProducts: window.filterOptions.choosenProducts,
    };
    drawElements();
    const favoriteFilter = <HTMLInputElement>document.getElementById('favorite');
    const yearCheckboxFirst = <HTMLInputElement>document.querySelector('.one_year');
    const yearCheckboxSecond = <HTMLInputElement>document.querySelector('.two_year');
    const yearCheckboxThird = <HTMLInputElement>document.querySelector('.three_year');
    const slidersAll: NodeListOf<Element> | null = document.querySelectorAll('input[type="range"]');

    const inputFirst = <HTMLInputElement>slidersAll[0];
    const inputSecond = <HTMLInputElement>slidersAll[1];
    const inputThird = <HTMLInputElement>slidersAll[2];
    const inputFour = <HTMLInputElement>slidersAll[3];
    inputFirst.value = '0';
    inputSecond.value = '11';
    inputThird.value = '1990';
    inputFour.value = '2022';
    document.querySelector('.first_input_count')!.textContent! = String(0);
    document.querySelector('.second_input_count')!.textContent! = String(11);
    document.querySelector('.first_input_year')!.textContent! = String(1990);
    document.querySelector('.second_input_year')!.textContent! = String(2022);
    favoriteFilter.checked = false;
    yearCheckboxFirst.checked = true;
    yearCheckboxSecond.checked = true;
    yearCheckboxThird.checked = true;

    const prducerElemFilter = <HTMLInputElement>document.getElementById('company');
    prducerElemFilter.value = 'all';

    const searchInput: HTMLInputElement = document.querySelector('.search')!;
    searchInput.value = '';
  });
}

export default createResetBtn;
