const form = document.querySelector("#form")
const eventTitle = document.querySelector("#eventitle")
const eventDate = document.querySelector("#eventDate")
const category = document.querySelector("#category")
const description = document.querySelector("#description")
const eventcards = document.querySelector(".cards")
const clearAllBtn = document.querySelector("#clearAll")
const addSampleBtn = document.querySelector("#addSample")

form.addEventListener("submit", function(event){
    event.preventDefault()

    const title = eventTitle.value
    const date = eventDate.value
    const cat = category.value
    const desc = description.value

    const card = document.createElement("div")
    card.classList.add("card")

    card.innerHTML = `
        <div class="deletecard">X</div>
        <h3>${title}</h3>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Category:</strong> ${cat}</p>
        <p>${desc}</p>
    `

    eventcards.appendChild(card)

    form.reset()
})


// Delete card using event delegation
eventcards.addEventListener("click", function(e){
    if(e.target.classList.contains("deletecard")){
        e.target.parentElement.remove()
    }
})


// Clear all cards
clearAllBtn.addEventListener("click", function(){
    eventcards.innerHTML = ""
})


// Add sample events
addSampleBtn.addEventListener("click", function(){

    const sampleData = [
        {title: "Tech Conference", date: "2026-03-10", cat: "conference", desc: "Big tech event"},
        {title: "React Workshop", date: "2026-04-15", cat: "workshop", desc: "Learn React basics"},
        {title: "Community Meetup", date: "2026-05-20", cat: "meetup", desc: "Networking event"}
    ]

    sampleData.forEach(function(item){

        const card = document.createElement("div")
        card.classList.add("card")

        card.innerHTML = `
            <div class="deletecard">X</div>
            <h3>${item.title}</h3>
            <p><strong>Date:</strong> ${item.date}</p>
            <p><strong>Category:</strong> ${item.cat}</p>
            <p>${item.desc}</p>
        `

        eventcards.appendChild(card)
    })
})