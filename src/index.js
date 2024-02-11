const navInit = (() => {
    const navBtns = document.querySelectorAll('.navbtn');
    navBtns.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            switch (event.target.id) {
                case 'home':
                    console.log('home')
                    break;
                case 'menu':
                    break;
                case 'about':
                    break;
            }
        })
    })
})()