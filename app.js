const currentDate = document.querySelector(".current-date"),
daysTag = document.querySelector(".days"),
prevNextIcon = document.querySelectorAll(".icons span");


// getting new date, current year and month
let date = new Date(),
currentYear = date.getFullYear(),
currentMonth = date.getMonth();

// console.log(date, currentMonth, currentYear);

const month = ["January", "February", "March", "April", "May", "June", "July",
"August", "September", "October", "November", "December"];


const renderCalendar = () => {
  let lastDateofMonth = new Date(currentMonth, currentYear + 1, 0).getDate();//getting last date of month
  let liTag = "";
 
  //getting all month dates
  for (let i = 1; i <lastDateofMonth; i++){
      liTag += `<li>${i}</li>`;

}

  currentDate.innerText = `${month[currentMonth]} ${currentYear}`; 
  daysTag.innerHTML = liTag;
}
renderCalendar()

prevNextIcon.forEach(icon => {
  icon.addEventListener("click", () =>{ //adding click event on boath icons
    //if clickef icon is previous icon than decrement current month by 1 else increment it by 1
    currentMonth = icon.id === "prev" ? currentMonth - 1 : currentMonth +1; 
  })
});