document.getElementById('issue').addEventListener('change', function () {
  const issueBox = document.getElementById('issueBox');
  issueBox.style.display = this.value ? 'block' : 'none';
});

function showStep2() {
  document.getElementById('step1').style.display = 'none';
  document.getElementById('step2').style.display = 'block';
}

function showStep3() {
  document.getElementById('step2').style.display = 'none';
  document.getElementById('step3').style.display = 'block';
}

function showLogoAndCase() {
  const support = document.getElementById('supportSelect').value;
  const logoContainer = document.getElementById('supportLogoContainer');
  const caseContainer = document.getElementById('caseIdContainer');

  logoContainer.innerHTML = '';
  caseContainer.style.display = 'none';

  if (support) {
    const logo = document.createElement('img');
    logo.src = support + '.png'; // Example: apple.png, google.png etc.
    logo.alt = support + " logo";
    logoContainer.appendChild(logo);
    caseContainer.style.display = 'block';
  }
}

function checkCaseID() {
  const input = document.getElementById('caseIdInput').value;
  const details = document.getElementById('technicianDetails');
  if (input === '778249') {
    details.innerHTML = `
      <p><strong>Technician Name:</strong> Jacob Miller</p>
      <p><strong>Experience:</strong> 6+ Years in Cybersecurity</p>
      <p><strong>Department:</strong> Remote Support Operations</p>
    `;
  } else {
    details.innerHTML = '';
  }
}

document.getElementById('complaintForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('step3').style.display = 'none';
  document.getElementById('finalMessage').style.display = 'block';
});
