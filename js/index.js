
// document.getElementById('contactForm').addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const data = Object.fromEntries(formData);

//     const response = await fetch('../api/contact.js', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
        
//     });
//     console.log(response);

//     const result = await response.json();
//     alert(result.message || result.error);
//     if (response.ok) {
//         window.location.href = 'https://camilagonzalez.ar';
//     }
// });
