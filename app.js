// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getDatabase,set,get,ref,push,onChildAdded } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";  

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCLzwCsfyzMmmBqrTGfrYDgiS2kBTt6Z5k",
  authDomain: "studentregistration-umer.firebaseapp.com",
  databaseURL: "https://studentregistration-umer-default-rtdb.firebaseio.com",
  projectId: "studentregistration-umer",
  storageBucket: "studentregistration-umer.appspot.com",
  messagingSenderId: "799368019618",
  appId: "1:799368019618:web:8d032fe1a8ba06dc3ae1fb",
  measurementId: "G-BN4FHG89DD"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

// Reference Database
//firebase.database().ref('studentregistration');


const frm = document.getElementById("registrationForm").addEventListener("submit",updateRegistration);



function updateRegistration(e){
  e.preventDefault();


  var fullName = getInputElementVal("fullName");
  var fatherName = getInputElementVal("fatherName");
  var email = getInputElementVal("email");
  var phoneno = getInputElementVal("phoneno");
  var cnic = getInputElementVal("cnic");
  var dob = getInputElementVal("dob");
  var gender = getInputElementVal("gender");
  var cnic = getInputElementVal("cnic");
  var fathercnic = getInputElementVal("fathercnic");
  var address = getInputElementVal("address");
  var qualification = getInputElementVal("qualification");
  var isLapTop = getInputElementVal("isLapTop");
  var city = getInputElementVal("city");
  var course = getInputElementVal("course");

  saveStudentRegist(fullName,fatherName,email,phoneno,cnic,fathercnic,dob,gender,address,qualification,isLapTop,city,course);
}

const saveStudentRegist = (fullName,fatherName,email,phoneno,cnic,fathercnic,dob,gender,address,qualification,isLapTop,city,course) =>{

  

  var studObj={
      fullName : fullName,
      fatherName:fatherName,
      email : email,
      phoneno:phoneno,
      cnic : cnic,
      fathercnic:fathercnic,
      dob:dob,
      gender:gender,
      address:address,
      qualification:qualification,
      isLapTop:isLapTop,
      city:city,
      course:course
  }
  studObj.id = push(ref(db,'studentregistration/')).key;
  var studentDB = ref(db,`studentregistration/${studObj.id}`) ;
  set(studentDB,studObj);
  getDataFromDB();
} 


function getDataFromDB(){
  var studentDB =ref(db,'studentregistration/') ;
  onChildAdded(studentDB,function(data){
    console.log(data.val());

  })
}


function openFileUpload() {
  document.getElementById("hiddenFile").click();
}

const getInputElementVal = (id) =>{
  return  document.getElementById(id).value;
}