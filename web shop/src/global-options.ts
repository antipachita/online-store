export {};
type ObjOption = {
  year: string
  color: string
  producer: string
  popular: string
  sorting: string
  rangeCount: Array<string>
  rangeYear: Array<string>
  guarantee: Array<string>
  search: string
  choosenProducts: Array<string>
};

declare global {
  interface Window {
    filterOptions: ObjOption
  }
}

window.filterOptions = {
  year: '2003',
  color: localStorage.getItem('colorSettings') || 'all',
  producer: localStorage.getItem('producerSettings') || 'all',
  popular: localStorage.getItem('popularSettings') || 'all',
  sorting: localStorage.getItem('sortSettings') || 'none',
  rangeCount: [localStorage.getItem('inputFirst') || '0', localStorage.getItem('inputSecond') || '11'],
  rangeYear: [localStorage.getItem('inputYearFirst') || '1990', localStorage.getItem('inputYearSecond') || '2022'],
  guarantee: [
    localStorage.getItem('oneYearGuarantee') || '1',
    localStorage.getItem('twoYearGuarantee') || '2',
    localStorage.getItem('threeYearGuarantee') || '3',
  ],
  search: localStorage.getItem('placeHolderValue')! || '',
  choosenProducts: JSON.parse(localStorage.getItem('productsArr')!) || [],
};
