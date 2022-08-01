const dogsData = `{
     "dogBreeds": [{  
        "breed": "Labrador Retriever",
        "breedType": "Purebred",
        "origin": "Canada,USA",
        "popularity": "1",
        "temperament": ["Cheerful", "Gentle", "Friendly", "Intelligent"],
        "hypoallergenic": "No",
        "intelligence": 7,
        "photo": "https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559_1280.jpg"
    }, {
        "breed": "German Shepard",
        "breedType": "Purebred",
        "origin": "Germany",
        "popularity": "2",
        "temperament": ["Corageous", "Intelligent", "Loyal", "Watchful"],
        "hypoallergenic": "No",
        "intelligence": 3,
        "photo": "https://cf.ltkcdn.net/dogs/images/std-lg/284637-1200x800-german-shepherd-characteristics.webp"
    }, {
        "breed": "Golden Retriever",
        "breedType": "Purebred",
        "origin": "United Kingdom",
        "popularity": "3",
        "temperament": ["Intelligent", "Kind", "Friendly", "Confident"],
        "hypoallergenic": "No",
        "intelligence": 4,
        "photo": "https://www.harlingenveterinaryclinic.com/sites/default/files/styles/large/public/golden-retriever-dog-breed-info.jpg?itok=cdghqKxv"
    }, {
        "breed": "French Bulldog",
        "breedType": "Purebred",
        "origin": "France, UK",
        "popularity": "4",
        "temperament": ["Playful", "Sociable", "Friendly", "Lively", "Patient"],
        "hypoallergenic": "No",
        "intelligence": 58,
        "photo": "https://i.guim.co.uk/img/media/a90bff2e310a0b2934b6793c90966333172e1038/0_21_2424_1454/master/2424.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=9d83bfe838db290fbc9a602d5bc2011e"
    }, {
        "breed": "Bulldog",
        "breedType": "Purebred",
        "origin": "United Kingdom",
        "popularity": "5",
        "temperament": ["Friendly", "Docile", "Willful", "Gregarious"],
        "hypoallergenic": "No",
        "intelligence": 77,
        "photo": "https://www.akc.org/wp-content/uploads/2017/11/Bulldog-standing-in-the-grass.jpg"
    }, {
        "breed": "Beagle",
        "breedType": "Purebred",
        "origin": "United Kingdom",
        "popularity": "6",
        "temperament": ["Gentle", "Intelligent", "Even Tempered", "Determined"],
        "hypoallergenic": "No",
        "intelligence": 72,
        "photo": "https://www.purina.com.au/-/media/project/purina/main/breeds/dog/dog_beagle_desktop.jpg?h=475&la=en&w=825&hash=5346CF71108CD1C56165EAD961806A63"
    }, {
        "breed": "Poodle",
        "breedType": "Purebred",
        "origin": "Germany, France",
        "popularity": "7",
        "temperament": ["Intelligent", "Faithful", "Trainable", "Instinctual"],
        "hypoallergenic": "Yes",
        "intelligence": 2,
        "photo": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2022%2F03%2F04%2Fstandard-poodle-sitting-in-leaves-466806289.jpg"
    }, {
        "breed": "Rottweiler",
        "breedType": "Purebred",
        "origin": "Germany",
        "popularity": "8",
        "temperament": ["Intelligent", "Corageous", "Fearless", "Confident"],
        "hypoallergenic": "No",
        "intelligence": 9,
        "photo": "https://www.dogbreedslist.info/uploads/dog-pictures/rottweiler-2.jpg"
    }, {
        "breed": "German Shorthaired Pointer",
        "breedType": "Purebred",
        "origin": "Germany",
        "popularity": "9",
        "temperament": ["Intelligent", "Trainable", "Boisterous", "Cooperative"],
        "hypoallergenic": "No",
        "intelligence": 9,
        "photo": "https://www.thesprucepets.com/thmb/R70Pqg8ApphEaOj9EynBQMGvMWE=/1883x1412/smart/filters:no_upscale()/GermanShorthairedPointerProfile-9c0431e942dc44f1b26aa839d9032eee.jpg"
    }, {
        "breed": "Yorkshire Terrier",
        "breedType": "Purebred",
        "origin": "United Kingdom",
        "popularity": "10",
        "temperament": ["Independent", "Intelligent", "Corageous", "Confident"],
        "hypoallergenic": "Yes",
        "intelligence": 27,
        "photo": "https://www.purina.co.nz/sites/default/files/styles/ttt_image_510/public/2021-01/Yorkshire%20Terrier2.jpg?itok=R7q86_NP"
    }, {
        "breed": "Boxer",
        "breedType": "Purebred",
        "origin": "Germany",
        "popularity": "11",
        "temperament": ["Playful", "Friendly", "Devoted", "Loyal"],
        "hypoallergenic": "No",
        "intelligence": 48,
        "photo": "https://media-be.chewy.com/wp-content/uploads/2021/04/16140537/Boxer_Feature-Image-1024x615.jpg"
    }, {
        "breed": "Askal",
        "breedType": "Purebred",
        "origin": "Philippines",
        "popularity": "9",
        "temperament": ["Playful", "Friendly", "Devoted", "Loyal"],
        "hypoallergenic": "Yes",
        "intelligence": 99,
        "photo": "https://c8.alamy.com/zooms/9/04dd013db6c74997acc752ff5c34e402/k71eyp.jpg"
    }]
    
    
}`;

