console.log("This is anurag website");
showBox();
let button = document.getElementById('myButton');
button.addEventListener('click', function (e) {
    let addtxt = document.getElementById('myTxt');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesarr = [];
    }
    else {
        notesarr = JSON.parse(notes);
    }
    notesarr.push(addtxt.value);
    addtxt.value = "";
    localStorage.setItem('notes', JSON.stringify(notesarr));
    showBox();
})



let searchButton = document.getElementById("searchValue");
searchButton.addEventListener('input', function (e) {
    let searchStr= searchButton.value;
    let cards=document.getElementsByClassName("noteCard");
    Array.from(cards).forEach(element=>
    {
        let cardTxt=element.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(searchStr))
        {
            element.style.display="block";
        }
        else
        {
            element.style.display="none";
        }
    });
})



function showBox() {
    let div = document.getElementById("innerdiv");
    let HTML = "";
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesarr = [];
    }
    else {
        notesarr = JSON.parse(notes);

        notesarr.forEach((element, index) => {
            HTML += `<div class="noteCard my-3 mx-3" style="width: 18rem;">
        <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <button onClick="deleteNode(${index})" class="btn btn-primary" id="${index}">Delete</button>
    </div >
  </div >`
        });
        if (notes.length != 0) {
            div.innerHTML = HTML;
        }
    }
}
function deleteNode(index) {
    let notes = localStorage.getItem('notes');
    notesarr = JSON.parse(notes);
    let k = 0;
    let notesarray = [];
    for (let i = 0; i < notesarr.length; i++) {
        if (i != index) {
            notesarray[k] = notesarr[i];
            k++;
        }
    }
    localStorage.setItem('notes', JSON.stringify(notesarray));
    showBox();
}
