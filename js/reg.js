let showx = document.getElementById("copx");
let clik = document.getElementById("clickx");
let text1 = document.getElementById("txt1");
let contain = document.getElementById("cont");
let teamyz = document.getElementsByClassName("teamy")[0];
let rapx = document.getElementsByClassName("rap")[0];

window.addEventListener("load", function () {
  const ref = new URLSearchParams(window.location.search);
  const refer = ref.get("referral");

  if (refer !== null) {
    const Refurl = `https://api.playavalons.com/getref?referralId=${refer}`;

    fetch(Refurl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        let currentUserz = data[0]
        
        let tappy = currentUserz.twitter

        if (localStorage.getItem(tappy) === null) {
            // const q = query(
            //   ref(database, "users/"),
            //   orderByChild("referralId"),
            //   equalTo(referralz)
            // );
  
            // get(q).then((snapshot) => {
            //   snapshot.forEach(function (childSnapshot) {
            //     var address = childSnapshot.val().address;
            //     var telegram = childSnapshot.val().telegram;
            //     var referrals = childSnapshot.val().referrals;
            //     var referralId = childSnapshot.val().referralId;
            let increaseRef = currentUserz.referrals;
            let increaseTres = currentUserz.treasures;
            console.log("UPdate", currentUserz);
            console.log(typeof currentUserz.referrals);
            console.log("Old 'referrals' value:", increaseRef);
            console.log("Old 'Tressure value:", increaseTres);
  
            let conv = parseInt(increaseRef, 10);

            let conv2 = parseInt(increaseTres, 10);
     
  
            var newD = conv + 1; // Increase 'conv' by 10
            var newTres = conv2 + 1000;
          
  
            // Create a new object with updated 'referrals' value
            const newData = {
              referrals: newD,
              referralId: currentUserz.referralId,
              treasures: newTres,
            };
  
        
  
            localStorage.setItem(tappy, JSON.stringify(newData));
            updateData(newData);
  
            function updateData(data) {
              fetch("https://api.playavalons.com/updateReferrals", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data), // Convert object to JSON string
              }).then(console.log("SUCCCCCCESFUL"));
            }
          } else {
        
          }


      });

      
  }
});

clik.addEventListener("click", function () {
  showx.style.display = "block";
});

let sigSub = document.getElementById("segx");

sigSub.addEventListener("click", function () {
  let SigVal = document.getElementById("Signin").value.trim(); // Move this line inside the event listener

  let SigVal2 = document.getElementById("Signiny").value.trim();

  if (SigVal.length > 40) {
    if (SigVal2.length == "") {
      failed("Enter Twitter username");
    } else {
      const url = `https://api.playavalons.com/getdata?address=${SigVal}`;

      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("CHECK", data[0]);

          if (typeof data[0] !== "undefined") {
            let oldUser = data[0];

            var newDatax = {
              address: oldUser.address,
              referralId: oldUser.referralId,
              referrals: oldUser.referrals,
              treasures: oldUser.treasures,
              twitter: oldUser.twitter,
              team: oldUser.team,
              task1: oldUser.task1,
              task2: oldUser.task2,
              task3: oldUser.task3,
              task4: oldUser.task4,
              task5: oldUser.task5,
              task6: oldUser.task6,
              task7: oldUser.task7,
            };
            console.log(newDatax);

            let Cuser = oldUser.twitter;

            localStorage.setItem(Cuser, JSON.stringify(newDatax));
            window.location.assign(
              "./index.htm?param1=" + encodeURIComponent(Cuser)
            );
          } else {
            text1.innerHTML = "Select Team";
            contain.style.display = "none";
            teamyz.style.display = "block";
            rapx.style.display = "flex";
            rapx.style.gap = "40px";
          }
        });
    }
  } else {
    failed("Enter a valid solana address!");
  }

  console.log(SigVal);
});

let displaz = document.getElementById("displayz");
let ToastyF = document.getElementById("ToastiFail");

function failed(val) {
  displaz.innerHTML = val;
  ToastyF.style.display = "block";

  setTimeout(() => {
    ToastyF.style.display = "none";
  }, 5000); // Adjust the time as needed
}
let displax = document.getElementById("displayx");
let ToastyS = document.getElementById("ToastifySuc");

