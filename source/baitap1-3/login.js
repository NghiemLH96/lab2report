fetch('./components/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    })
    .catch(error => console.log('Error loading header:', error));

// Tải footer
fetch('./components/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.log('Error loading footer:', error));

const loginFn = (e) => {
    e.preventDefault();
    const acc = e.target.acc.value;
    const pw = e.target.pw.value;
    if (acc && pw) {
        window.location.href="./home.html"
    }else{
        alert("Should enter your info first!")
    }
}