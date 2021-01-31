window.onload = () => {
    function addSublists(tabla,title) {
        let output = "";
        let subtablaArray = tabla[1];
        output += `<li class="list-group-item"><b>${title}</b>:</li>`;
        subtablaArray.forEach(item => {
            table = Object.entries(item);
            output += `
            <li class="list-group-item">
                <ul class="list-group list-group-flush">
                `
            for (let y = 0; y <= table.length - 1; y++) {
                output += `<li class="list-group-item"><b>${table[y][0]}</b>: ${table[y][1]}</li>`
            }
            output += `
                </ul>
            </li>
        `
        });
    console.log(output);
    return output;
    }

    // This add for each Object's property (array), an item
    function items(tabla, length) {
        let result = "";
        for (let x = 1; x <= length - 1; x++) {
            // if the item specified contents objects, create a sublist
            if (typeof (tabla[x][1][0]) == "object" && Object.keys(tabla[x][1][0]) != "0") {
                result += addSublists(tabla[x],tabla[x][0]);
            } else {
                result += `
                    <li class="list-group-item"><b>${tabla[x][0]}</b>: ${tabla[x][1]}</li>
                `
            }
        }
        return result;
    }

    // This adds a new card with the JSON's data specified
    function updateData(tabla) {
        console.log(tabla);
        for(x = 0; x <= tabla.length - 1; x++){
            let tablaArray = Object.entries(tabla[x]); // convert object in Array
            let length = tablaArray.length - 1;
            document.querySelector("body").innerHTML += `
                <div class="card w-50" style="width: 18rem; margin:auto;">
                    <img src="${tablaArray[length][1]}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${tablaArray[0][1]}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        ${items(tablaArray, length)}
                    </ul>
                </div>
                <br>
            `            
        }

    }

    // import the JSON files, and for each JSON, add a new card
    const JSON = ["crucero.json", "groupons.json", "jugador.json", "peli.json", "videojoc.json"];
    JSON.forEach(json => {
        fetch(json)
            .then(result => result.json())
            .then(data => updateData(data))
    });
}