function sucess(val) {
  displax.innerHTML = val;
  ToastyS.style.display = "block";

  setTimeout(() => {
    ToastyS.style.display = "none";
  }, 5000); // Adjust the time as needed
}

let cuf = document.getElementsByClassName("cog")[0];
let cuf2 = document.getElementsByClassName("cog")[1];

let tea1 = document.getElementsByClassName("team")[0];
let tea2 = document.getElementsByClassName("team")[1];

let texo = document.getElementsByClassName("cogText")[0];
let texo2 = document.getElementsByClassName("cogText")[1];

let teamValue = "";

cuf.addEventListener("click", function () {
  tea1.style.border = "5px solid red";
  texo.style.color = "red";

  tea2.style.border = "2px solid white";
  texo2.style.color = "white";

  teamValue = "Steve";
});

cuf2.addEventListener("click", function () {
  tea2.style.border = "5px solid red";
  texo2.style.color = "red";

  tea1.style.border = "2px solid white";
  texo.style.color = "white";

  teamValue = "Alex";
});

function generateShortUUID() {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let uuid = "";
  for (let i = 0; i < 6; i++) {
    uuid += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return uuid;
}

let conty = document.getElementById("continuex");

conty.addEventListener("click", function () {
  let addValue = document.getElementById("Signin").value.trim(); // Move this line inside the event listener

  let twitterVal = document.getElementById("Signiny").value.trim();

  const url = `https://api.playavalons.com/getdata?address=${addValue}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Handle successful response data
      console.log("New DATAA", typeof data[0] === "undefined");
      // Process the user data as needed

      let currentUserz = data[0];

      wow = currentUserz;
      // checkerz(wow); // Pass wow as an argument to checkerz
      // console.log("WOOOOOOW", window.wow);
      console.log("Windoooo", wow);
      console.log("GIIIIII", typeof wow === "object" && wow === null);

      if (typeof data[0] === "undefined") {
        console.log("NEW USER!!!!!");
        // alert("ERROR: Address mismatch");
        let referralId = generateShortUUID();
        let referrals = 0;
        let treasure = 0;

        var data = {
          address: addValue,
          referralId: referralId,
          referrals: referrals,
          treasures: treasure,
          twitter: twitterVal,
          team: teamValue,
        };

        // let jsonString = JSON.stringify(data); //Json covert data

        function sendDataToFirebase(data) {
          // set(ref(database, "users/" + addValue), data)
          //   .then()
          //   .catch((error) => {
          //     alert(error);
          //   });

          fetch("https://api.playavalons.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data), // Convert object to JSON string
          }).then( () =>{
            
            
  
              let Cuser = data.twitter;
  
              localStorage.setItem(Cuser, JSON.stringify(data));
              window.location.assign(
                "./index.htm?param1=" + encodeURIComponent(Cuser)
              );
          }
              
          );
        }

        // Example usage: send JSON data to Firebase
        sendDataToFirebase(data);

        // var tappy = `Data-${referralId}`

        // if (localStorage.getItem(tappy) === null) {
        //   localStorage.setItem(tappy, JSON.stringify(data));
        // } else {
        //   console.log("Local storage is not empty");
        // }
      } else {
        console.log("OLD USER!!!!!");

        let newRef = "EMpty";
        let newReferers = 0;

        // let currentUser;
        // const q = query(
        //   ref(database, "users/"),
        //   orderByChild("address"),
        //   equalTo(addValue)
        // );

        // get(q).then((snapshot) => {
        //   console.log(snapshot.val());
        //   currentUser = snapshot.val();
        //   // console.log("CURRRRRRENT", currentUser[addValue]);
        //   var wow = currentUser[addValue];
        // reader(fine);
        console.log("CURRRRRRENT", wow?.referrals);

        newRef = wow?.referralId;
        newReferers = wow?.referrals;

        console.log("Inside block", wow?.address);

        var tappy = `Data-${newRef}`;

        // if (localStorage.getItem(tappy) === null) {
        //   localStorage.setItem(tappy, JSON.stringify(wow));
        // } else {
        //   console.log("Local storage is not empty");
        // }
        updateUI(newRef, newReferers);
      }
    });

  if (teamValue === "") {
    failed("Select Team");
  } else {
  }
});
