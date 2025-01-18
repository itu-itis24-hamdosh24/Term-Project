// my student id is 150240903
const letters = "NYMPH";
const user_input = document.getElementById('user-input');
const score_element = document.getElementById('score');
let pressed = "";
let score = 0;
let lives = 3;

function handle_submit() {
    if (lives == 0 || score == 100) {
        alert('You have To reset the game');
        return;
    }
    input = user_input.value;
    if (input.length > 1) {
        const state = ((input == letters) ? 'Won' : 'Lost')
        if (state == 'Won') remove_hidden();
        lost_or_win(state);
        return;
    }
    for (let i = 0; i < letters.length; ++i) {
        if (letters[i] != input) continue;
        handle_letter(i);
        return;
    }
    lives -= 1;
    hendle_hearts(lives);
    if (lives != 0) return;
    lost_or_win('Lost');
}

function handle_letter(letter_index) {
    if (pressed.includes(letters[letter_index])) return;
    document.getElementById(`img${letter_index + 1}`).classList.remove("hidden");
    pressed += letters[letter_index];
    score += 20;
    score_element.textContent = `Score ${score}`;
    if (score != 100) return;
    lost_or_win('Won');
}

function lost_or_win(state) {
    score = ((state == 'Won') ? 100: score);
    lives = ((state == 'Won') ? lives: 0);
    score_element.textContent = `Score ${score}`;
    hendle_hearts(lives);
    setTimeout(() => {
        alert(`You ${state}`);
    }, 200); 
}

function remove_hidden() {
    for (let i = 0; i < letters.length; ++i) {
        document.getElementById(`img${i + 1}`).classList.remove('hidden');
    }
}

function reset() {
    score_element.textContent = 'Score 0';
    lives = 3;
    score = 0;
    pressed = "";
    for (let i = 0; i < letters.length; ++i) {
        document.getElementById(`img${i + 1}`).classList.add('hidden');
    }
    for (let i = 0; i < 3; ++i) {
        document.getElementById(`heart-${i}`).classList.remove('hidden');
    }
    user_input.value = "";
}

function hendle_hearts(lives) {
    for (let i = lives; i < 3; ++i) {
        document.getElementById(`heart-${i}`).classList.add('hidden');
    }
}