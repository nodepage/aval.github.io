let task1 = document.getElementsByClassName("scale-95")[0];
let task2 = document.getElementsByClassName("scale-95")[1];
let task3 = document.getElementsByClassName("scale-95")[2];
let task4 = document.getElementsByClassName("scale-95")[3];
let task5 = document.getElementsByClassName("scale-95")[4];
let task6 = document.getElementsByClassName("scale-95")[5];
let task7 = document.getElementsByClassName("scale-95")[6];

window.addEventListener("load", function () {
  const params = new URLSearchParams(window.location.search);
  const param1 = params.get("param1");

  if (param1 == null || localStorage.getItem(param1) === null) {
    window.location.assign("./register.htm");
  } else {
    const uti = "https://api.playavalons.com/getTeam"; // Make sure to enclose the URL in quotes

    fetch(uti)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle the data received from the API here

        let tOver = data.total_users;
        let tAlex = data.alex_count;
        let tSteve = data.steve_count;

        let Overall = parseInt(tOver, 10);
        let teamAlex = Math.round((parseInt(tAlex, 10) / Overall) * 100);
        let teamSteve = Math.round((parseInt(tSteve, 10) / Overall) * 100);

        console.log("Team Alex Result:", teamAlex);
        console.log("Team Steve Result:", teamSteve);

        document.getElementById("teamAlexo").innerHTML = teamAlex + "%";
        document.getElementById("teamStevo").innerHTML = teamSteve + "%";
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch or parsing of JSON
        console.error("Error fetching data:", error);
      });

    let nu = JSON.parse(localStorage.getItem(param1));

    console.log(nu.team);

    let address = nu.address;

    let taskx1 = nu.task1;
    let taskx = nu.task2;
    let taskx3 = nu.task3;
    let taskx4 = nu.task4;
    let taskx5 = nu.task5;
    let taskx6 = nu.task6;

    console.log("TASSSSK1", taskx1);

    const url = `https://api.playavalons.com/getdata?address=${address}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        let teamI = data[0].team;
        let treasures = data[0].treasures;
        let referrals = data[0].referrals;
        let twitter = data[0].twitter;
        let referralId = data[0].referralId;
        let team = data[0].team;
        let task1 = data[0].task1;
        let task2 = data[0].task2;
        let task3 = data[0].task3;
        let task4 = data[0].task4;
        let task5 = data[0].task5;
        let task6 = data[0].task6;
        let task7 = data[0].task7;

        var newDatax = {
          address: address,
          referralId: referralId,
          referrals: referrals,
          treasures: treasures,
          twitter: twitter,
          team: team,
          task1: task1,
          task2: task2,
          task3: task3,
          task4: task4,
          task5: task5,
          task6: task6,
          task7: task7,
        };
        console.log("SEE CL", newDatax);

        if (task1 === "True") {
          let tasky1 = document.getElementsByClassName("scale-95")[0];
          tasky1.style.opacity = "0.5";

          tasky1.style.pointerEvents = "none";
        }

        if (task2 === "True") {
          let tasky2 = document.getElementsByClassName("scale-95")[1];
          tasky2.style.opacity = "0.5";

          tasky2.style.pointerEvents = "none";
        }

        if (task3 === "True") {
          let tasky3 = document.getElementsByClassName("scale-95")[2];
          tasky3.style.opacity = "0.5";

          tasky3.style.pointerEvents = "none";
        }

        if (task4 === "True") {
          let tasky4 = document.getElementsByClassName("scale-95")[3];
          tasky4.style.opacity = "0.5";

          tasky4.style.pointerEvents = "none";
        }

        if (task5 === "True") {
          let tasky5 = document.getElementsByClassName("scale-95")[4];
          tasky5.style.opacity = "0.5";

          tasky5.style.pointerEvents = "none";
        }

        if (task6 === "True") {
          let tasky6 = document.getElementsByClassName("scale-95")[5];
          tasky6.style.opacity = "0.5";

          tasky6.style.pointerEvents = "none";
        }

        if (task7 === "True") {
          let tasky7 = document.getElementsByClassName("scale-95")[6];
          tasky7.style.opacity = "0.5";

          tasky7.style.pointerEvents = "none";
        }

        localStorage.setItem(twitter, JSON.stringify(newDatax));

        updateUx(teamI, treasures, address, referrals, twitter, referralId);
      });

    let teamI = nu.team;
    let treasures = nu.treasures;

    let referrals = nu.referrals;
    let twitter = nu.twitter;
    let referralId = nu.referralId;

    let conv;
    var newTresure;

    async function updateData(data) {
      fetch("https://api.playavalons.com/updateTress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Convert object to JSON string
      }).then(console.log("SUCCCCCCESFUL"));
    }

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        let ta;

        ta = data[0];

        const handleTaskCompletion = (taskNumber, treasureIncrease) => {
          let treasures = parseInt(ta.treasures, 10); // Ensure ta.treasures is parsed as a number
          const newTreasure = treasures + treasureIncrease;

          console.log("Original treasures:", treasures);
          console.log("Treasure increase:", treasureIncrease);
          console.log("New treasure:", newTreasure);

          treasures = newTreasure; // Update treasures with the new value

          console.log("TA", ta);

          const Data = {
            treasures: newTreasure,
            referralId: referralId,
            task1: taskNumber === 1 ? "True" : ta.task1,
            task2: taskNumber === 2 ? "True" : ta.task2,
            task3: taskNumber === 3 ? "True" : ta.task3,
            task4: taskNumber === 4 ? "True" : ta.task4,
            task5: taskNumber === 5 ? "True" : ta.task5,
            task6: taskNumber === 6 ? "True" : ta.task6,
            task7: taskNumber === 7 ? "True" : ta.task7, // Add more tasks as needed
          };

          setTimeout(() => {
            window.location.reload();
          }, 1000);

          console.log("Data:", Data);
          updateData(Data);

          // Assuming updateData sends the data to the server and updates the UI

          // Update ta.treasures locally
          ta.treasures = treasures;

          const taskElement = document.getElementById(`task${taskNumber}`);
          if (taskElement) {
            taskElement.style.opacity = "0.5";
            taskElement.style.pointerEvents = "none";
          } else {
            console.log(`Task ${taskNumber} element not found.`);
          }

          // Update #trex element with new treasure value
          let tess = document.getElementById("trex");

          let fTress = formatNumber(newTreasure);
          tess.textContent = fTress; // Assuming #trex is a text element

          let trepz = document.getElementById("trep");
          trepz.textContent = fTress; // Assuming #trex is a text element
        };

        task1.addEventListener("click", () => handleTaskCompletion(1, 1000));
        task2.addEventListener("click", () => handleTaskCompletion(2, 1000));
        task3.addEventListener("click", () => handleTaskCompletion(3, 3000));
        task4.addEventListener("click", () => handleTaskCompletion(4, 5000));
        task5.addEventListener("click", () => handleTaskCompletion(5, 5000));
        task6.addEventListener("click", () => handleTaskCompletion(6, 5000));
        task7.addEventListener("click", () => handleTaskCompletion(7, 20000));
      });

    function updateUx(
      team,
      treasures,
      address,
      referrals,
      twitter,
      referralId
    ) {
      let imageElement = document.getElementById("teamImage");

      let tess = document.getElementById("trex");

      let addrez = document.getElementById("adk");

      let refValue = document.getElementById("refV");

      let trepz = document.getElementById("trep");

      let userx = document.getElementById("uss");

      let reflinkz = document.getElementById("reflink");

      if (team == "Alex") {
        imageElement.src = "../assets/team/Alex.jpeg";
      } else {
        imageElement.src = "../assets/team/steve.jpeg";
      }

      let fTress = formatNumber(treasures);
      let Saddress = shortenAddress(address);

      tess.innerHTML = fTress;
      addrez.innerHTML = Saddress;
      refValue.innerHTML = referrals;
      trepz.innerHTML = fTress;
      userx.innerHTML = twitter + ",";
      reflinkz.innerHTML = `https://farm.playavalons.com/register.htm?referral=${referralId}`;

      var copyText = document.getElementById("Inputref");
      copyText.value = `https://farm.playavalons.com/register.htm?referral=${referralId}`;

      reflinkz.addEventListener("click", function () {
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
        sucess("Referral link copied");
      });

      // Update the src attribute
    }
    updateUx(teamI, treasures, address, referrals, twitter, referralId);
  }
});

