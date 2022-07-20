const popularFilter = {
  addListener : function () {
  document.addEventListener('change', () => {
    this.popularFilter(true)});
  },
  popularFilter: function (checked:boolean) {
    if (true) {
      window.filterOptions.popular = 'yes';       
    } else {
      window.filterOptions.popular = 'all';
    }   
  }
}

const companyFilter = {
  addListener : function () {
  document.addEventListener('change', () => {
    this.producerFilter('all')});
  },
  producerFilter: function (company:string) {
    if (company === 'all') {
      window.filterOptions.producer = 'all';
    } else if (company === 'marcos') {
      window.filterOptions.producer = 'marcos';
    } else if (company === 'liddy') {
      window.filterOptions.producer = 'liddy';
    } else if (company === 'ikea') {
      window.filterOptions.producer = 'ikea';
    } else if (company === 'caressa') {
      window.filterOptions.producer = 'caressa';
    } 
  }
}

const colorFilter = {
  addListener : function () {
  document.addEventListener('change', () => {
    this.colorFilter('all')});
  },
  colorFilter: function (color:string) {
    if (color === 'red') {
      window.filterOptions.color = 'red';
    } else if (color === 'blue') {
      window.filterOptions.color = 'blue';
    } else if (color === 'green') {
      window.filterOptions.color = 'green';
    } else if (color === 'all') {
      window.filterOptions.color = 'all';
    }
  }
}
    
export default { popularFilter, companyFilter, colorFilter};