function validate() {
    let email = document.getElementById('email');
    email.addEventListener('change', onChange);

    function onChange(event) {
        let pattern = /\b([a-z]+@[a-z]+\.[a-z]+)\b/g;
        if(event.target.value.match(pattern)) {
           event.target.classList.remove('error');
        } else {
            event.target.classList.add('error');
        }
    }
}