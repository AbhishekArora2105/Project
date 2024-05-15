const contactForm = document.querySelector('#reviewForm');
const sendButton = contactForm.querySelector('input[type="button"]');

sendButton.addEventListener('click', (e) => {
  e.preventDefault();
  contactForm.submit();
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    fetch(contactForm.action, {
      method: 'POST',
      body: formData
    })
    .then(response => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error('There was a problem submitting your review. Please try again.');
        }
      })
    .then(data => {
        const email = data.split('=')[1];
        window.location.replace(`NewContactus.html#success?email=${email}`);
      })
    .catch(error => {
        console.error('Error:', error);
        alert('There was a problem submitting your review. Please try again.');
      });
  });

// document.getElementById('reviewForm').addEventListener('submit', function (event) {

//     event.preventDefault();
//     const formData = new FormData(event.target);
//     fetch(event.target.action, {
//         method: 'POST',
//         body: formData
//     })
//         .then(response => {

//             if (response.ok) {
//                 window.location.replace('NewContactus.html');
//             } else {
//                 alert('There was a problem submitting your review. Please try again.');
//             }
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             alert('There was a problem submitting your review. Please try again.');
//         });
// });
