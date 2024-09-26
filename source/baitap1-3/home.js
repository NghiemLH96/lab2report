fetch('./components/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    })
    .catch(error => console.log('Error loading header:', error));

fetch('./components/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.log('Error loading footer:', error));

fetch('./pages/content.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('page-content').innerHTML = data;
    })
    .catch(error => console.log('Error loading content:', error));