import errorimg from "../assets/img/default.png";

export function ErroImage(e) {
    e.target.src = errorimg;
}

export function NumbersOnly(evt) {
    evt = evt ? evt : window.event;
    const charCode = evt.which ? evt.which : evt.keyCode;

    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        evt.preventDefault();
    } else {
        return true;
    }
}

export function FormatNumbersOnly(evt) {
    const clipped = parseInt(evt.clipboardData.getData("text"));

    if (clipped) {
        evt.textContent = Number(clipped);
    } else {
        evt.textContent = 1;
    }

    evt.preventDefault();
}

export function GetImageUrl(img) {
    return `nui://esx_inventory/inventory/${img}.png`;
}

export function playSound(sound_name, val = 0.2) {
    if (!sound_name) return;

    const audio = new Audio(`nui://what_sound/html/sounds/${sound_name}.ogg`);
    audio.volume = val;
    audio.play();
}