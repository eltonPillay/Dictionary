/*const apiurl = axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/hello')*/

const but = document.getElementById("searchbut");

but.addEventListener("click", async (event) => {
    event.preventDefault();
    try {
        const search = document.getElementById("userin").value;
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`);
        const apiurl = response.data[0];
        const pos = document.getElementById('postxt');
        const def = document.getElementById('deftxt');
        const word = document.getElementById('word');
        word.innerHTML = search;

        // Clear existing content in pos and def elements
        pos.innerHTML = '';
        def.innerHTML = '';

        // Loop through meanings array and add partOfSpeech values to pos element
        for (let i = 0; i < apiurl.meanings.length; i++) {
            const meaning = apiurl.meanings[i];
            const partOfSpeech = meaning.partOfSpeech;
            const posItem = document.createElement('h2');
            posItem.textContent = partOfSpeech;
            posItem.classList.add('postxt');
            pos.appendChild(posItem);
            
        
            // Get the first definition for the current part-of-speech
            const definition = meaning.definitions[0].definition;
            const defItem = document.createElement('li');
            defItem.textContent = definition;
            def.appendChild(defItem);
        }

        console.log(search);
        console.log(apiurl.meanings[0].partOfSpeech);
    } catch (error) {
        console.log("Error:", error);
    }
});




