
var searchButton = document.getElementById("searchButton")
var language = "en_US"
var togglerLanguage = document.getElementById("togglerLanguage");

var searchedWords = [];
document.getElementById("wordToBeSearched").addEventListener("keypress", function(e){
    if (e.keyCode === 13) {
        e.preventDefault();
    }
})



var english = document.getElementById("english");
english.addEventListener("click", function(e) {
    language = "en_US";
    togglerLanguage.innerHTML = "English"
});

var arabic = document.getElementById("arabic");
arabic.addEventListener("click", function(e) {
    language = "ar";
    togglerLanguage.innerHTML = "Arabic"
});

var spanish = document.getElementById("spanish");
spanish.addEventListener("click", function(e) {
    language = "es";
    togglerLanguage.innerHTML = "Spanish"
});

var japanese = document.getElementById("japanese");
japanese.addEventListener("click", function(e) {
    language = "ja";
    togglerLanguage.innerHTML = "Japanese"

});

var hindi = document.getElementById("hindi");
hindi.addEventListener("click", function(e) {
    language = "hi";
    togglerLanguage.innerHTML = "Hindi"
});


searchButton.addEventListener("click", function (e) {
    var wordToBeSearched = document.getElementById("wordToBeSearched");
    var word = wordToBeSearched.value;
    console.log(word)
    console.log(language)

    searchedWords.push(word);
    var url = `https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`;
    fetch(url)
        .then(function(res) {
            return res.json(); //return the JSON Promise
        }).then(function(response) {

			console.log(response);

			var word = response[0].word;
           
			console.log(word);
			var phoneticsArr = response[0].phonetics;
			console.log(phoneticsArr);
			var meaningsArr = response[0].meanings;
			console.log(meaningsArr);

            var wordSpan = document.getElementById('word');
            wordSpan.innerHTML = word;

            var audioSpan = document.getElementById('audio');
            audioSpan.innerHTML = `<audio controls>
            <source id="phoneticsSound" src="${phoneticsArr[0].audio}" type="audio/ogg">
            Your browser does not support the audio element.
            </audio>`

            var phoneticsLetter = document.getElementById('phoneticsLetter');
            phoneticsLetter.innerHTML = `${phoneticsArr[0].text}`

            // var phoneticsSound = document.getElementById('phoneticsSound');
            // phoneticsSound.setAttribute('src', phoneticsArr[0].audio);
            
            var meaningsDisplalyer = document.getElementById("meaningsDisplalyer");
            
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
            console.log(synonyms)
            meaningsDisplalyer.innerHTML = `<span class="text-info">Synonames: &nbsp;</span>${synonyms} ${meanings}`
		}).catch((error) => {
            console.error('Error:', error);
            var card = document.getElementById("card")
            card.innerHTML = `the word "${word}" is not found in ${togglerLanguage.innerHTML} language`;
          })
})


fetch("https://random-words-api.vercel.app/word")
        .then(function(res) {
            return res.json(); //return the JSON Promise
        }).then(function(response) {
            var randomWord = response[0].word
            console.log(randomWord)
            var url = `https://api.dictionaryapi.dev/api/v2/entries/${language}/${randomWord}`;
    fetch(url)
        .then(function(res) {
            return res.json(); //return the JSON Promise
        }).then(function(response) {

			console.log(response);

			var word = response[0].word;
           
			console.log(word);
			var phoneticsArr = response[0].phonetics;
			console.log(phoneticsArr);
			var meaningsArr = response[0].meanings;
			console.log(meaningsArr);

            var wordSpan = document.getElementById('randomWord');
            wordSpan.innerHTML = word;

            var audioSpan = document.getElementById('randomaudio');
            audioSpan.innerHTML = `<audio controls>
            <source id="phoneticsSound" src="${phoneticsArr[0].audio}" type="audio/ogg">
            Your browser does not support the audio element.
            </audio>`

            var phoneticsLetter = document.getElementById('randomphoneticsLetter');
            phoneticsLetter.innerHTML = `${phoneticsArr[0].text}`

            // var phoneticsSound = document.getElementById('phoneticsSound');
            // phoneticsSound.setAttribute('src', phoneticsArr[0].audio);
            
            var randomDisplayer = document.getElementById("randomDisplayer");
            
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
            console.log(synonyms)
            randomDisplayer.innerHTML = `<span class="text-info">Synonames: &nbsp;</span>${synonyms} ${meanings}`
		})
        });
        
        var searchedWordsResult = ""
        var navbarDropdown = document.getElementById("navbarDropdown");
        navbarDropdown.addEventListener("click", function(e) {
            console.log(searchedWords);
            searchedWords.forEach(element => {
                searchedWordsResult +=   ` <a class="dropdown-item" href="#">${element}</a>`
                console.log(element);
            });
            document.getElementById("dropDownMenu").innerHTML = searchedWordsResult
        });

