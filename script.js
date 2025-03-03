//your JS code here. If required.
document.getElementById('voting-form').addEventListener('submit', function (e) {
  e.preventDefault();  // Prevent form from submitting traditionally

  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;

  // Input validation
  if (!name || !age) {
    alert("Please enter valid details.");
    return;
  }

  // Create promise and handle the resolution/rejection
  const votingEligibilityPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (parseInt(age) >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);  // Simulate delay with 4 seconds
  });

  // Handle promise resolution and rejection
  votingEligibilityPromise
    .then((message) => alert(message))
    .catch((message) => alert(message));
});
