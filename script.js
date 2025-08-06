
// ===== Scroll Animations (Intersection Observer) =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fadeInUp');
    }
  });
});
document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

// ===== Light/Dark Theme Switcher =====
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});
if(localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

// ===== Typing Text Effect =====
const roles = ['Full Stack Developer', 'Java Enthusiast', 'UI/UX Explorer'];
let i = 0;
function typeEffect() {
  document.getElementById('dynamic-role').textContent = roles[i];
  i = (i + 1) % roles.length;
}
setInterval(typeEffect, 2000);

// ===== Smooth Scrolling to Sections =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// ===== Animated Counters =====
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  counter.innerText = '0';
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / 200;
    if(count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});

// ===== AJAX Form Submission =====
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  fetch('YOUR_BACKEND_API_URL', {
    method: 'POST',
    body: formData
  }).then(response => {
    alert('Message Sent Successfully!');
  }).catch(error => {
    alert('Failed to Send Message');
  });
});



// Initialize EmailJS
(function(){
  emailjs.init("vyZTKclylO5ECQXyW");
})();

// Handle Form Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.sendForm('service_uloq585', 'template_3xybh6a', this)
    .then(function() {
      const messageEl = document.getElementById('form-message');
      messageEl.textContent = "✅ Message Sent Successfully!";
      messageEl.classList.remove('hidden');
      messageEl.classList.add('text-green-500');
      document.getElementById('contact-form').reset();
    }, function(error) {
      const messageEl = document.getElementById('form-message');
      messageEl.textContent = "❌ Failed to send message. Please try again.";
      messageEl.classList.remove('hidden');
      messageEl.classList.add('text-red-500');
    });
});


