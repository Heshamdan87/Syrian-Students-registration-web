// This file contains JavaScript functions specific to the profile page, such as fetching and updating profile information.

document.addEventListener('DOMContentLoaded', function() {
    const profileForm = document.getElementById('profile-form');
    const profileDisplay = document.getElementById('profile-display');

    // Fetch profile information from the backend
    function fetchProfile() {
        fetch('/api/profile')
            .then(response => response.json())
            .then(data => {
                profileDisplay.innerHTML = `
                    <h2>${data.name}</h2>
                    <p>Email: ${data.email}</p>
                    <p>Grade: ${data.grade}</p>
                `;
            })
            .catch(error => console.error('Error fetching profile:', error));
    }

    // Update profile information
    profileForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(profileForm);
        const data = Object.fromEntries(formData.entries());

        fetch('/api/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            alert('Profile updated successfully!');
            fetchProfile(); // Refresh the profile display
        })
        .catch(error => console.error('Error updating profile:', error));
    });

    // Initial fetch of profile information
    fetchProfile();
});