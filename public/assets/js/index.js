import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBsBaihwh8F_UY8oYEsfcMlQEwEIgXcbxc",
  authDomain: "elmawkaabeta.firebaseapp.com",
  databaseURL: "https://elmawkaabeta.firebaseio.com",
  projectId: "elmawkaabeta",
  storageBucket: "elmawkaabeta.appspot.com",
  messagingSenderId: "808588970288",
  appId: "1:808588970288:web:6fb8d6b492c746efa820f5",
  measurementId: "G-G8FTTQ0EB2",
};
// "1:808588970288:web:6fb8d6b492c746efa820f5"

initializeApp(firebaseConfig);
const db = getFirestore();

const lang = document.querySelector("html").lang; // get page's Lang to assign it to database

const colRef = collection(db, "coaches", "languages", lang);

// selecting the coaches Row in html file
const coachesContent = document.getElementById("coaches-content");
let coaches = []; // for fulling coaches in coaches page
let html = ""; // content that we put in html
coachesContent.innerHTML = ""; // empty coaches content before getting data

async function getData() {
  // Fetching 'Getting' Data
  await getDocs(colRef)
    .then((snapshot) => {
      // Check if we in the home page or top coaches page
      snapshot.docs.forEach((doc) => {
        coaches.push({ ...doc.data(), id: doc.id });
      });
      coaches.sort((a, b) => a.order - b.order); // sort the array according to it's order
      // Adding Content of Data coming from Firebase to HTML
      if (coachesContent.classList.contains("top-coaches")) {
        // coaches = coaches.slice(0, topCoachesCount)
        coaches = coaches.filter((coach) => {
          return coach.order <= 3;
        });
      }
      // console.log(coaches);
      coaches.map((coach) => {
        html += `
				<div class="col-lg-4 col-md-6 member-card">
					<div class="member" data-aos="zoom-in">
						<div class="pic col-lg-11 m-auto pt-4" style="height: 380px;"><img src="${coach.image}" class="img-fluid" alt="Coach Image"></div>
							<div class="member-info coaches pricing">
								<div class='ps-3 pe-3'>
									<h5>${coach.name}</h5>
									<h4>${coach.jobTitle}</h4>
								</div>
								<span>${coach.pricing}</span>
								<a href="${coach.paymentLink}" target="_blank" class="btn-buy border-circle mt-3">Book Now</a>
							</div>
						</div>
					</div>
				</div>
				`;
      });
    })
    .catch((_) => {
      coachesContent.innerHTML = "No Coaches till now";
    });
}

getData().then(() => {
  coachesContent.innerHTML = html;
});

// <p class='detail-item mb-1 mt-1'>Details</p>
// <h6>${coach.category}</h6>
// <span>${coach.summary}</span>
// <span>${coach.country}/${coach.city} - ${coach.rating} stars</span>
// <div class="social">
// 	<a href="${coach.SM_account}" target="_blank"><i class="bi bi-linkedin"></i></a>
// </div>
/* Hiding Filtered Boxes with select box */
const inputFields = document.querySelectorAll(".input-field");

// if click outside
window.onclick = (e) => {
  if (!e.target.classList.contains("filter-el")) {
    inputFields.forEach((field) => field.classList.remove("on"));
  }
};

inputFields.forEach((field) => {
  field.addEventListener("click", () => {
    field.classList.toggle("on");
  });
});

// Select Dropdown menues
const byIndustry = document.querySelectorAll(".dropdown.by-industry li");
const byCountry = document.querySelectorAll(".dropdown.by-country li");
const byJobTitle = document.querySelectorAll(".dropdown.by-job-title li");
// adding checked to the first item in the list
checkTheElement(byIndustry, "category");
checkTheElement(byCountry, "country");
checkTheElement(byJobTitle, "jobTitle");

function checkTheElement(el, filterBy) {
  el.forEach((item) => {
    item.addEventListener("click", () => {
      el.forEach((item) => {
        if (item.classList.contains("on")) {
          item.classList.remove("on");
          item.querySelector("i").classList.remove("on");
        }
      });

      item.classList.add("on");
      item.querySelector("i").classList.add("on");

      // Search the Item
      let searchingVal = item.dataset.category;
      if (searchingVal != "all") {
        switch (filterBy) {
          case "category":
            filteredCoaches = coaches.filter((coach) => {
              if (coach.category.toLowerCase().indexOf(searchingVal) != -1) {
                return coach;
              }
            });
            showNewCoaches(filteredCoaches);
            break;
          case "country":
            filteredCoaches = coaches.filter((coach) => {
              if (coach.country.toLowerCase().indexOf(searchingVal) != -1) {
                return coach;
              }
            });
            showNewCoaches(filteredCoaches);
            break;
          case "jobTitle":
            filteredCoaches = coaches.filter((coach) => {
              if (coach.jobTitle.toLowerCase().indexOf(searchingVal) != -1) {
                return coach;
              }
            });
            showNewCoaches(filteredCoaches);
            break;
          default:
            return coaches;
        }
      } else {
        showNewCoaches(coaches);
      }
    });
  });
}

// Handle Events of searching and filtering when inputs changes

let searchField = document.getElementById("search-field");
let filteredCoaches = coaches;
let html_filtering_by_user = "";

// Handle User searching
searchField.addEventListener("keyup", () => {
  let searchFieldValue = searchField.value.toLowerCase();
  if (searchFieldValue !== "") {
    filteredCoaches = coaches.filter((coach) => {
      if (
        coach.category.toLowerCase().indexOf(searchFieldValue) != -1 ||
        coach.name.toLowerCase().indexOf(searchFieldValue) != -1 ||
        coach.jobTitle.toLowerCase().indexOf(searchFieldValue) != -1 ||
        coach.country.toLowerCase().indexOf(searchFieldValue) != -1
      ) {
        return coach;
      }
    });
    showNewCoaches(filteredCoaches);
  } else {
    return false;
  }
});
// Handle User Choosed Categories

function showNewCoaches(coaches) {
  html_filtering_by_user = "";
  coaches.map((coach) => {
    html_filtering_by_user += `
		<div class="col-lg-4 col-md-6">
			<div class="member" data-aos="zoom-in">
				<div class="pic"><img src="${coach.image}" class="img-fluid" alt="Coach Image"></div>
					<div class="member-info coaches pricing">
						<div class='ps-3 pe-3'>
							<h5>${coach.name}</h5>
							<h4>${coach.jobTitle}</h4>
						</div>
						<span>${coach.pricing}</span>
						<a href="${coach.paymentLink}" target="_blank" class="btn-buy border-circle mt-2">Buy Now</a>
					</div>
				</div>
			</div>
		</div>
	`;
  });
  if (coaches.length > 0) {
    coachesContent.innerHTML = html_filtering_by_user;
  } else {
    if (lang == "ar") {
      coachesContent.innerHTML = `
				<h1 style='padding: 100px 0; text-align: center'>لا يوجد مدربون علي حسب اختيارك</h1>
			`;
    } else {
      coachesContent.innerHTML = `
			<h1 style='padding: 100px 0; text-align: center'>There are no Coaches according to your filtration</h1>
			`;
    }
  }
}
