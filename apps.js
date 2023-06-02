/*const apiurl = axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/hello')*/

const but = document.getElementById("searchbut");

but.addEventListener("click", async (event) => {
  event.preventDefault();
  try {
    const search = document.getElementById("userin").value;
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
    );
    const apiurl = response.data[0];
    const pos = document.getElementById("postxt");
    const def = document.getElementById("deftxt");
    const word = document.getElementById("word");
    const maincon = document.getElementById("mainbody");
    word.innerHTML = search;

    

    // Loop through meanings array and add partOfSpeech values to pos element
    for (let i = 0; i < apiurl.meanings.length; i++) {
      const meaning = apiurl.meanings[i];
      const partOfSpeech = meaning.partOfSpeech;
      const definition = meaning.definitions[0].definition;

      const htmlcon = `<div class="container partsofspeech">
                            <div class="row align-items-center">
                                <div class="col-md-1 col-xs-12" id="postxt-${i}">
                                    <h7 class="postxt">${partOfSpeech}</h7>
                                </div>
                                <div class="col-md-11 col-xs-12" id="deftxt-${i}">
                                    <h7 class="deftxt">${definition}</h7>
                                </div>
                            </div>
                            <div class="break2"></div>
                        </div>`;

      maincon.innerHTML += htmlcon;
    }
    console.log(search);
    console.log(apiurl.meanings[0].partOfSpeech);
  } catch (error) {
    console.log("Error:", error);
  }
});

// const posItem = document.createElement('h2');
// posItem.textContent = partOfSpeech;
// posItem.classList.add('postxt');
// pos.appendChild(posItem);

// defItem.textContent = definition;
// def.appendChild(defItem);
