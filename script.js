document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    // Redirect to landing page
    window.location.href = 'landing.html';
});

document.getElementById('signupForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Successfully signed up!');
});
document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const messageDiv = document.getElementById('message');
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    // Check if a file is selected
    if (!file) {
        messageDiv.textContent = "Please select a file.";
        messageDiv.classList.remove('hidden');
        return;
    }

    // Validate the file type (only allow images)
    const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!validImageTypes.includes(file.type)) {
        messageDiv.textContent = "File cannot be verified. Please upload a valid image (JPG, PNG, GIF).";
        messageDiv.classList.remove('hidden');
        return;
    }

    // Validate the file size (limit to 5MB)
    const maxSizeInBytes = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSizeInBytes) {
        messageDiv.textContent = "File cannot be verified. Please upload an image smaller than 5MB.";
        messageDiv.classList.remove('hidden');
        return;
    }

    // Show verifying message
    messageDiv.textContent = "We are verifying your file...";
    messageDiv.classList.remove('hidden');

    // Simulate file verification with a timeout
    setTimeout(() => {
        // Clear the file input
        fileInput.value = '';
        // Show success message
        messageDiv.textContent = "File has been uploaded and verified successfully.";
    }, 10000); // 10 seconds delay
});
