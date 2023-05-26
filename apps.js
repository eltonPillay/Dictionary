const apiurl = axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/hello')

const but = document.getElementById("searchbut");

but.addEventListener("click", function(event) {
    event.preventDefault();
    const search = document.getElementById("userin").value;
    console.log(search);
});




