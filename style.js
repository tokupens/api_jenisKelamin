console.log('javascript ready');

const base_api = "https://api.genderize.io";

function showResult(name, gender, probability) {
    const preddictionElement = document.getElementById("preddiction");
    const probabilityPercentage = probability * 100;
    let genderDecode
    if(gender == "male") {
    genderDecode = "COWOK";
}else {
    genderDecode = "cewek";
}
    const preddictionText = `halo ${name}, jenis kelamin kamu kemungkinan adalah ${genderDecode} sebesar ${probabilityPercentage}`;

    preddictionElement.textContent = preddictionText;

}

async function preddict(event) {
    if(event.key == "enter") {
        const firstName = event.target.value;
        const queryUrl = `${base_api}/?name=${firstname}`;

        const response = await  fetch(queryUrl);
        const result = await response.json();
        showResult(result.name, result.gender, result.probability);
    }
}
