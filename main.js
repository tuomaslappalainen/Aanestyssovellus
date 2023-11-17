let aanestykset = [];
let aaniMaara = {};

function yllapito() {
    if(document.querySelector('#salasana').value == '123') {
        document.querySelector('#yllapitajasivu').style.display = "block";
        document.querySelector('#kayttajasivu').style.display = "none";
        document.querySelector('#kvalinta').style.display = "none";
    } else {
        alert("Väärä salasana");
    }
}

function kaytto() {
    document.querySelector('#yllapitajasivu').style.display = "none";
    document.querySelector('#kayttajasivu').style.display = "block";
    document.querySelector('#kvalinta').style.display = "block";
}


function addVote() {
    if(aanestykset.includes(document.querySelector('#voteText').value)) {
        alert("Tämä äänestys on jo olemassa!");
        return;
    } else if(document.querySelector('#voteText').value == "") {
        alert("Äänestyksen aihe puuttuu!");
        return;
    } else if(document.querySelector('#vaihtoEhto1').value == "" || document.querySelector('#vaihtoEhto2').value == "") {
        alert("Yksi tai molemmat äänestyksen vaihtoehdoista puuttuu!");
        return;
    }

    let a = document.querySelector('#voteText').value;
    let vote = document.createElement('div');
    vote.id = a;
    aanestykset.push(a);

    vaihtoehto1 = document.querySelector('#vaihtoEhto1').value
    vaihtoehto2 = document.querySelector('#vaihtoEhto2').value

    let v1 = "v1of" + a;
    let v2 = "v2of" + a;
    aaniMaara[v1] = 0;
    aaniMaara[v2] = 0;

    let button1 = document.createElement('input');
    button1.type = "button";
    button1.id = "option1of" + a;
    button1.value = vaihtoehto1 + " (0 ääntä)";
    button1.onclick = function() {
        aaniMaara[v1] += 1;
        button1.value = vaihtoehto1 + " (" + aaniMaara[v1] + " ääntä)";
    };
    button1.style = "margin: 4px"

    let button2 = document.createElement('input');
    button2.type = "button";
    button2.id = "option2of" + a;
    button2.value = vaihtoehto2 + " (0 ääntä)";
    button2.onclick = function() {
        aaniMaara[v2] += 1;
        button2.value = vaihtoehto2 + " (" + aaniMaara[v2] + " ääntä)";
    };
    button2.style = "margin: 4px"

    vote.appendChild(document.createTextNode(a));
    vote.appendChild(button1);
    vote.appendChild(button2);

    document.querySelector('#aanestyslista').appendChild(vote);
    console.log(aaniMaara);
}

function removeVote() {
    let a = document.querySelector('#voteText').value;
    let index = aanestykset.indexOf(a);
    aanestykset.splice(index, 1);
    document.querySelector(`#${a}`).remove();
}

document.querySelector('#yp').onclick = yllapito;
document.querySelector('#kirjauduUlos').onclick = kaytto;
document.querySelector('#addVoteBtn').onclick = addVote;
document.querySelector('#removeVoteBtn').onclick = removeVote;
