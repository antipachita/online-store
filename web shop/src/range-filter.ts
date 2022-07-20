import drawElements from './draw-products-cards';

function createRangeFilter() {
  document.querySelector('.first_input_count')!.textContent! = localStorage.getItem('inputFirst')!;
  document.querySelector('.second_input_count')!.textContent! = localStorage.getItem('inputSecond')!;

  const slidersAll: NodeListOf<Element> | null = document.querySelectorAll('input[type="range"]');
  const countSliders: Array<Element> = [slidersAll[0], slidersAll[1]];
  const slidersYear: Array<Element> = [slidersAll[2], slidersAll[3]];

  const inputFirst = <HTMLInputElement>countSliders[0];
  const inputSecond = <HTMLInputElement>countSliders[1];
  const inputThird = <HTMLInputElement>slidersYear[0];
  const inputFour = <HTMLInputElement>slidersYear[1];

  inputFirst.value = localStorage.getItem('inputFirst')! || '0';
  inputSecond.value = localStorage.getItem('inputSecond')! || '11';
  inputThird.value = localStorage.getItem('inputYearFirst')! || '1990';
  inputFour.value = localStorage.getItem('inputYearSecond')! || '2022';

  document.querySelector('.first_input_count')!.textContent! = localStorage.getItem('inputFirst') || String(inputFirst.value);
  document.querySelector('.second_input_count')!.textContent! = localStorage.getItem('inputSecond') || String(inputSecond.value);
  document.querySelector('.first_input_year')!.textContent! = localStorage.getItem('inputYearFirst') || String(inputThird.value);
  document.querySelector('.second_input_year')!.textContent! = localStorage.getItem('inputYearSecond') || String(inputFour.value);

  countSliders[0].addEventListener('input', (e: Event) => {
    if (+inputFirst.value > +inputSecond.value) {
      inputSecond.value = inputFirst.value;
    }
  });

  countSliders[1].addEventListener('input', (e: Event) => {
    if (+inputSecond.value < +inputFirst.value) {
      inputFirst.value = inputSecond.value;
    }
  });

  slidersYear[0].addEventListener('input', (e: Event) => {
    if (+inputThird.value > +inputFour.value) {
      inputFour.value = inputThird.value;
    }
  });

  slidersYear[1].addEventListener('input', (e: Event) => {
    if (+inputFour.value < +inputThird.value) {
      inputThird.value = inputFour.value;
    }
  });

  slidersAll.forEach((slider: Element) => {
    slider.addEventListener('change', () => {
      localStorage.setItem('inputFirst', inputFirst.value);
      localStorage.setItem('inputSecond', inputSecond.value);
      localStorage.setItem('inputYearFirst', inputThird.value);
      localStorage.setItem('inputYearSecond', inputFour.value);

      document.querySelector('.first_input_count')!.textContent! =
      localStorage.getItem('inputFirst') || String(inputFirst.value);
      document.querySelector('.second_input_count')!.textContent! =
      localStorage.getItem('inputSecond') || String(inputSecond.value);
      document.querySelector('.first_input_year')!.textContent! =
      localStorage.getItem('inputYearFirst') || String(inputThird.value);
      document.querySelector('.second_input_year')!.textContent! =
      localStorage.getItem('inputYearSecond') || String(inputFour.value);

      window.filterOptions.rangeCount = [inputFirst.value, inputSecond.value];
      window.filterOptions.rangeYear = [inputThird.value, inputFour.value];

      drawElements();
    });
  });
}

export default createRangeFilter;
