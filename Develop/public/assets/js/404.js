// JS for the 404 page
const goBackBtn = document.getElementById('back');

const goBack = (e) => {
  e.preventDefault();

  //back to home page
  history.back();
};

goBackBtn.addEventListener('click', goBack);
