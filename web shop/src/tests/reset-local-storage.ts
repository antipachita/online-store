const resetStorage = {
  addListener : function () {
  document.addEventListener('click', () => {
    this.clearStorage()});
  },
  clearStorage: function () {
    localStorage.clear();   
  }
}
  
export default resetStorage;