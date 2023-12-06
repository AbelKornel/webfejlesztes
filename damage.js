function distance() {
    const range = document.getElementById('distance');
    const meterValue = document.getElementById('currentMeterValue');

    range.addEventListener('input', function() {
        meterValue.textContent = `${range.value} meters`;
    });

}

function hits() {
    const selectedWeapon = document.querySelector('input[name="weapon"]:checked');
    const selectedDistance = document.getElementById('distance').value
    let shots = 0;

    if (!selectedWeapon) {
        results_text.textContent = "Please select a weapon.";
        return;
    }

    switch (selectedWeapon.value) {
        case "CR-75":
            if (selectedDistance == 0){
                results_text.textContent = "Please choose a distance greater than 0 meters!";
            break;
            }
            else if (selectedDistance < 100 & selectedDistance  != 0) {
                shots = 3;
            } else if (selectedDistance < 250 & selectedDistance  != 0) {
                shots = 5;
            } else if (selectedDistance < 500 & selectedDistance  != 0) {
                shots = 10;
            } else {
                results_text.textContent = "You wouldn't be able to kill the enemy player!";
                break;
            }
            break;

        case "Kolt1911":
            if (selectedDistance == 0){
                results_text.textContent = "Please choose a distance greater than 0 meters!";
            break;
            }
            else if (selectedDistance < 100 & selectedDistance != 0) {
                shots = 2;
            } else if (selectedDistance < 250 & selectedDistance  != 0) {
                shots = 3;
            } else if (selectedDistance < 500 & selectedDistance  != 0) {
                shots = 4;
            } else if (selectedDistance < 600 & selectedDistance  != 0) {
                shots = 7;
            } else if (selectedDistance < 750 & selectedDistance  != 0) {
                shots = 10;
            } else {
                results_text.textContent = "You wouldn't be able to kill the enemy player!";
                break;
            }
            break;

        case "Deagle":
            if (selectedDistance == 0){
                results_text.textContent = "Please choose a distance greater than 0 meters!";
            break;
            }
            else if (selectedDistance < 100 & selectedDistance  != 0) {
                shots = 1;
            } else if (selectedDistance < 250 & selectedDistance  != 0) {
                shots = 3;
            } else if (selectedDistance < 500 & selectedDistance  != 0) {
                shots = 5;
            } else if (selectedDistance < 650 & selectedDistance  != 0) {
                shots = 9;
            } else {
                results_text.textContent = "You wouldn't be able to kill the enemy player!";
                break;
            }
            break;

        case "Mlock-91":
            if (selectedDistance == 0){
                results_text.textContent = "Please choose a distance greater than 0 meters!";
            break;
            }
            else if (selectedDistance < 70 & selectedDistance  != 0) {
                shots = 3;
            } else if (selectedDistance < 250 & selectedDistance  != 0) {
                shots = 5;
            } else if (selectedDistance < 500 & selectedDistance  != 0) {
                shots = 10;
            } else {
                results_text.textContent = "You wouldn't be able to kill the enemy player!";
                break;
            }
            break;

        case "Revolver":
            if (selectedDistance == 0){
                results_text.textContent = "Please choose a distance greater than 0 meters!";
            break;
            }
            else if (selectedDistance < 150 & selectedDistance  != 0) {
                shots = 2;
            } else if (selectedDistance < 250 & selectedDistance  != 0) {
                shots = 3;
            } else if (selectedDistance < 500 & selectedDistance  != 0) {
                shots = 7;
            } else if (selectedDistance < 650 & selectedDistance  != 0) {
                shots = 10;
            } else {
                results_text.textContent = "You wouldn't be able to kill the enemy player!";
                break;
            }
            break;

        case "Bizon":
            if (selectedDistance == 0){
                results_text.textContent = "Please choose a distance greater than 0 meters!";
            break;
            }
            else if (selectedDistance < 150 & selectedDistance  != 0) {
                shots = 3;
            } else if (selectedDistance < 250 & selectedDistance  != 0) {
                shots = 4;
            } else if (selectedDistance < 500 & selectedDistance  != 0) {
                shots = 6;
            } else if (selectedDistance < 650 & selectedDistance  != 0) {
                shots = 9;
            } else {
                results_text.textContent = "You wouldn't be able to kill the enemy player!";
                break;
            }
            break;

        case "CR-61Scorpion":
            if (selectedDistance == 0){
                results_text.textContent = "Please choose a distance greater than 0 meters!";
            break;
            }
            else if (selectedDistance < 150 & selectedDistance  != 0) {
                shots = 4;
            } else if (selectedDistance < 250 & selectedDistance  != 0) {
                shots = 6;
            } else if (selectedDistance < 500 & selectedDistance  != 0) {
                shots = 8;
            } else if (selectedDistance < 650 & selectedDistance  != 0) {
                shots = 10;
            } else {
                results_text.textContent = "You wouldn't be able to kill the enemy player!";
                break;
            }
            break;

        case "SG5-K":
            if (selectedDistance == 0){
                results_text.textContent = "Please choose a distance greater than 0 meters!";
            break;
            }
            else if (selectedDistance < 150 & selectedDistance  != 0) {
                shots = 3;
            } else if (selectedDistance < 250 & selectedDistance  != 0) {
                shots = 5;
            } else if (selectedDistance < 500 & selectedDistance  != 0) {
                shots = 9;
            } else if (selectedDistance < 650 & selectedDistance  != 0) {
                shots = 10;
            } else {
                results_text.textContent = "You wouldn't be able to kill the enemy player!";
                break;
            }
            break;

        case "USG-45":
            if (selectedDistance == 0){
                results_text.textContent = "Please choose a distance greater than 0 meters!";
            break;
            }
            else if (selectedDistance < 150 & selectedDistance  != 0) {
                shots = 3;
            } else if (selectedDistance < 250 & selectedDistance  != 0) {
                shots = 4;
            } else if (selectedDistance < 500 & selectedDistance  != 0) {
                shots = 5;
            } else if (selectedDistance < 650 & selectedDistance  != 0) {
                shots = 6;
            } else if (selectedDistance < 850 & selectedDistance  != 0) {
                shots = 10;
            } else {
                results_text.textContent = "You wouldn't be able to kill the enemy player!";
                break;
            }
            break;

        case "BK-133":
            if (selectedDistance == 0){
                results_text.textContent = "Please choose a distance greater than 0 meters!";
            break;
            }
            else if (selectedDistance < 100 & selectedDistance  != 0) {
                shots = 1;
            } else if (selectedDistance < 200 & selectedDistance  != 0) {
                shots = 2;
            } else if (selectedDistance < 350 & selectedDistance  != 0) {
                shots = 3;
            } else {
                results_text.textContent = "You wouldn't be able to kill the enemy player!";
                break;
            }
            break;

        case "Vaiga":
            if (selectedDistance == 0){
                results_text.textContent = "Please choose a distance greater than 0 meters!";
            break;
            }
            else if (selectedDistance < 100 & selectedDistance  != 0) {
                shots = 1;
            } else if (selectedDistance < 200 & selectedDistance  != 0) {
                shots = 2;
            } else if (selectedDistance < 350 & selectedDistance  != 0) {
                shots = 3;
            } else {
                results_text.textContent = "You wouldn't be able to kill the enemy player!";
                break;
            }
            break;

        case "Repeater":
            if (selectedDistance == 0){
                results_text.textContent = "Please choose a distance greater than 0 meters!";
            break;
            }
            else if (selectedDistance < 150 & selectedDistance  != 0) {
                shots = 2;
            } else if (selectedDistance < 350 & selectedDistance  != 0) {
                shots = 3;
            } else if (selectedDistance < 500 & selectedDistance  != 0) {
                shots = 5;
            } else if (selectedDistance < 650 & selectedDistance  != 0) {
                shots = 8;
            } else {
                results_text.textContent = "You wouldn't be able to kill the enemy player!";
                break;
            }
            break;

        case "SK5966":
            if (selectedDistance == 0){
                results_text.textContent = "Please choose a distance greater than 0 meters!";
            break;
            }
            else if (selectedDistance < 150 & selectedDistance  != 0) {
                shots = 1;
            } else if (selectedDistance < 500 & selectedDistance  != 0) {
                shots = 2;
            } else if (selectedDistance < 650 & selectedDistance  != 0) {
                shots = 3;
            } else if (selectedDistance  == 0) {
                shots = 0;
            } else {
                shots = 5;
            }
            break;

        case "ASVAL":
            if (selectedDistance == 0){
                results_text.textContent = "Please choose a distance greater than 0 meters!";
            break;
            }
            else if (selectedDistance < 250 & selectedDistance  != 0) {
                shots = 2;
            } else if (selectedDistance < 500 & selectedDistance  != 0) {
                shots = 3;
            } else if (selectedDistance < 850 & selectedDistance  != 0) {
                shots = 5;
            } else if (selectedDistance  == 0) {
                shots = 0;
            } else {
                results_text.textContent = "You wouldn't be able to kill the enemy player!";
                break;
            }
            break;

        case "AURAX":
            if (selectedDistance == 0){
                results_text.textContent = "Please choose a distance greater than 0 meters!";
            break;
            }
            else if (selectedDistance < 100 & selectedDistance  != 0) {
                shots = 1;
            } else if (selectedDistance < 550 & selectedDistance  != 0) {
                shots = 2;
            } else if (selectedDistance < 1000 & selectedDistance  != 0) {
                shots = 3;
            } else if (selectedDistance  == 0) {
                shots = 0;
            } else {
                shots = 5;
            }
            break;

        case "KA-M":
            if (selectedDistance == 0){
                results_text.textContent = "Please choose a distance greater than 0 meters!";
            break;
            }
            else if (selectedDistance < 500 & selectedDistance  != 0) {
                shots = 2;
            } else if (selectedDistance < 750 & selectedDistance  != 0) {
                shots = 3;
            } else if (selectedDistance  == 0) {
                shots = 0;
            } else {
                shots = 4;
            }
            break;

        case "KA-74":
            if (selectedDistance == 0){
                results_text.textContent = "Please choose a distance greater than 0 meters!";
            break;
            }
            else if (selectedDistance < 500 & selectedDistance  != 0) {
                shots = 2;
            } else if (selectedDistance < 750 & selectedDistance  != 0) {
                shots = 3;
            } else if (selectedDistance  == 0) {
                shots = 0;
            } else {
                shots = 5;
            }
            break;

        case "LAR":
            if (selectedDistance == 0){
                results_text.textContent = "Please choose a distance greater than 0 meters!";
            break;
            }
            else if (selectedDistance < 250 & selectedDistance  != 0) {
                shots = 1;
            } else if (selectedDistance < 1000 & selectedDistance  != 0) {
                shots = 2;
            } else if (selectedDistance  == 0) {
                shots = 0;
            } else {
                shots = 3;
            }
            break;

        case "M4A1":
            if (selectedDistance == 0){
                results_text.textContent = "Please choose a distance greater than 0 meters!";
            break;
            }
            else if (selectedDistance < 500 & selectedDistance  != 0) {
                shots = 2;
            } else if (selectedDistance < 850 & selectedDistance  != 0) {
                shots = 3;
            } else if (selectedDistance  == 0) {
                shots = 0;
            } else {
                shots = 4;
            }
            break;

        case "Mosin9130":
            if (selectedDistance == 0){
                results_text.textContent = "Please choose a distance greater than 0 meters!";
            break;
            }
            else if (selectedDistance < 500 & selectedDistance  != 0) {
                shots = 1;
            } else if (selectedDistance  == 0) {
                shots = 0;
            } else {
                shots = 2;
            }
            break;

        case "M-70Tundra":
            if (selectedDistance == 0){
                results_text.textContent = "Please choose a distance greater than 0 meters!";
            break;
            }
            else if (selectedDistance < 500 & selectedDistance  != 0) {
                shots = 1;
            } else if (selectedDistance  == 0) {
                shots = 0;
            } else {
                shots = 2;
            }
            break;

        case "Blaze":
            if (selectedDistance == 0){
                results_text.textContent = "Please choose a distance greater than 0 meters!";
            break;
            }
            else if (selectedDistance < 350 & selectedDistance  != 0) {
                shots = 1;
            } else if (selectedDistance  == 0) {
                shots = 0;
            } else {
                shots = 2;
            }
            break;

        case "VSD":
            if (selectedDistance == 0){
                results_text.textContent = "Please choose a distance greater than 0 meters!";
            break;
            }
            else if (selectedDistance < 600 & selectedDistance  != 0) {
                shots = 1;
            } else if (selectedDistance  == 0) {
                shots = 0;
            } else {
                shots = 2;
            }
            break;
    }

    switch (shots) {
        case 1:
            results_text.textContent = "With the equipment and distance you chose, it would take 1 shot to take down the enemy player!"
            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            results_text.textContent = `With the equipment and distance you chose, it would take ${shots} shots to take down the enemy player!`;
            break;


    }
    
    
}