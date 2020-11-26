const populateMenu = function() {

    let menuItems = {'Pizza' : 10 ,'Salad' : 5 ,'Pasta' : 8}

    let div = document.createElement('div');

    Object.keys(menuItems).forEach(key => {
        let li = document.createElement('li');
        div.appendChild(li);
        li.innerHTML = key + ' - ' + menuItems[key];
    });

    return div;
}

export default populateMenu;