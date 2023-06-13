document.getElementById("submit-btn").addEventListener("click", function(event) {
  event.preventDefault();

  var rating = document.getElementById("rating").value;
  var activities = document.getElementById("activities").value;
  var notes = document.getElementById("notes").value;
  var date = new Date().toLocaleDateString();

  addMoodEntry(date, rating, activities, notes);

  // Clear input fields after submission
  document.getElementById("rating").value = "";
  document.getElementById("activities").value = "";
  document.getElementById("notes").value = "";
});

function addMoodEntry(date, rating, activities, notes) {
  var moodEntries = document.getElementById("mood-entries");

  var row = document.createElement("tr");
  row.innerHTML = "<td>" + date + "</td><td>" + rating + "</td><td>" + activities + "</td><td>" + notes + "</td>";

  moodEntries.appendChild(row);
}
