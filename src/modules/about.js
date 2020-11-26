const populateAbout = () => {
    let div = document.createElement('div')

    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');


    p1.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequatur pariatur vero repudiandae. Similique commodi pariatur accusantium ipsa. Nobis quod impedit nam sed, modi expedita laboriosam dolor aperiam soluta velit.`

    p2.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequatur pariatur vero repudiandae. Similique commodi pariatur accusantium ipsa. Nobis quod impedit nam sed, modi expedita laboriosam dolor aperiam soluta velit.`

    p3.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequatur pariatur vero repudiandae. Similique commodi pariatur accusantium ipsa. Nobis quod impedit nam sed, modi expedita laboriosam dolor aperiam soluta velit.`

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

    return div;
}

export default populateAbout;
