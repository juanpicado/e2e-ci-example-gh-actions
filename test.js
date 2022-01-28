const {spawnSync} = require('child_process');
const {greetings} = require('./index');


// previously installed globally with `npm install -g e2e-ci-example-gh-actions`
const outputCommand = spawnSync('e2e-ci-example-gh-actions', []);
const output = outputCommand.stdout.toString();
if (output === greetings) {
  console.log('✅  e2e-ci-example-gh-actions works');
  process.exit();
} else {
  console.error('Expected: ' + greetings, '\nActual: ' + output);
  process.exit(1);
}