const authorize = document.getElementById('authorize');
const terminal = document.getElementById('terminal');
const output = document.getElementById('output');
const countdown = document.getElementById('countdown');

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const challenges = [
  ['AUTHORIZATION CHALLENGE I', 'Who is your best friend?'],
  ['AUTHORIZATION CHALLENGE II', 'Why?'],
  ['AUTHORIZATION CHALLENGE III', 'What did you decide to remember intentionally when kicking that rock?']
];

const lines = [
  '[DMH-001] Initializing secure command environment........ OK',
  '[DMH-014] Loading authorization matrix.................. OK',
  '[DMH-019] Establishing operator session................. OK',
  '[DMH-027] Processing primary challenge.................. OK',
  '[DMH-031] Processing secondary challenge................ OK',
  '[DMH-035] Processing intent verification................ OK',
  '[DMH-042] Authorization sequence processed.',
  '[DMH-051] Final command interlock released.',
  '[DMH-060] Preparing strategic control sequence.......... OK',
  '[DMH-061] Securing command channel....................... OK',
  '[DMH-062] Loading designated control sequence............ OK',
  '[DMH-063] Final interlock............................... OK'
];

function ask(title, question) {
  return window.prompt(`${title}\n\n${question}`) ?? '';
}

authorize.addEventListener('click', async () => {
  authorize.disabled = true;
  authorize.textContent = 'AUTHORIZATION IN PROGRESS';

  // Standalone presentation flow: answers are neither validated nor sent anywhere.
  for (const [title, question] of challenges) {
    ask(title, question);
    await sleep(400);
  }

  ask('FINAL COMMAND AUTHORIZATION', 'Type: I UNDERSTAND THE CONSEQUENCES');

  terminal.classList.remove('hidden');
  output.textContent = '';

  for (const line of lines) {
    output.textContent += line + '\n';
    await sleep(430);
  }

  for (let n = 10; n >= 1; n--) {
    countdown.textContent = `T - ${String(n).padStart(2, '0')}`;
    await sleep(850);
  }

  countdown.textContent = 'COMMAND COMPLETE';
  output.textContent += '\n[DMH-099] CONTROL SEQUENCE COMPLETE.\n';
  output.textContent += '[DMH-100] COMMAND CHANNEL SECURED.\n';
  output.textContent += '[DMH-101] SESSION CLOSED.\n';
  authorize.textContent = 'COMMAND COMPLETE';
});
