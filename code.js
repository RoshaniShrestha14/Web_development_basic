// document.addEventListener("DOMContentLoaded", function() {
//     const startTimerButton = document.getElementById("start-timer");
//     const timerDisplay = document.getElementById("timer");
//     const exerciseText = document.getElementById("exercise-text");
    
//     // Array of breathing exercises
//     const exercises = [
//         "Breathe in deeply for 4 seconds, hold for 4 seconds, and exhale for 4 seconds.",
//         "Take a deep breath in for 5 seconds, hold for 5 seconds, then release slowly for 7 seconds.",
//         "Inhale slowly through your nose for 4 seconds, hold for 6 seconds, exhale slowly for 8 seconds.",
//         "Breathe in through your nose for 3 seconds, hold for 5 seconds, and breathe out through your mouth for 7 seconds.",
//         "Inhale deeply, count to 4, hold your breath for 7 seconds, exhale completely for 8 seconds."
//     ];

//     const endingMessage = "Thank you for completing these exercises. Wishing you good mental health!";

//     let timer; // Variable to store the interval timer
//     let currentExerciseIndex = 0; // Index of the current exercise being displayed
//     let timeLeft = 20; // Time left for each exercise

//     function startFlashCardTimer() {
//         // Reset the UI and variables
//         clearInterval(timer);
//         timeLeft = 20;
//         currentExerciseIndex = 0;
//         timerDisplay.innerText = timeLeft;
//         exerciseText.innerText = exercises[currentExerciseIndex];

//         // Start the countdown timer
//         timer = setInterval(function() {
//             timeLeft--; // Decrease the time left
//             timerDisplay.innerText = timeLeft;

//             if (timeLeft <= 0) {
//                 currentExerciseIndex++; // Move to the next exercise
//                 if (currentExerciseIndex < exercises.length) {
//                     // Show the next exercise
//                     exerciseText.innerText = exercises[currentExerciseIndex];
//                     timeLeft = 20; // Reset the time for the next exercise
//                 } else {
//                     // All exercises have been shown, display the ending message
//                     clearInterval(timer);
//                     exerciseText.innerText = endingMessage;
//                     timerDisplay.innerText = "";
//                 }
//             }
//         }, 1000); // Update every second (1000 ms)
//     }

//     // Event listener for the start button
//     startTimerButton.addEventListener("click", startFlashCardTimer);
// });


// script.js

// Stress Management Page - Timer Functionality
document.addEventListener('DOMContentLoaded', function () {
    const startButtons = document.querySelectorAll('#stress-management #start-timer');
    const timerElements = document.querySelectorAll('#stress-management #timer');
    const exercises = [
        {
            text: 'Box Breathing',
            description: 'Inhale through your nose for 4 counts, hold for 4 counts, exhale through your mouth for 4 counts, and hold again for 4 counts. Repeat.'
        },
        {
            text: 'Deep Breathing',
            description: 'Sit or lie down, place one hand on your chest and the other on your abdomen. Breathe deeply through your nose, letting your abdomen rise, then exhale slowly through your mouth.'
        },
        {
            text: '4-7-8 Breathing',
            description: 'Sit comfortably with a straight back. Inhale for 4 counts, hold for 7 counts, and exhale with a whoosh for 8 counts. Repeat.'
        },
        {
            text: 'Diaphragmatic Breathing',
            description: 'Lie down or sit comfortably. Place one hand on your chest, the other on your abdomen. Inhale slowly through your nose, letting your stomach rise, then exhale slowly through pursed lips.'
        },
        {
            text: 'Resonance Breathing',
            description: 'Breathe in for a count of 5 and then out for a count of 5. Keep the breathing smooth and even, and continue for 5 to 10 minutes.'
        }
    ];
    let currentExercise = 0;
    let interval;

    function startExercise() {
        if (currentExercise < exercises.length) {
            let countdown = 20;
            timerElements[currentExercise].innerText = countdown;
            interval = setInterval(() => {
                countdown--;
                timerElements[currentExercise].innerText = countdown;
                if (countdown === 0) {
                    clearInterval(interval);
                    currentExercise++;
                    if (currentExercise < exercises.length) {
                        startExercise();
                    } else {
                        document.querySelector('#stress-management .flash-card-container').innerHTML = '<h3>Thank you! Remember, every step towards managing stress is a step towards a healthier mind. Take care!</h3>';
                    }
                }
            }, 1000);
        }
    }

    startButtons.forEach(button => button.addEventListener('click', function () {
        if (!interval) startExercise();
    }));
});

// Therapist Contact Page - Send Message
document.addEventListener('DOMContentLoaded', function () {
    const therapistForm = document.querySelector('#therapist-contact form');
    therapistForm.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Your message has been sent to the therapist!');
        therapistForm.reset();
    });
});

// Contact Us Page - Display Thank You Message
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('#contact form');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Thank you for contacting us!');
        contactForm.reset();
    });
});

// Blog Page - Post Blog
document.addEventListener('DOMContentLoaded', function () {
    const blogForm = document.querySelector('#blog-form');
    const blogPostsContainer = document.querySelector('#blog-posts');

    blogForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const title = document.querySelector('#blog-title').value;
        const content = document.querySelector('#blog-content').value;

        const blogPost = document.createElement('div');
        blogPost.className = 'blog-post';
        blogPost.innerHTML = `<h4>${title}</h4><p>${content}</p>`;
        blogPostsContainer.appendChild(blogPost);

        alert('Your blog has been posted!');
        blogForm.reset();
    });
});
