function viewWork() {
    // You would implement the logic to navigate to the work section or display work
    console.log('View work button clicked');
  }
  
  document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for subscribing!');
  });

document.addEventListener('DOMContentLoaded', function() {
    var dynamicText = document.getElementById('dynamic-text');
    var phrase = "I am a software engineer.";
    var i = 0;
  
    function typeWriter() {
      if (i < phrase.length) {
        dynamicText.innerHTML += phrase.charAt(i);
        i++;
        setTimeout(typeWriter, 100); // Adjust typing speed by changing the timeout
      }
    }
  
    typeWriter();
  });
  