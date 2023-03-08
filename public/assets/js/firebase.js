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
import{getDatabase,ref,set,child,update,remove}
from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
const db=getDatabase();

var in1=document.getElementById("in1");
var in2=document.getElementById("in2");
var in3=document.getElementById("in3");
var in4=document.getElementById("in4");
var in5=document.getElementById("in5");
var in6=document.getElementById("in6");
var in7=document.getElementById("in7");
var in8=document.getElementById("in8");
var in9=document.getElementById("in9");
var in10=document.getElementById("in10");
var in11=document.getElementById("in11");
var in12=document.getElementById("in12");
var in13=document.getElementById("in13");
var in14=document.getElementById("in14");
var check1=document.getElementById("check1").checked?document.getElementById("check1").value:'';
var check2=document.getElementById("check2").checked?document.getElementById("check2").value:'';
var check3=document.getElementById("check3").checked?document.getElementById("check3").value:'';
var check4=document.getElementById("check4").checked?document.getElementById("check4").value:'';
var check5=document.getElementById("check5").checked?document.getElementById("check5").value:'';
var check6=document.getElementById("check6").checked?document.getElementById("check6").value:'';
var check7=document.getElementById("check7").checked?document.getElementById("check7").value:'';
var check8=document.getElementById("check8").checked?document.getElementById("check8").value:'';
var check9=document.getElementById("check9").checked?document.getElementById("check9").value:'';
var check10=document.getElementById("check10").checked?document.getElementById("check10").value:'';
var check11=document.getElementById("check11").checked?document.getElementById("check11").value:'';
var Other=document.getElementById("Other");
var Other2=document.getElementById("Other2");
var next_1=document.getElementById("next_1");
var next_2=document.getElementById("next_2");
var next_3=document.getElementById("next_3");
var next_4=document.getElementById("next_4");
var not1=document.getElementById("not1");
var not1=document.getElementById("not2");
var not1=document.getElementById("not3");
var text_area=document.getElementById("text_area");
var gender=document.querySelector('input[name="gender"]:checked').value;
var submit=document.getElementById("submit");


// Insert Data

function InsertData(){
    set(ref(db,"First Page/"),{
        EnglishName: in1.value,
        ArabicName: in2.value,
        Mail: in3.value,
        WhatsappNumber: in4.value,
        Summary: in5.value,
        Location:in6.value,
        Age:in7.value,
        gender:gender
       
    }) 

}
function InsertData2(){
    set(ref(db,"SecondPage/"),{
        
        IndividualContributor: check1,
        MiddleManager: check2,
        SeniorManager: check3,
        DirectorVP: check4,
        CSuite: check5,
        Founder:check6,
        Other:Other.value,
        CollegeName:in8.value,
        StudyField:in9.value,
        GraduationYear:in10.value
    }) 
}
function InsertData3(){
    set(ref(db,"ThirdPage/"),{
        
        Experience: in11.value,
        LinkedIn: in12.value,
        Picture: in13.value,
        HourlyRate: in14.value,
        CVLink:not1.value,
        Life:not2.value,
        RoleModel:not3.value,
        Other:Other2.value,
        SalesMarketing:check7,
        BusinessManagement:check8,
        SoftSkills:check9,
        HR:check10,
        Finance:check11,
       
    }) 
}

function InsertData4(){
    set(ref(db,"FourthPage/"),{
        
        Bank:text_area.value
    }) 
}





next_1.addEventListener('click',InsertData);
next_2.addEventListener('click',InsertData2);
next_3.addEventListener('click',InsertData3);
next_4.addEventListener('click',InsertData4);




    
