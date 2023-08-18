const keys = document.querySelectorAll('.key.register');
const textInput = document.getElementById('textInput');
const shiftKey = document.querySelector('.key.shift');
const capsLockKey = document.querySelector('.key.capslock');

const koreanMapping = {
  q: 'ㅂ', w: 'ㅈ', e: 'ㄷ', r: 'ㄱ', t: 'ㅅ', y: 'ㅛ', u: 'ㅕ', i: 'ㅑ', o: 'ㅐ', p: 'ㅔ',
  a: 'ㅁ', s: 'ㄴ', d: 'ㅇ', f: 'ㄹ', g: 'ㅎ', h: 'ㅗ', j: 'ㅓ', k: 'ㅏ', l: 'ㅣ',
  z: 'ㅋ', x: 'ㅌ', c: 'ㅊ', v: 'ㅍ', b: 'ㅠ', n: 'ㅜ', m: 'ㅡ',

  Q: 'ㅃ', W: 'ㅉ', E: 'ㄸ', R: 'ㄲ', T: 'ㅆ', O: 'ㅒ', P: 'ㅖ'
};

let isKoreanMode = false;
let shiftPressed = false;
let capsLockActive = false;

function updateKoreanKeyboardLayout() {
  document.querySelector('.q').textContent = 'ㅂ';
  document.querySelector('.w').textContent = 'ㅈ';
  document.querySelector('.e').textContent = 'ㄷ';
  document.querySelector('.r').textContent = 'ㄱ';
  document.querySelector('.t').textContent = 'ㅅ';
  document.querySelector('.y').textContent = 'ㅛ';
  document.querySelector('.u').textContent = 'ㅕ';
  document.querySelector('.i').textContent = 'ㅑ';
  document.querySelector('.o').textContent = 'ㅐ';
  document.querySelector('.p').textContent = 'ㅔ';
  document.querySelector('.a').textContent = 'ㅁ';
  document.querySelector('.s').textContent = 'ㄴ';
  document.querySelector('.d').textContent = 'ㅇ';
  document.querySelector('.f').textContent = 'ㄹ';
  document.querySelector('.g').textContent = 'ㅎ';
  document.querySelector('.h').textContent = 'ㅗ';
  document.querySelector('.j').textContent = 'ㅓ';
  document.querySelector('.k').textContent = 'ㅏ';
  document.querySelector('.l').textContent = 'ㅣ';
  document.querySelector('.z').textContent = 'ㅋ';
  document.querySelector('.x').textContent = 'ㅌ';
  document.querySelector('.c').textContent = 'ㅊ';
  document.querySelector('.v').textContent = 'ㅍ';
  document.querySelector('.b').textContent = 'ㅠ';
  document.querySelector('.n').textContent = 'ㅜ';
  document.querySelector('.m').textContent = 'ㅡ';
  document.querySelector('.switch').textContent = 'En';
}

function updateEnglishKeyboardLayout() {
  document.querySelector('.q').textContent = 'Q';
  document.querySelector('.w').textContent = 'W';
  document.querySelector('.e').textContent = 'E';
  document.querySelector('.r').textContent = 'R';
  document.querySelector('.t').textContent = 'T';
  document.querySelector('.y').textContent = 'Y';
  document.querySelector('.u').textContent = 'U';
  document.querySelector('.i').textContent = 'I';
  document.querySelector('.o').textContent = 'O';
  document.querySelector('.p').textContent = 'P';
  document.querySelector('.a').textContent = 'A';
  document.querySelector('.s').textContent = 'S';
  document.querySelector('.d').textContent = 'D';
  document.querySelector('.f').textContent = 'F';
  document.querySelector('.g').textContent = 'G';
  document.querySelector('.h').textContent = 'H';
  document.querySelector('.j').textContent = 'J';
  document.querySelector('.k').textContent = 'K';
  document.querySelector('.l').textContent = 'L';
  document.querySelector('.z').textContent = 'Z';
  document.querySelector('.x').textContent = 'X';
  document.querySelector('.c').textContent = 'C';
  document.querySelector('.v').textContent = 'V';
  document.querySelector('.b').textContent = 'B';
  document.querySelector('.n').textContent = 'N';
  document.querySelector('.m').textContent = 'M';
  document.querySelector('.switch').textContent = '한';
}

