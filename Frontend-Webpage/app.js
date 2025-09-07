document.addEventListener('DOMContentLoaded', () => {
    // Initialize the application
    console.log('Application initialized');

    // Set up routing
    const routes = {
        '/': () => {
            window.location.href = 'index.html';
        },
        '/grades': () => {
            window.location.href = 'grades.html';
        },
        '/profile': () => {
            window.location.href = 'profile.html';
        }
    };

    const handleRouteChange = () => {
        const path = window.location.pathname;
        if (routes[path]) {
            routes[path]();
        } else {
            console.error('Route not found:', path);
        }
    };

    // Event listeners for navigation
    document.getElementById('nav-grades').addEventListener('click', () => {
        window.history.pushState({}, '', '/grades');
        handleRouteChange();
    });

    document.getElementById('nav-profile').addEventListener('click', () => {
        window.history.pushState({}, '', '/profile');
        handleRouteChange();
    });

    // Handle initial route
    handleRouteChange();
});