let dogs = JSON.parse(dogsData);
dogs = dogs.dogBreeds;

let breeds = {};//}
for(let i in dogs){
    let dog = dogs[i];
    let breed = dog.breed;
    breeds[breed] = dog;
    document.getElementById("dog1Sel").options.add(new Option(breed, breed));
    document.getElementById("dog2Sel").options.add(new Option(breed, breed));
}

function updateComparison(){
    let battle = document.getElementById("battle").value.toLowerCase();
    let result = document.getElementById("decision");
    let dog1 = document.getElementById("dog1Sel").value;
    let dog2 = document.getElementById("dog2Sel").value;


    if (dog1==dog2){
        result.innerHTML = "These dogs are the same, man, select <emp>different</emp> breeds.";   
    }
    else {
        dog1 = breeds[dog1];
        dog2 = breeds[dog2];
        let data1 = dog1[battle];
        let data2 = dog2[battle];

        let decisionStr = `A ${dog1["breed"]}'s ${battle} is `;
        

        if (data1 > data2){
            decisionStr += "greater than ";
        }
        else if (data1==data2){
            decisionStr += "the same as ";
        }
        else{
            decisionStr += "lower than ";
        }
        
        decisionStr += `a ${dog2["breed"]}'s.`;

        result.innerHTML = decisionStr;

        
    }
    }
function dogCage(breed, img, sortTitle, sortValue){
    return `
        <h2><strong> ${breed}</h2>
        <img src="${img}" width="400px" height="300px">
        <p class="sortValAlign">${sortTitle}: ${sortValue}</p>
    `
}

function segDogs(_sort){
    dogs.sort((a,b) => {
        if (a[_sort] == b[_sort]){
            return a.breed.localeCompare(b.breed);
        }
        return b[_sort] - a[_sort];

    });
}

function sortAndShowAll(){
    let sort = document.getElementById("sortVar").value;
    segDogs(sort.toLowerCase());

    let dogContainer = document.getElementById("showAllContainer");
    dogContainer.innerHTML = "";

    for (let i in dogs){
        let dog = dogs[i];

        const dogDiv = document.createElement("div");
        dogContainer.appendChild(dogDiv);
        dogDiv.innerHTML = dogCage(dog.breed, dog.photo, sort, dog[sort.toLowerCase()]);
    }
}
sortAndShowAll();

 