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
          return coach.order <= 2;
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
