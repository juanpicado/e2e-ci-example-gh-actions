const {spawnSync} = require('child_process');
const {greetings} = require('./index');

const outputCommand = spawnSync('e2e-ci-example-gh-actions', []);
const output = outputCommand.stdout.toString();
if (output === greetings) {
  process.exit();
} else {
  console.error('Expected: ' + greetings, '\nActual: ' + output);
  process.exit(1);
}