let myLeads = []
const input = document.getElementById("input")
const sitesEl = document.getElementById("sites")
const inputBtn = document.getElementById("input-btn")
inputBtn.addEventListener("click", function () {
    myLeads.push(input.value)
    input.value = ""
    renderSites()

}
)

function renderSites() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
        <li>
            <a target = "_blank" href = "${myLeads[i]}">
            ${myLeads[i]}
            </a>
        </li>
        `
    }
    sitesEl.innerHTML = listItems
}