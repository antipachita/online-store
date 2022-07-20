import drawElements from './draw-products-cards';

function popularFilter() {
  const favoriteFilter: HTMLInputElement = document.querySelector('.favorite-input')!;
  if (localStorage.getItem('popularSettings') === 'yes') {
    favoriteFilter.checked = true;
  } else if (localStorage.getItem('popularSettings') === 'all') {
    favoriteFilter.checked = false;
  }

  favoriteFilter.addEventListener('change', function (e: Event) {
    const target = e.target as HTMLInputElement;
    if (target.checked) {
      window.filterOptions.popular = 'yes';
      drawElements();
    } else {
      window.filterOptions.popular = 'all';
      drawElements();
    }
    localStorage.setItem('popularSettings', window.filterOptions.popular);
  });
}

function producerSort() {
  const prducerElemFilter = <HTMLInputElement>document.getElementById('company');
  prducerElemFilter.value = localStorage.getItem('producerSettings') || 'all';

  prducerElemFilter.addEventListener('change', function () {
    const sortinputValue = <HTMLInputElement>document.querySelector('.company');
    if (sortinputValue.value === 'all') {
      window.filterOptions.producer = 'all';
      drawElements();
    } else if (sortinputValue.value === 'marcos') {
      window.filterOptions.producer = 'marcos';
      drawElements();
    } else if (sortinputValue.value === 'liddy') {
      window.filterOptions.producer = 'liddy';
      drawElements();
    } else if (sortinputValue.value === 'ikea') {
      window.filterOptions.producer = 'ikea';
      drawElements();
    } else if (sortinputValue.value === 'caressa') {
      window.filterOptions.producer = 'caressa';
      drawElements();
    }

    localStorage.setItem('producerSettings', window.filterOptions.producer);
  });
}

function colorSort() {
  const colorTypesContainer = document.querySelector('.colors_type_style');
  colorTypesContainer?.addEventListener('click', function (e: Event) {
    const target = e.target as HTMLElement;
    if (target.parentNode === colorTypesContainer) {
      if (target.classList.contains('red')) {
        window.filterOptions.color = 'red';
        drawElements();
      } else if (target.classList.contains('blue')) {
        window.filterOptions.color = 'blue';
        drawElements();
      } else if (target.classList.contains('green')) {
        window.filterOptions.color = 'green';
        drawElements();
      } else if (target.classList.contains('all')) {
        window.filterOptions.color = 'all';
        drawElements();
      }
    }
    localStorage.setItem('colorSettings', window.filterOptions.color);
  });
}

function guaranteeFilter() {
  const guaranteeContainer = document.querySelector('.guarantee_category');
  const oneYearCheckbox: HTMLInputElement = document.querySelector('.one_year')!;
  const twoYearCheckbox: HTMLInputElement = document.querySelector('.two_year')!;
  const threeYearCheckbox: HTMLInputElement = document.querySelector('.three_year')!;
  if (localStorage.getItem('oneYearGuarantee') === '1') {
    oneYearCheckbox.checked = true;
  } else if (localStorage.getItem('oneYearGuarantee') === 'none') {
    oneYearCheckbox.checked = false;
  }

  if (localStorage.getItem('twoYearGuarantee') === '2') {
    twoYearCheckbox.checked = true;
  } else if (localStorage.getItem('twoYearGuarantee') === 'none') {
    twoYearCheckbox.checked = false;
  }

  if (localStorage.getItem('threeYearGuarantee') === '3') {
    threeYearCheckbox.checked = true;
  } else if (localStorage.getItem('threeYearGuarantee') === 'none') {
    threeYearCheckbox.checked = false;
  }

  guaranteeContainer?.addEventListener('click', function (e: Event) {
    const target = e.target as HTMLInputElement;
    if (target.parentNode === guaranteeContainer) {
      if (target.classList.contains('one_year')) {
        if (target.checked) {
          window.filterOptions.guarantee[0] = '1';
          drawElements();
        } else if (!target.checked) {
          window.filterOptions.guarantee[0] = 'none';
          drawElements();
        }
      } else if (target.classList.contains('two_year')) {
        if (target.checked) {
          window.filterOptions.guarantee[1] = '2';
          drawElements();
        } else if (!target.checked) {
          window.filterOptions.guarantee[1] = 'none';
          drawElements();
        }
      } else if (target.classList.contains('three_year')) {
        if (target.checked) {
          window.filterOptions.guarantee[2] = '3';
          drawElements();
        } else if (!target.checked) {
          window.filterOptions.guarantee[2] = 'none';
          drawElements();
        }
      }
    }
    localStorage.setItem('oneYearGuarantee', window.filterOptions.guarantee[0]);
    localStorage.setItem('twoYearGuarantee', window.filterOptions.guarantee[1]);
    localStorage.setItem('threeYearGuarantee', window.filterOptions.guarantee[2]);
  });
}

function sum(a:number, b:number) {
  return a + b;
}

export default { popularFilter, producerSort, colorSort, guaranteeFilter, sum };
