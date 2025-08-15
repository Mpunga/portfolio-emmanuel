
    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Theme toggle (light/dark)
    (function(){
      const btn = document.getElementById('themeToggle');
      const KEY = 'pref-theme';
      const apply = (mode) => {
        if(mode === 'light'){
          document.documentElement.style.setProperty('color-scheme','light');
          document.documentElement.classList.add('light');
          btn.textContent = '☀';
        } else {
          document.documentElement.style.setProperty('color-scheme','dark');
          document.documentElement.classList.remove('light');
          btn.textContent = '☾';
        }
      };
      let saved = localStorage.getItem(KEY) || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
      apply(saved);
      btn.addEventListener('click',()=>{
        saved = saved === 'light' ? 'dark' : 'light';
        localStorage.setItem(KEY, saved);
        apply(saved);
      });
    })();

    // Reveal on scroll (IntersectionObserver)
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); }
      })
    }, {threshold:.12});
    document.querySelectorAll('.reveal, .service, .project').forEach(el=> io.observe(el));

    // Simple mailto form
    function sendEmail(ev){
      ev.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const subject = encodeURIComponent('Contact depuis le portfolio');
      const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:contact@e-services.cd?subject=${subject}&body=${body}`;
    }
