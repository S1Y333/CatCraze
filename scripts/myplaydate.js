import realEntries from './playdate.js';

const dummyEntries = [
  {
    date: "May 27, 2024",
    location: "CN Tower Meet",
  },
  {
    date: "March 27, 2024 ",
    location: "Niagra Fall Playdate",
  },
  {
    date: "June 25, 2024",
    location: "Woodbine Beach Play",
  },
];


let datesEntries = dummyEntries;
// if (realEntries.length ===0 ) {
//     datesEntries = dummyEntries;
// } else {
//    datesEntries = [realEntries, ...dummyEntries];
// }

// console.log(datesEntries);

const datesEntriesContainer = document.querySelector(".dynamic-mydates");

const renderShowsEntries = async () => {
  datesEntriesContainer.innerHTML = "";

  //h2 <h2 class="shows-section__title">Shows</h2>
  const titleEl = document.createElement("h2");
  titleEl.classList.add("dates-section__title");
  titleEl.innerText = "My PlayDates";
  datesEntriesContainer.appendChild(titleEl);

  //wrapper
  const wrapperEl = document.createElement("div");
  wrapperEl.classList.add("dates-section__wrapper");
  datesEntriesContainer.appendChild(wrapperEl);

  //label div for tablet & desktop
  const labelEl = document.createElement("div");
  labelEl.classList.add("dates-section__label");
  wrapperEl.appendChild(labelEl);

  //   //date label
  //   const dateTitleLabelEl = document.createElement("p");
  //   dateTitleLabelEl.classList.add("dynamic-shows__title-label");
  //   dateTitleLabelEl.innerText = "DATE";
  //   labelEl.appendChild(dateTitleLabelEl);

  //   //location label
  //   const locationTitleLabelEl = document.createElement("p");
  //   locationTitleLabelEl.classList.add("dynamic-shows__title-label");
  //   locationTitleLabelEl.innerText = "LOCATION";
  //   labelEl.appendChild(locationTitleLabelEl);

  datesEntries.forEach((showItem) => {
    // <div>
    const showDivEl = document.createElement("div");
    showDivEl.classList.add("dynamic-mydates__entry");

    wrapperEl.appendChild(showDivEl);

    // date div
    const dateEl = document.createElement("div");
    dateEl.classList.add("dynamic-mydates__date");
    showDivEl.appendChild(dateEl);

    // date title
    const dateTitleEl = document.createElement("p");
    dateTitleEl.classList.add("dynamic-mydates__title");
    dateTitleEl.innerText = "DATE";
    dateEl.appendChild(dateTitleEl);

    //date copy
    const dateCopyEl = document.createElement("p");
    dateCopyEl.classList.add("dynamic-mydates__date-copy");
    dateCopyEl.innerText = showItem.date;
    dateEl.appendChild(dateCopyEl);

    //venue div
    const venueEl = document.createElement("div");
    venueEl.classList.add("dynamic-mydates__venue");
    showDivEl.appendChild(venueEl);

    //location div
    const locationEl = document.createElement("div");
    locationEl.classList.add("dynamic-mydates__location");
    showDivEl.appendChild(locationEl);

    //location title
    const locationTitleEl = document.createElement("p");
    locationTitleEl.classList.add("dynamic-mydates__title");
    locationTitleEl.innerText = "LOCATION";
    locationEl.appendChild(locationTitleEl);

    //location copy
    const locationCopyEl = document.createElement("p");
    locationCopyEl.classList.add("dynamic-mydates__copy");
    locationCopyEl.innerText = showItem.location;
    locationEl.appendChild(locationCopyEl);

    // button buy tickets
    const buttonEl = document.createElement("button");
    buttonEl.classList.add("dynamic-mydates__button");
    buttonEl.innerText = "CANCEL PLAYDATE";
    showDivEl.appendChild(buttonEl);

    const showDividerEl = document.createElement("hr");
    showDividerEl.classList.add("divider");
    wrapperEl.appendChild(showDividerEl);

    showDivEl.addEventListener("click", function () {
      document.querySelectorAll(".dynamic-mydates__entry").forEach((item) => {
        item.classList.remove("selected");
      });
      this.classList.add("selected");
    });
  });
};

renderShowsEntries();