function updateKeyboardLayout() {
  const doubleConsonantKeys = ['q', 'w', 'e', 'r', 't', 'o', 'p'];

  if (shiftPressed || capsLockActive) {
    document.querySelector('.q').textContent = 'ㅃ';
    document.querySelector('.w').textContent = 'ㅉ';
    document.querySelector('.e').textContent = 'ㄸ';
    document.querySelector('.r').textContent = 'ㄲ';
    document.querySelector('.t').textContent = 'ㅆ';
    document.querySelector('.o').textContent = 'ㅒ';
    document.querySelector('.p').textContent = 'ㅖ';

    doubleConsonantKeys.forEach(key => {
      document.querySelector(`.key.${key}`).classList.add('updated');
    });
  } else {
    document.querySelector('.q').textContent = 'ㅂ';
    document.querySelector('.w').textContent = 'ㅈ';
    document.querySelector('.e').textContent = 'ㄷ';
    document.querySelector('.r').textContent = 'ㄱ';
    document.querySelector('.t').textContent = 'ㅅ';
    document.querySelector('.o').textContent = 'ㅐ';
    document.querySelector('.p').textContent = 'ㅔ';

    doubleConsonantKeys.forEach(key => {
      document.querySelector(`.key.${key}`).classList.remove('updated');
    });
  }
}

// mouse clicks
keys.forEach(key => {
  key.addEventListener('click', () => {
    const keyText = key.textContent;
    console.log('Key pressed:', keyText);

    if (!isKoreanMode) {
      if (keyText === '한') {
        updateKoreanKeyboardLayout();
        isKoreanMode = true;
      }
    } else {
      if (keyText === 'En') {
        updateEnglishKeyboardLayout();
        isKoreanMode = false;
      }
    }

    if (keyText === 'Backspace') {
      textInput.value = textInput.value.slice(0, -1);
    } else if (keyText === 'Space') {
      textInput.value += ' ';
    } else if (keyText !== '한' && keyText !== 'En') {
      textInput.value += keyText;
    }
  });
});

document.addEventListener('keydown', event => {
  if (event.key === 'Shift') {
    shiftPressed = true;
    console.log(shiftPressed);
    shiftKey.classList.add('active');
    if (isKoreanMode) {
      updateKeyboardLayout();
    }
  }
});

document.addEventListener('keyup', event => {
  if (event.key === 'Shift') {
    shiftPressed = false;
    console.log(shiftPressed);
    shiftKey.classList.remove('active');
    if (isKoreanMode) {
      updateKeyboardLayout();
    }
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'CapsLock' && !event.getModifierState('CapsLock')) {
    capsLockActive = false;
    console.log('CapsLock released');
    capsLockKey.classList.add('active');
    if (isKoreanMode) {
      updateKeyboardLayout();
    }
  }
});

document.addEventListener('keyup', event => {
  if (event.key === 'CapsLock' && event.getModifierState('CapsLock')) {
    capsLockActive = true;
    console.log('CapsLock pressed');
    capsLockKey.classList.remove('active');
    if (isKoreanMode) {
      updateKeyboardLayout();
    }
  }
});

// key presses
document.addEventListener('keydown', event => {
  const keyText = event.key;
  const keyElement = keyText === ' ' ? document.querySelector('.key.space') : document.querySelector(`.key.${keyText.toLowerCase()}`);
  keyElement.classList.add('pressed');
  const restrictedKeys = ['Tab', 'CapsLock', 'Enter', 'Shift', 'Fn', 'Control', 'Meta', 'Alt'];

  if (keyText === 'Backspace') {
    textInput.value = textInput.value.slice(0, -1);
  } else if (keyText === ' ') {
    textInput.value += ' ';
  } else if (!restrictedKeys.includes(keyText)) {
    if (isKoreanMode) {
      if (keyText in koreanMapping) {
        let koreanCharacter = koreanMapping[keyText];
        console.log('Key pressed:', koreanCharacter);

        if (shiftPressed || capsLockActive) {
          koreanCharacter = koreanMapping[keyText.toUpperCase()];
        }

        if (koreanCharacter) {
          textInput.value += koreanCharacter;
        }
      }
    } else {
      console.log('Key pressed:', keyText);
      textInput.value += keyText;
    }
  }
});

document.addEventListener('keyup', event => { 
  const keyText = event.key.toLowerCase();
  const keyElement = keyText === ' ' ? document.querySelector('.key.space') : document.querySelector(`.key.${keyText}`);
  
  if (keyElement) {
    keyElement.classList.remove('pressed');
  }
});