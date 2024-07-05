const voteOne = document.querySelector('.voteOne');
const voteTwo = document.querySelector('.voteTwo');


const voteOneRejult = document.querySelector('.voteOneRejult');
const voteTwoRejult = document.querySelector('.voteTwoRejult');
const showVote = document.querySelector('.showVote');

voteOne.addEventListener('click', ()=>{
    voteOneRejult.innerHTML = "🙁221";
    showVote.innerHTML = "You : 01 <br> other : 220"
    
    
});

voteTwo.addEventListener('click',()=>{
    voteTwoRejult.innerHTML = "🙁200"
    showVote.innerHTML = "You : 01 <br> other : 220"
})