window.onload=()=>{
    function print(taula){
        taula.forEach((el)=>{
            console.log(el);
            document.querySelector("#contenido").innerHTML+=`
                <tr>
                    <td>${el["ID"]}</td>
                    <td>${el["Nom i llinatges"]}</td>
                    <td>${el["Telefon"]}</td>
                    <td>${el["Especialitat"]}</td>
                    <td>${el["Departaments"]}</td>
                </tr>
            `;
        });
    }
   fetch('taula.json')
    .then(result => result.json())
    .then(data => print(data));
}