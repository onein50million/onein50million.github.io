function generate_timestamp(){
    console.log("Test!!!");
    let hours_left = document.getElementById("hours").value;
    let seconds_left = hours_left*60*60;
    let current_epoch = Math.round(Date.now()/1000);
    document.getElementById("output").value = `<t:${current_epoch + seconds_left}:R>`;
    document.getElementById("clipboard_button").removeAttribute("hidden");
}

function copy_to_clipboard(){
    var copy_text = document.getElementById("output");
    copy_text.select();
    copy_text.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copy_text.value).then(alert("copied to clipboard"));
}