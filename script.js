
let i = 0;

function add() {

    const NameField = document.getElementById('name')
    const PointsField = document.getElementById('points')
    const bodySection = document.querySelectorAll("tbody")[0];
    const row = bodySection.insertRow(0)
    naam = NameField.value;
    paise = PointsField.value;
    const newCell = row.insertCell();
    newCell.textContent = `${naam}`;
    const newCell2 = row.insertCell();
    newCell2.textContent = `${paise}`
    i++;
    console.log(i)

}

let arr = []
function add() {
    const NameField = document.getElementById('name')
    const PointsField = document.getElementById('points')

    let data = {
        Id: Date.now(),
        Name: NameField.value,
        Points: PointsField.value,
    }

    console.log(data)

    // arr.push(data)

    console.log(arr)



    // displayData()
}

function displayData() {
    const ele = document.getElementById('disdata');
    const newDiv = document.createElement('div.Participant');
    newDiv.innerHTML =
        `
            <h2>
                ${arr[i].data[1]}
            </h2>
            <h2>
                ${arr[i].data[1]}
            </h2>
            `;
    ele.appendChild(newDiv);
    console.log(`${arr[i].data[1]}`)
}
