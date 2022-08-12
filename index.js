
/** 7 data types in javascript
 * number
 * undefined
 * null
 * string
 * object
 * boolean
 * symbols
 */

/* const candidateNames = ["Chris", "Julius", "Sialo"]; // array of strings
const candidateVotes = [23, 76, 133]; // array of number */

const candidates = [ // array of object
    {
        name: "Chris", // Key Value Pair
        votes: 0,
        partyName: "Javascript",
        imageUrl: "./images/c3.png"
    },

    {
        name: "Julius", // Key Value Pair
        votes: 0,
        partyName: "GIT",
        imageUrl: "./images/c1.png"
    },

    {
        name: "Sialo", // Key Value Pair
        votes: 0,
        partyName: "Ruby",
        imageUrl: "./images/c2.png"
    }
];

//render all the candidate in html here using a for loop
for(let candidate of candidates){
    card(candidate);
}

function card( candiate ){

    //select the template that has the card elements
    const cardElement = document.getElementById('cardTemplate').content.cloneNode(true);
    //select the div that will contain the candidates
    const presidentTab = document.getElementById('president');

    //replace the name, partyname, votes and image with the candidate object attributes
    cardElement.querySelector('.name').innerHTML = candiate.name;
    cardElement.querySelector('.paryname').innerHTML = candiate.partyName;
    cardElement.querySelector('.votes').innerHTML = candiate.votes+' Votes';
    cardElement.querySelector('img').src = candiate.imageUrl;

    // append the candidate to the president div
    presidentTab.appendChild(cardElement);
    
    /* let cardElement = document.createElement('div');
    cardElement.className = 'card';
    // cardElement.innerHTML = ``;

    const image = document.createElement('img');
    image.src = './images/c1.png';

    cardElement.appendChild(image)

    document.body.insertBefore(cardElement, document.body.firstChild); */

    // return 
}

function vote( index ){
    
    const condidate = candidates[ index ];
    condidate.votes++; // increment by 1

    return condidate.votes;

}

/**
 * add click event to all the vote button by selecting them using 
 * document.querySelectorAll which returns a list of elements( buttons in this case)
 */
document.querySelectorAll('.voteBtn').forEach((btn, index)=>{
    //add the click event to this button
    btn.addEventListener('click', evt=>{
        //when the button is clicked add the selected class which gives the button
        // the tick element, check out this css properies in style.css
        btn.classList.add('selected');
        btn.innerHTML = '';

        //once you select this candidate, disable all the other button to prevent
        // voting for the second person
        document.querySelectorAll('.voteBtn').forEach(btn=>{
            btn.disabled = true;
        });

        /**
         * increment the number of votes of the candidate that was selected by 
         * calling the votes function which return the updated votes
         */
        btn.closest('div.card').querySelector('.votes').innerHTML = vote(index)+' Votes';
    });
});

