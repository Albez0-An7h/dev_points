let arr = []
function add() {
    const NameField = document.getElementById('name')
    const PointsField = document.getElementById('points')

    let data = {
        Id: Date.now(),
        "Name": NameField.value,
        "Points": PointsField.value,
    }

    // console.log(data)

    arr.push(data)

    console.log(arr)



    DisplayData()
}

function DisplayData() {
    const ele = document.getElementById('disdata');
    const newDiv = document.createElement('div.Participant');
    for(i = 0;i<arr.length;i++){
    newDiv.innerHTML =
        `
        <div class="Participant">
            <h2>
                ${arr[i].Name}
            </h2>
            <h2>
                ${arr[i].Points}
            </h2>
        </div>
            `;
    ele.appendChild(newDiv);
    }
    console.log(arr)
    console.log(arr)
}
