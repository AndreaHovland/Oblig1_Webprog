let tickets =[];

function submitTicket(){
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const movie = document.getElementById('movie').value.trim();

    if(name === '' || email === '' || phone === '' ||movie ===''){
        alert('Vennligst fyll ut alle feltene.');
        return;
    }
    //Legg til billetten i arrayet
    tickets.push({name, email, phone, movie});

    //Oppdater visningen
    displayTickets();

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('movie').value = '';

}
//For å få knappen "Slet alle billettene"
function deleteAllTickets(){
    tickets = [];
    displayTickets();
}
function displayTickets(){
    const ticketList = document.getElementById('ticketList');
    ticketList.innerHTML = '';

    tickets.forEach(ticket=>{
        const li = document.createElement('li');
        li.textContent = `Navn: ${ticket.name}, E-post: ${ticket.email}, Telefon: ${ticket.phone}, Film: ${ticket.movie}`;
    });
}