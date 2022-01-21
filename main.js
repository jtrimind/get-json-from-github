
async function main() {
    const url = "https://jtrimind.github.io/get-json-from-github/table-item.json"
    const response = await fetch(url)
    const data = await response.json();
    console.log(data);
}

main();