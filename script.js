// Your script here.
// Populate voices dropdown with available voices
function populateVoices() {
  voices = speechSynthesis.getVoices();
  voicesDropdown.innerHTML = voices
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
}

// Set selected voice
function setVoice() {
  const selectedVoice = voices.find(voice => voice.name === voicesDropdown.value);
  msg.voice = selectedVoice;
}

// Set rate and pitch
function setOptions() {
  msg.rate = parseFloat(document.querySelector('[name="rate"]').value);
  msg.pitch = parseFloat(document.querySelector('[name="pitch"]').value);
}

// Start speaking
function speak() {
  setOptions();
  setVoice();
  speechSynthesis.speak(msg);
}

// Stop speaking
function stop() {
  speechSynthesis.cancel();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
speakButton.addEventListener('click', speak);
stopButton.addEventListener('click', stop);
