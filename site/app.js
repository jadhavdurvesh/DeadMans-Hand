const authorize = document.getElementById('authorize');
const terminal = document.getElementById('terminal');
const output = document.getElementById('output');
const countdown = document.getElementById('countdown');

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const lines = [
  '[DMH-001] Initializing secure execution environment... OK',
  '[DMH-014] Loading authorization matrix............... OK',
  '[DMH-019] Establishing operator session.............. OK',
  '[DMH-027] Operator challenge accepted................ OK',
  '[DMH-031] Secondary authorization accepted.......... OK',
  '[DMH-035] Intent verification accepted.............. OK',
  '[DMH-042] Operator authorization confirmed.',
  '[DMH-051] Final safety interlock released.',
  '[DMH-060] Preparing execution sequence................ OK',
  '[DMH-061] Establishing control channel................ OK',
  '[DMH-062] Loading command sequence.................... OK',
  '[DMH-063] Final interlock.............................. OK'
];

authorize.addEventListener('click', async () => {
  authorize.disabled = true;
  authorize.textContent = 'AUTHORIZATION IN PROGRESS';
  terminal.classList.remove('hidden');
  output.textContent = '';

  for (const line of lines) {
    output.textContent += line + '\n';
    await sleep(450);
  }

  for (let n = 10; n >= 1; n--) {
    countdown.textContent = `T - ${n}`;
    await sleep(850);
  }

  countdown.textContent = 'EXECUTION COMPLETE';
  output.textContent += '\n[DMH-099] EXECUTION SEQUENCE COMPLETE.\n';
  output.textContent += '[DMH-100] Control sequence terminated.\n';
  output.textContent += '[DMH-101] Session closed.\n';
  authorize.textContent = 'SEQUENCE COMPLETE';
});
