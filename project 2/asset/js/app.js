

var meanings = '<hr class="my-4">'
var synonyms = []
meaningsArr.forEach(meaning => {
    meanings += `<h5 id="parts-of-speach">${meaning.partOfSpeech}:</h5><div class="definaton ml-5">
    <p id="definition"><span class="text-info">Definition: &nbsp;</span>${meaning.definitions[0].definition}</p>
    <p id="example"><span class="text-info">Example: &nbsp;</span>${meaning.definitions[0].example}</p>
    </div>`
    if (meaning.definitions[0].synonyms) {
        synonyms.push(meaning.definitions[0].synonyms)
    }
    
    var meanings = '<hr class="my-4">'
            var synonyms = []
            meaningsArr.forEach(meaning => {
                meanings += `<h5 id="parts-of-speach">${meaning.partOfSpeech}:</h5><div class="definaton ml-5">
                <p id="definition"><span class="text-info">Definition: &nbsp;</span>${meaning.definitions[0].definition}</p>
                <p id="example"><span class="text-info">Example: &nbsp;</span>${meaning.definitions[0].example}</p>
                </div>`
                if (meaning.definitions[0].synonyms) {
                    synonyms.push(meaning.definitions[0].synonyms)
                }
                
                efinition"><span class="text-info">Definition: &nbsp;</span>${meaning.definitions[0].definition}</p>
    <p id="example"><span class="text-info">Example: &nbsp;</span>${meaning.definitions[0].example}</p>
    </div>`
    if (meaning.definitions[0].synonyms) {
        synonyms.push(meaning.definitions[0].synonyms)
    }
    
    var meanings = '<hr class="my-4">'
            var synonyms = []
            meaningsArr.forEach(meaning => {
                meanings += `<h5 id="parts-of-speach">${meaning.partOfSpeech}:</h5><div class="definaton ml-5">
                <p id="definition"><span class="text-info">Definition: &nbsp;</span>${meaning.definitions[0].definition}</p>
                <p id="example"><span class="text-info">Example: &nbsp;</span>${meaning.definitions[0].example}</p>
                </div>`
                if (




			var word = response[0].word;
			console.log(word);
			var phoneticsArr = response[0].phonetics;
			console.log(phoneticsArr);
			var meaningsArr = response[0].meanings;
			console.log(meaningsArr);

            var wordSpan = document.getElementById('word');
            wordSpan.innerHTML = word;

            var phoneticsLetter = document.getElementById('phoneticsLetter');
            phoneticsLetter.innerHTML = `${phoneticsArr[0].text}`

            var phoneticsSound = document.getElementById('phoneticsSound');
            phoneticsSound.setAttribute('src', phoneticsArr[0].audio);

            var meaningsDisplalyer = document.getElementById("meaningsDisplalyer");
            
            var meanings = '<hr class="my-4">'
            var synonyms = []

            var meanings = '<hr class="my-4">'
            var synonyms = []
            meaningsArr.forEach(meaning => {
                meanings += `<h5 id="parts-of-speach">${meaning.partOfSpeech}:</h5><div class="definaton ml-5">
                <p id="definition"><span class="text-info">Definition: &nbsp;</span>${meaning.definitions[0].definition}</p>
                <p id="example"><span class="text-info">Example: &nbsp;</span>${meaning.definitions[0].example}</p>
                </div>`
                if (meaning.definitions[0].synonyms) {
                    synonyms.push(meaning.definitions[0].synonyms)
                }
                
            });
            console.lovar meanings = '<hr class="my-4">'
            var synonyms = []
            meaningsArr.forEach(meaning => {
                efinition"><span class="text-info">Definition: &nbsp;</span>${meaning.definitions[0].definition}</p>
                <p id="example"><span class="text-info">Example: &nbsp;</span>${meaning.definitions[0].example}</p>
                </div>`
                if (meaning.definitions[0].synonyms) {
                    synonyms.push(meaning.definitions[0].synonyms)
                }
                
                var meanings = '<hr class="my-4">'
                        var synonyms = []
                        meaningsArr.forEach(meaning => {
                            meanings += `<h5 id="parts-of-speach">${meaning.partOfSpeech}:</h5><div class="definaton ml-5">
                            <p id="definition"><span class="text-info">Definition: &nbsp;</span>${meaning.definitions[0].definition}</p>
                            <p id="example"><span class="text-info">Example: &nbsp;</span>${meaning.definitions[0].example}</p>
                            </div>`
                            if (