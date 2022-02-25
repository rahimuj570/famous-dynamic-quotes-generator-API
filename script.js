// ====== Index Number Initial ======
let i = 0;

// ========= Get Html Element ========
const getElem = (idClass) => {
  const htmlElem = document.getElementById(idClass);
  const htmlText = htmlElem.innerText;
  return [htmlElem, htmlText];
};

// ======== Mother Function =======
const motherFunction = (isNext) => {
  const apiLength = () => {
    fetch(`https://type.fit/api/quotes`)
      .then((res) => res.json())
      .then((data) => indexNumberLoop(data.length - 1));
  };
  apiLength();
  const indexNumberLoop = (apiLength) => {
    if (isNext == true) {
      if (i == apiLength) {
        i = 0;
        fetchApi(i);
      } else if (i < apiLength) {
        i++;
        fetchApi(i);
      }
    } else if (isNext === false) {
      if (i == apiLength) {
        i = 0;
        fetchApi(i);
      } else if (i < apiLength) {
        if (i == 0) {
          fetchApi(0);
          i = 1642;
        }
        i--;
        fetchApi(i);
      }
    } else if (isNext === "random") {
      if (i == apiLength) {
        i = 0;
        fetchApi(i);
      } else if (i < apiLength) {
        i++;
        fetchApi(i);
      }
    }
  };
};

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

// ========== Random Handler ========
getElem("random-btn")[0].addEventListener("click", () => {
  i = Math.round(Math.random() * 1642);
  motherFunction("random");
});

// ========== Next Handler ========
getElem("arrow-right")[0].addEventListener("click", () => {
  motherFunction(true);
});

// ========== Previous Handler ========
getElem("arrow-left")[0].addEventListener("click", () => {
  motherFunction(false);
});
