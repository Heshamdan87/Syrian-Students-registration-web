// This file contains JavaScript functions specific to the grades page, such as fetching and displaying grades from the backend.

async function fetchGrades() {
    try {
        const response = await fetch('/api/grades');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const grades = await response.json();
        displayGrades(grades);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

function displayGrades(grades) {
    const gradesContainer = document.getElementById('grades-container');
    gradesContainer.innerHTML = '';

    grades.forEach(grade => {
        const gradeElement = document.createElement('div');
        gradeElement.className = 'grade';
        gradeElement.textContent = `Subject: ${grade.subject}, Grade: ${grade.score}`;
        gradesContainer.appendChild(gradeElement);
    });
}

document.addEventListener('DOMContentLoaded', fetchGrades);