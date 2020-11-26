let populateHours = () => {
    let div = document.createElement('div');
    let hoursList = {
        'Monday':'9am - 10pm',
        'Tuesday':'9am - 10pm',
        'Wednesday':'9am - 10pm',
        'Thursday':'9am - 10pm',
        'Friday':'9am - 10pm',
        'Saturday':'10am - 6pm',
        'Sunday':'10am - 6pm',
    }

    Object.keys(hoursList).forEach(key => {
        let li = document.createElement('li');
        li.innerHTML = `${key} : ${hoursList[key]}`;
        div.appendChild(li);
    });

    return div;
 }

 export default populateHours;