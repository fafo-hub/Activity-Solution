document.addEventListener('DOMContentLoaded', () => {
    fetch(`https://worldtimeapi.org/api/ip`).then(response => response.json()).then(data => {
    document.querySelector('.time-zone').innerText = data.timezone;
    document.querySelector('#date-time').value = new Date(data.datetime).toDateString() + ',' + new Date(data.datetime).toTimeString();
    document.querySelector('#client-api').value = data.client_ip;
    document.querySelector('#t-z').value = data.timezone;
    })
})

function evolve() {
    var e = document.querySelector('.continent')
    var selfrst = e.value
    console.log(selfrst);
    
    fetch(`https://worldtimeapi.org/api/timezone/${selfrst}`).then(response => response.json()).then(data => {
        let theTimeZoneList =  data.join('<br/>')
        document.querySelector('.display-time-zone').innerHTML = theTimeZoneList;
    })
}