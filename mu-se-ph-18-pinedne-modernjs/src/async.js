const fetch = require("node-fetch");

const myPromise = fetch("https://clinic.apps.mu-asia.manulife.com/visits/?doctor_id=1&patient_id=2");


console.log("Invoking fetch");
console.log(myPromise);


myPromise
  .then((response) => response.json())
  .then(data => console.table(data))
  .catch((err) => console.log(err));

 console.log("logging after promise code");


const myAsyncAwait = async () => {
  try {
    const response = await fetch("https://clinic.apps.mu-asia.manulife.com/doctors");
    const data = await response.json();
    console.log("After invoking fetch in asyncawait");
    console.table(data);
  } catch (err){
    console.log(err);
  }
}

myAsyncAwait();
console.log("MY Async await invoked");