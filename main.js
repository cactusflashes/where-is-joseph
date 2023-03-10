import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

//API key & database ref
const firebaseConfig = {

    apiKey: "AIzaSyAqXbrfut6o2Fqf5oPYczouIXEmJnx2f_M",
    authDomain: "where-is-joseph.firebaseapp.com",
    databaseURL: "https://where-is-joseph-default-rtdb.firebaseio.com",
    projectId: "where-is-joseph",
    storageBucket: "where-is-joseph.appspot.com",
    messagingSenderId: "114864610218",
    appId: "1:114864610218:web:bd0419a350fda8409069d3",
    measurementId: "G-J6ZW0G0ENH"
  };
  
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  
  const header = document.getElementById('status');
  
  onValue(ref(database, 'selectedOption'), (snapshot) => {
      const selectedOption = snapshot.val();
      
      //update header with the new option 
      header.textContent = `${selectedOption}`;
  });
  
