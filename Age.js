const btnEl = document.getElementById('btn');
const inputDate= document.getElementById('birthday');
const resultElem = document.getElementById("result");

function calculateAge(){
  const birthdayValue = inputDate.value;
  console.log(birthdayValue);

  if (birthdayValue === ""){
    alert("please enter your birthday");
  }else{
    const age = getAge(birthdayValue);
    resultElem.innerText = `Your Age is ${age} ${age > 1 ? "years" : "year"} old`;
  }

}
function getAge(birthdayValue){
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);

  let age = currentDate.getYear() - birthdayDate.getYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())){
    age--; 
  }

 return age;

}

btnEl.addEventListener('click', calculateAge);
