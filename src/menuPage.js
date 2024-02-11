export default function getMenuPage () {
    const menuHolder = document.createElement('div');
    for (let i = 0; i < 5; i++) {
        const menuContent = document.createElement('div');
        const menuTitle = document.createElement('div');
        const menuText = document.createElement('div');
        const menuPicHolder = document.createElement('div');

        menuTitle.textContent = `Tasty dish #${i}`
        menuText.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti velit laborum alias, possimus ducimus, atque impedit accusantium magnam adipisci explicabo minus ullam aspernatur, voluptatum eaque quae doloribus quos ab illo!'
        menuPicHolder.textContent = 'placeholder';

        menuContent.classList.add('menu-content');
        menuTitle.classList.add('menu-title');
        menuText.classList.add('menu-text');
        menuPicHolder.classList.add('menu-pic');
        
        menuContent.append(menuTitle, menuText, menuPicHolder);
        menuHolder.appendChild(menuContent);
    }
    menuHolder.classList.add('menu-holder');
    return menuHolder;
}