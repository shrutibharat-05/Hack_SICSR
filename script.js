document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    // Redirect to landing page
    window.location.href = 'landing.html';
});

document.getElementById('signupForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Signup functionality to be implemented.');
});
