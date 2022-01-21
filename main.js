function buildTable(data) {
    const items = data["item"];

    let table = document.createElement("table");

    // Add table head
    let tr = document.createElement("tr");
    for (const prop in items[0]) {
        let th = document.createElement("th");
        th.appendChild(document.createTextNode(prop));
        tr.appendChild(th);
    }
    table.appendChild(tr);

    for (const item of items) {
        let tr = document.createElement("tr");
        for (const prop in item) {
            let td = document.createElement("td");
            td.appendChild(document.createTextNode(item[prop]));
            tr.appendChild(td);            
        }        
        table.appendChild(tr);
    }

    return table;
}

async function main() {
    const url = "https://jtrimind.github.io/get-json-from-github/table-item.json"
    const response = await fetch(url)
    const data = await response.json();
    console.log(data);
    const table = buildTable(data);
    document.body.appendChild(table);
}

main();
