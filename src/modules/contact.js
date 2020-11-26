let populateContact = () => {
    let div = document.createElement('div');
    let pAddressLine1 = document.createElement('p');
    pAddressLine1.innerHTML = '17 Pura Vida Lane';
    let pAddressLine2 = document.createElement('p');
    pAddressLine2.innerHTML = 'Samara, Costa Rica'
    let pTelephone = document.createElement('p');
    pTelephone.innerHTML = '647-771-2828'

    div.appendChild(pAddressLine1);
    div.appendChild(pAddressLine2);
    div.appendChild(pTelephone)

    return div;
}

export default populateContact;