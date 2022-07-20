function createResetStorageBtn() {
  const ResetBtn = document.querySelector('.reset-storage');
  ResetBtn?.addEventListener('click', function () {
    localStorage.clear();
  });
}

export default createResetStorageBtn;
