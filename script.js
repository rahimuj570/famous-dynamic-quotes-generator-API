// ====== Index Number Initial ======
let i = 0;

// ========= Get Html Element ========
const getElem = (idClass) => {
  const htmlElem = document.getElementById(idClass);
  const htmlText = htmlElem.innerText;
  return [htmlElem, htmlText];
};

// ========== Try Another Handler ========
getElem("try-another-btn")[0].addEventListener("click", () => {
  // ======== API Length =======
  const apiLength = () => {
    fetch(`https://type.fit/api/quotes`)
      .then((res) => res.json())
      .then((data) => indexNumberLoop(data.length - 1));
  };
  apiLength();

  // ======= API Index Number Loop =======
  const indexNumberLoop = (apiLength) => {
    if (i == apiLength) {
      i = 0;
      fetchApi(i);
    } else if (i < apiLength) {
      i++;
      fetchApi(i);
    }
  };
});

// =========== Fetch API =======
const fetchApi = (indexNumber) => {
  fetch(`https://type.fit/api/quotes`)
    .then((res) => res.json())
    .then((data) => catchApi(data[indexNumber]));
};

// ========= Catch API ========
const catchApi = (data) => {
  console.log(data.text);
  getElem("quote")[0].innerText = data.text;
  getElem("author")[0].innerText = data.author;
};
