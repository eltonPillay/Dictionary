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
    const phon = document.getElementById("pronounciation");
    const maincon = document.getElementById("mainbody");
    word.innerHTML = search;
    phon.innerHTML = apiurl.phonetic;
    maincon.innerHTML = "";

    for (let i = 0; i < apiurl.meanings.length; i++) {
      const meaning = apiurl.meanings[i];
      const partOfSpeech = meaning.partOfSpeech;
      const definition = meaning.definitions[0].definition;
      const htmlcon = `<div class="container partsofspeech">
                          <div class="row align-items-center">
                              <div class="col-md-1 col-xs-12">
                                  <h6 class="postxt">${partOfSpeech}</h6>
                              </div>
                              <div class="col-md-11 col-xs-12">
                                  <h6 class="deftxt">${definition}</h6>
                              </div>
                          </div>
                          <div class="break2"></div>
                      </div>`;
      maincon.innerHTML += htmlcon;
    }

    const origintxt = `<div class="container partsofspeech">
                          <div class="row align-items-center">
                              <div class="col-md-1 col-xs-12">
                                  <h6 class="postxt ortxt">origin</h6>
                              </div>
                              <div class="col-md-11 col-xs-12">
                                  <h6 class="deftxt">${apiurl.origin}</h6>
                              </div>
                          </div>
                          <div class="break2"></div>
                      </div>`;
    console.log(apiurl.origin);
    maincon.innerHTML += origintxt;
  } catch (error) {
    console.log("Error:", error);
  }
});
