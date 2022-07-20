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

function createElements() {
  const prdouctDisplay = <HTMLTemplateElement>document.querySelector('.product_display');

  array.forEach((elem, index): void => {
    const card = document.createElement('div') as HTMLElement;
    const cardImage = document.createElement('div') as HTMLElement;
    const charList = document.createElement('ul') as HTMLElement;

    card.classList.add('product_card');
    cardImage.classList.add('card_image');

    cardImage.style.background = `no-repeat url('./assets/${elem.image.fields.file.url}')`;
    cardImage.style.backgroundSize = 'cover';

    prdouctDisplay.append(card);
    card.append(cardImage);
    card.append(charList);
    let fields: ProductsFields = elem.fields;

    for (const key in fields) {
      const listItem = document.createElement('li') as HTMLElement;
      listItem.textContent = `${key}:${fields[key]}`;
      charList.append(listItem);
      }
    });
}

export default createElements;
