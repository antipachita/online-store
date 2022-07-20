import array from './products.json';

interface ProductsFields {
  [index: string]: string | number
  title: string
  price: string
  count: string
  year: string | number
  color: string
  producer: string
  popular: string
}

function drawElements() {
  const prdouctDisplay = <HTMLTemplateElement>document.querySelector('.product_display');
  prdouctDisplay.innerHTML = '';
  if (window.filterOptions.sorting === 'year-highest') {
    array.sort((a, b) => Number(b.fields.year) - Number(a.fields.year));
  } else if (window.filterOptions.sorting === 'year-lowest') {
    array.sort((a, b) => Number(a.fields.year) - Number(b.fields.year));
  } else if (window.filterOptions.sorting === 'name-a') {
    array.sort((a, b) => a.fields.title.charCodeAt(0) - b.fields.title.charCodeAt(0));
  } else if (window.filterOptions.sorting === 'name-z') {
    array.sort((a, b) => b.fields.title.charCodeAt(0) - a.fields.title.charCodeAt(0));
  } else if (window.filterOptions.sorting === 'none') {
    array.sort((a, b) => Math.random() - 0);
  }

  array.forEach((elem, index): void => {
    let optionColor = window.filterOptions.color;
    let optionPopular = window.filterOptions.popular;
    let optionProducer = window.filterOptions.producer;

    if (window.filterOptions.color === 'all') {
      optionColor = elem.fields.color;
    }
    if (window.filterOptions.popular === 'all') {
      optionPopular = elem.fields.popular;
    }
    if (window.filterOptions.producer === 'all') {
      optionProducer = elem.fields.producer;
    }
    // if (window.filterOptions.search === '') {
    //   window.filterOptions.search.toLowerCase() = elem.fields.title.toLowerCase();
    // }
    
    if (
      elem.fields.color === optionColor &&
      Number(elem.fields.count) >= Number(window.filterOptions.rangeCount[0]) &&
      Number(elem.fields.count) <= Number(window.filterOptions.rangeCount[1]) &&
      Number(elem.fields.year) >= Number(window.filterOptions.rangeYear[0]) &&
      Number(elem.fields.year) <= Number(window.filterOptions.rangeYear[1]) &&
      elem.fields.popular === optionPopular &&
      elem.fields.producer === optionProducer &&
      (elem.fields.guarantee === window.filterOptions.guarantee[0] ||
      elem.fields.guarantee === window.filterOptions.guarantee[1] ||
      elem.fields.guarantee === window.filterOptions.guarantee[2]) &&
      elem.fields.title.toLocaleLowerCase().includes(window.filterOptions.search.toLocaleLowerCase())
    ) {
      const fragmentContent: DocumentFragment = document.createDocumentFragment();
      const card = document.createElement('div') as HTMLElement;
      const cardImage = document.createElement('div') as HTMLElement;
      const charList = document.createElement('ul') as HTMLElement;
      card.classList.add('product_card');
      cardImage.classList.add('card_image');

      cardImage.style.background = `no-repeat url('./assets/${elem.image.fields.file.url}')`;
      cardImage.style.backgroundSize = 'cover';
      if (window.filterOptions.choosenProducts.includes(elem.fields.title)) {
        card.classList.add('product_card_active');
      } else if (!window.filterOptions.choosenProducts.includes(elem.fields.title)) {
        card.classList.remove('product_card_active');
      }
      fragmentContent.append(card);
      card.append(cardImage);
      card.append(charList);
      const fields: ProductsFields = elem.fields;

      for (const key in fields) {
        const listItem = document.createElement('li') as HTMLElement;
        listItem.textContent = `${key}:${fields[key]}`;
        charList.append(listItem);
      }
      prdouctDisplay.append(fragmentContent);
    }
  });
  if (prdouctDisplay.innerHTML === '') {
    prdouctDisplay.innerHTML = 'Извините, совпадений не обнаружено';
  }
}

export default drawElements;
