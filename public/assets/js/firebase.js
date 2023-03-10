import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyBsBaihwh8F_UY8oYEsfcMlQEwEIgXcbxc",

    authDomain: "elmawkaabeta.firebaseapp.com",

    databaseURL: "https://elmawkaabeta.firebaseio.com",

    projectId: "elmawkaabeta",

    storageBucket: "elmawkaabeta.appspot.com",

    messagingSenderId: "808588970288",

    appId: "1:808588970288:web:8fe9fcbf5e7ca8cca820f5",

    measurementId: "G-G8FTTQ0EB2"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
import { getDatabase, ref, set, child, update, remove }
    from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
import { getFirestore, doc, getDoc, setDoc, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";

const db = getFirestore();

var in1 = document.getElementById("in1");
var in2 = document.getElementById("in2");
var in3 = document.getElementById("in3");
var in4 = document.getElementById("in4");
var in5 = document.getElementById("in5");
var in6 = document.getElementById("in6");
var in7 = document.getElementById("in7");
var in8 = document.getElementById("in8");
var in9 = document.getElementById("in9");
var in10 = document.getElementById("in10");
var in11 = document.getElementById("in11");
var in12 = document.getElementById("in12");
var in13 = document.getElementById("in13");
var in14 = document.getElementById("in14");
var degr = document.getElementById("degr");
var next_1 = document.getElementById("next_1");
var next_2 = document.getElementById("next_2");
var next_3 = document.getElementById("next_3");
var next_4 = document.getElementById("next_3");
var submit = document.getElementById("submit");
var not1 = document.getElementById("not1");
var not2 = document.getElementById("not2");
var not3 = document.getElementById("not3");
var text_area = document.getElementById("text_area");
var englishSkills = document.getElementById("englishSkills");
var programming = document.getElementById("programming");
var availability = document.getElementById("availability");
var aboutus = document.getElementById("aboutus");





// Insert Data




async function Add() {
    var ref = collection(db, "First Page");
    const docRef = await addDoc(
        ref, {
        EnglishName: in1.value,
        ArabicName: in2.value,
        Mail: in3.value,
        WhatsappNumber: in4.value,
        Summary: in5.value,
        Location: in6.value,
        Age: in7.value,
    }
    )

}
async function Add2() {
    var jobTitle = document.querySelectorAll('input[name="jobTitle"]:checked');

    let values = [];
    for (var i = 0; i < jobTitle.length; i++) 
    {
        values.push(jobTitle[i].value);
      }

    var ref = collection(db, "Second Page");
    const docRef = await addDoc(
        ref, {
        JobTitle: values,
        CollegeName: in8.value,
        StudyField: in9.value,
        GraduationYear: in10.value,
        degree: degr.value
    }
    )

}

async function Add3() {
    var ref = collection(db, "Third Page");
    const docRef = await addDoc(
        ref, {
        Experience: in11.value,
        LinkedIn: in12.value,
        Picture: in13.value,
        HourlyRate: in14.value,
        CVLink: not1.value,
        Life: not2.value,
        RoleModel: not3.value,
        SalesMarketing: check7,
        BusinessManagement: check8,
        SoftSkills: check9,
        HR: check10,
        Finance: check11,
    }
    )
}

async function Add4() {
    var ref = collection(db, "Fourth Page");
    const docRef = await addDoc(
        ref, {
        Bank: text_area.value
    }
    )
}

async function Add5() {
    var ref = collection(db, "Fifth Page");
    const docRef = await addDoc(
        ref, {
        EnglishSkills: englishSkills.value,
        Programming: programming.value,
        Availability: availability.value,
        Us: aboutus.value
    }
    )
}


next_1.addEventListener('click', Add);
next_2.addEventListener('click', Add2);
next_3.addEventListener('click', Add3);
next_4.addEventListener('click', Add4);
submit.addEventListener('click', Add5);