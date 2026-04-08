function calculate() {
  let marks = document.getElementById("marks").value;

  if (marks === "") {
    document.getElementById("result").innerText = "Please enter marks!";
    return;
  }

  let cgpa = (marks / 9.5).toFixed(2);

  document.getElementById("result").innerText = "Your CGPA is: " + cgpa;
}