const createNav = (id,options) => {
    let nav = document.createElement('nav');
    nav.setAttribute('id',id);

    options.forEach(element => {
        let li = document.createElement('li');
        li.setAttribute('id',`${element.toLowerCase()}Button`);
        li.setAttribute('class','navButton');
        li.innerHTML = element;
        nav.appendChild(li);
    })
    return nav;
}

const createHeader = (id) => {
    let header = document.createElement('header');
    header.setAttribute('id',id);
    header.innerHTML = `Pablo's`
    return header;
}

const createArticle = (id) => {
    let article = document.createElement('div');
    article.setAttribute('id',id);
    return article;
}

const createFooter = (id,content) => {
    let footer = document.createElement('footer');
    footer.setAttribute('id', id);
    footer.innerHTML = content;
    return footer;
}

const pageLoad = () => {
    let content = document.querySelector('#content'); 

    let nav = createNav('nav', ['ABOUT', 'HOURS' , 'MENU', 'CONTACT']);
    content.appendChild(nav);

    let header = createHeader('header');
    content.appendChild(header);

    let article = createArticle('main');
    content.appendChild(article);

    let footer = createFooter('footer','Developed by Douglas Colaco');
    content.appendChild(footer);
}

export default pageLoad;