function shortenAddress(address) {
  // Check if the address is valid (length greater than 10)
  if (address.length > 10) {
    // Take the first 5 characters and the last 5 characters
    const shortenedAddress = address.slice(0, 5) + "..." + address.slice(-5);
    return shortenedAddress;
  } else {
    // Return the original address if it's too short
    return address;
  }
}

function formatNumber(number) {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + "K";
  } else {
    return number.toString();
  }
}

let showx = document.getElementById("copx");
let text1 = document.getElementById("txt1");
let contain = document.getElementById("cont");
let teamyz = document.getElementsByClassName("teamy")[0];
let rapx = document.getElementsByClassName("rap")[0];

let modal1 = document.getElementById("headlessui-portal-rootz");
let modal2 = document.getElementById("headlessui-portal-root");
let modal3 = document.getElementById("walletz");

var body = document.body;
let friendz = document.getElementById("frd");
let Boostx = document.getElementById("Boost");

let showWalletz = document.getElementById("showWallet");

let walletBg = document.getElementById("headlessui-dialog-overlay-:rp:");

let Xmodal2 = document.getElementById("headlessui-dialog-overlay-:rt:");

let Xmodal3 = document.getElementById("headlessui-dialog-overlay-:rb:");

function openModal1() {
  modal1.style.display = "block";
  body.classList.add("modal-open");
}

function closeModal1() {
  modal1.style.display = "none";
  body.classList.remove("modal-open");
}

function openModal2() {
  modal2.style.display = "block";
  body.classList.add("modal-open");
}

function closeModal2() {
  modal2.style.display = "none";
  body.classList.remove("modal-open");
}

function openModal3() {
  modal3.style.display = "block";
  body.classList.add("modal-open");
}

function closeModal3() {
  modal3.style.display = "none";
  body.classList.remove("modal-open");
}

friendz.addEventListener("click", function () {
  openModal2();
});

Xmodal3.addEventListener("click", function (ep) {
  closeModal2();
});

Boostx.addEventListener("click", function () {
  openModal1();
});

Xmodal2.addEventListener("click", function (es) {
  console.log(es.target.id);
  closeModal1();
});

showWalletz.addEventListener("click", function () {
  openModal3();
});

walletBg.addEventListener("click", function (event) {
  console.log(event.target.id);

  if (event.target.id === "headlessui-dialog-overlay-:rp:") {
    event.stopPropagation(); // Prevent the click event from reaching parent elements
    closeModal3(); // Call the closeModal3 function
  }
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

const params = new URLSearchParams(window.location.search);
const param1 = params.get("param1");

let nu = JSON.parse(localStorage.getItem(param1));

console.log(nu.team);

let teamI = nu.team;

function updateUx(team) {
  let imageElement = document.getElementById("teamImage");
  if (team == "Alex") {
    imageElement.src = "./assets/team/Alex.jpeg";
  } else {
    imageElement.src = "./assets/team/steve.jpeg";
  }

  // Update the src attribute
}
