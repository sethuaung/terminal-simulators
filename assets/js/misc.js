// Grab the switch and state display elements
const switchElement = document.getElementById('switch-window');

// Initialize state (off by default)
let isOn = false;

// Toggle the 'active' class and update state value when clicked
switchElement.addEventListener('click', function() {
    switchElement.classList.toggle('active');
    isOn = !isOn; // Toggle the state value

    // Update the displayed state
    if (isOn) {
        document.getElementById("command-console").innerHTML = '<div id="terminal-bar"><img class="terminal-img" src="assets/img/topleft_terminal_black.png" alt="Left Image" style="float: left; height: 46px"><img class="terminal-img" src="assets/img/topright_terminal_black.png" alt="Right Image" style="float: right; height: 46px"></div><div id="terminal-body" tabindex="0"><span>Powered by felixent.net<br>Welcome to Felixent terminal simulator.<br>See "man command" for supported commands.<br><br></span></div>';
        START_UBUNTU_TERMINAL();

    } else {
        document.getElementById("command-console").innerHTML = '<div id="cmd-bar"><img class="cmd-img" src="assets/img/topleft_cmd_white.png" alt="Left Image" style="float: left; height: 31px;"><img class="cmd-img" src="assets/img/topright_cmd_white.png" alt="Right Image" style="float: right; height: 31px;"></div><div id="cmd-body" tabindex="0"><span>Powered by felixent.net<br>Microsoft Windows [Version 10.5.18071.1703]<br>(c) Microsoft Corporation. All rights reserved.<br><br></span></div>';
        START_WINDOW_CMD();
    }
});

// Prevent the page from scrolling down when pressing spacebar inside the console window
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        event.preventDefault();
    }
});

window.onload = function() {
    START_WINDOW_CMD();
}
