import drawElements from './draw-products-cards';

function createBasketCounter() {
  const prdouctsDisplay = document.querySelector('.product_display');
  const basketCounter = document.querySelector('.products_counter')!;
  basketCounter.textContent = String(window.filterOptions.choosenProducts.length);

  prdouctsDisplay?.addEventListener('click', function (e: Event) {
    const target = e.target as HTMLElement;
    if (window.filterOptions.choosenProducts.length > 19) {
      const prdouctName = target.closest('.product_card')!.childNodes[1].childNodes[0].textContent!.slice(6);
      const existProductIndex = window.filterOptions.choosenProducts.indexOf(prdouctName);
      if (existProductIndex !== -1) {
        window.filterOptions.choosenProducts.splice(existProductIndex, 1);
        drawElements();
      }
      if (window.filterOptions.choosenProducts.length > 4) {
        alert('Корзинена переполнена');
      }
    } else {
      if (target.closest('.product_card')) {
        const prdouctName = target.closest('.product_card')!.childNodes[1].childNodes[0].textContent!.slice(6);
        if (!window.filterOptions.choosenProducts.includes(prdouctName)) {
          window.filterOptions.choosenProducts.push(prdouctName);
          drawElements();
        } else if (window.filterOptions.choosenProducts.includes(prdouctName)) {
          const existProductIndex = window.filterOptions.choosenProducts.indexOf(prdouctName);
          if (existProductIndex !== -1) {
            window.filterOptions.choosenProducts.splice(existProductIndex, 1);
            drawElements();
          }
        }
      }
      
      basketCounter.textContent = String(window.filterOptions.choosenProducts.length);
      localStorage.setItem('productsArr', JSON.stringify(window.filterOptions.choosenProducts));
      localStorage.setItem('basketCount', String(window.filterOptions.choosenProducts.length));
    }
  });
}

export default createBasketCounter;
