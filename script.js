document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to Energetic Tarot!");
  
    // Handle Booking Form Submission
    const bookingForm = document.getElementById("bookingForm");
    if (bookingForm) {
      bookingForm.addEventListener("submit", async (e) => {
        e.preventDefault();
  
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
  
        if (name && email && date && time) {
          try {
            const response = await fetch("http://localhost:3000/send-booking", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name, email, date, time }),
            });
  
            if (response.ok) {
              alert(`Thank you, ${name}. Your session is booked for ${date} at ${time}.`);
              bookingForm.reset(); // Clear the form
            } else {
              alert("Failed to send booking. Please try again.");
            }
          } catch (error) {
            console.error("Error:", error);
            alert("Error connecting to the server.");
          }
        } else {
          alert("Please fill out all fields.");
        }
      });
    }
  
    // Handle Contact Form Submission
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();
  
        const contactName = document.getElementById("contactName").value;
        const contactEmail = document.getElementById("contactEmail").value;
        const message = document.getElementById("message").value;
  
        if (contactName && contactEmail && message) {
          try {
            const response = await fetch("http://localhost:3000/send-query", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ contactName, contactEmail, message }),
            });
  
            if (response.ok) {
              alert(`Thank you, ${contactName}. We will get back to you soon.`);
              contactForm.reset(); // Clear the form
            } else {
              alert("Failed to send query. Please try again.");
            }
          } catch (error) {
            console.error("Error:", error);
            alert("Error connecting to the server.");
          }
        } else {
          alert("Please fill out all fields.");
        }
      });
    }
  
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  });
  