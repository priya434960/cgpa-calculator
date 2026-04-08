let subjectCount = 0;

function addSubject() {
  subjectCount++;

  let div = document.createElement("div");
  div.innerHTML = `
    <input type="number" placeholder="Marks" id="marks${subjectCount}">
    <input type="number" placeholder="Credits" id="credits${subjectCount}">
  `;

  document.getElementById("subjects").appendChild(div);
}

function calculate() {
  let totalPoints = 0;
  let totalCredits = 0;

  for (let i = 1; i <= subjectCount; i++) {
    let marks = document.getElementById(`marks${i}`).value;
    let credits = document.getElementById(`credits${i}`).value;

    if (marks && credits) {
      let gradePoint = marks / 9.5;
      totalPoints += gradePoint * credits;
      totalCredits += Number(credits);
    }
  }

  if (totalCredits === 0) {
    document.getElementById("result").innerText = "Add subjects first!";
    return;
  }

  let cgpa = (totalPoints / totalCredits).toFixed(2);

  document.getElementById("result").innerText = "CGPA: " + cgpa;
}

function resetAll() {
  document.getElementById("subjects").innerHTML = "";
  document.getElementById("result").innerText = "";
  subjectCount = 0;
}

function toggleMode() {
  document.body.classList.toggle("dark");
}