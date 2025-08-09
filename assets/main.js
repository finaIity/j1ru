document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.getAttribute('href').endsWith('.html')) {
            e.preventDefault();
            const main = document.querySelector('main');
            main.classList.add('fade');
            setTimeout(() => {
                window.location = this.href;
            }, 300);
        }
    });
});