const page1 = document.querySelector("#page-1");
const page2 = document.querySelector("#page-2");
const page3 = document.querySelector("#page-3");

document.querySelector("#gotoPage1Btn").addEventListener("click", function() {
  page1.classList.remove('hidden');
  page1.classList.add('show')

  page2.classList.remove('show');
  page2.classList.add('hidden');

  page3.classList.remove('show');
  page3.classList.add('hidden');
});


document.querySelector("#gotoPage2Btn").addEventListener("click", function() {
  page2.classList.remove('hidden');
  page2.classList.add('show')

  page1.classList.remove('show');
  page1.classList.add('hidden');

  page3.classList.remove('show');
  page3.classList.add('hidden');
});


document.querySelector("#gotoPage3Btn").addEventListener("click", function() {
  page3.classList.remove('hidden');
  page3.classList.add('show')

  page1.classList.remove('show');
  page1.classList.add('hidden');

  page2.classList.remove('show');
  page2.classList.add('hidden');
})
