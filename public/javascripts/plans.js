
/* Selecting all popup and form div*/
const popup = document.querySelector('.popup_register');
// const form = document.querySelector('form');

// form.addEventListener('click', function(e) {
//     e.preventDefault();

//     if (!user) {
//         popup.style.display = 'block';
//     }
// })

// document.getElementById("protected-action").addEventListener("click", function(e) {
//   const isAuthenticated = this.dataset.authenticated === "true";

//   if (!isAuthenticated) {
//     e.preventDefault();
//     document.getElementById("auth-popup").style.display = "block";
//     return;
//   }
// });

/* DOM CONTENT LOADED */
// window.onload('DOMContentLoaded', () => {
    document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('.select-plan-form');
    const popup = document.getElementById('auth-popup-overlay');
    const closeBtn = document.getElementById('close-popup');
    // const protectedContainer = document.getElementById('protect-action');

    // Selectall containers with class 'protect-action'
    // const protectedContainers = document.querySelectorAll('#protect-action');
    // console.log(protectedContainers);

    //Selecting form for submission all plans
    // forms.addEventListener('submit', function() {
    forms.forEach((form) => {
        const container = form.closest('[data-authenticated]');
        
    if (!container) return

        const isAuthenticated = container.dataset.authenticated === 'true';


        form.addEventListener('submit', function(e) {
        if (!isAuthenticated) {
            e.preventDefault();
            document.getElementById('auth-popup-overlay').style.display = 'block';
            return false;
        }

        });

        });


    // protectedContainers.forEach((c) => {
        // console.log(c.textContent);
    // const allContainers = c;
    // allContainers.addEventListener('click')
    
    
    // const popup = document.getElementById('auth-popup-overlay');
    // const closeBtn = document.getElementById('close-popup');

    // if (!form || !protectedContainers) return;
    //  if (!form || !c) return;

    // const isAuthenticated = protectedContainer.dataset.authenticated === 'true';
//     const isAuthenticated = c.dataset.authenticated === 'true';
// // });

//     form.addEventListener('submit', function(e) {
//     if (!isAuthenticated) {
//     e.preventDefault();
//     document.getElementById('auth-popup-overlay').style.display = 'block';
//     return false;
//     }
// })

//     })

// const popup = document.getElementById('auth-popup-overlay');
//     const closeBtn = document.getElementById('close-popup');

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none'; // Hide modal
})

     // Optional: Close on outside click
    popup.addEventListener('click', (e) => {
    if (e.target === popup) {
    popup.style.display = 'none';
}
});

});

