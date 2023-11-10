const endDate = "14 August 2024 10:00 PM";

document.getElementById("endTime").innerHTML = endDate;

const input = document.querySelectorAll("input")

const clock = () => {
   const end = new Date(endDate);
   const now = new Date();
   const diff = (end - now) / 1000;
   if (diff < 0) return;
   // converted to days
   input[0].value = Math.floor(diff / 3600 / 24)
   //converted to hours
   input[1].value = Math.floor((diff / 3600) % 24)
   //converted to minutes
   input[2].value = Math.floor((diff / 60) % 60)
   //converted to seconds
   input[3].value = Math.floor(diff % 60)
}
// initial call
clock()


setInterval(
   () => {
      clock()
   }, 1000
)



/* calculation

1 day = 24 hours
1 hours = 60 min
i min = 60 sec */
