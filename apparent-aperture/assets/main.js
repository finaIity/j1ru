document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function (e) {
        // Only fade for .html links that are NOT index.html
        if (
            this.getAttribute('href').endsWith('.html') &&
            !this.getAttribute('href').includes('index.html')
        ) {
            e.preventDefault();
            const main = document.querySelector('main');
            main.classList.add('fade');
            setTimeout(() => {
                window.location = this.href;
            }, 300);
        }
    });
});