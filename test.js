const {spawnSync} = require('child_process');
const {greetings} = require('./index');

const outputCommand = spawnSync('e2e-ci-example-gh-actions', []);
const output = outputCommand.stdout.toString();
if (output === greetings) {
  console.log('0');
  process.exit();
} else {
  console.log('1');
  process.exit(1);
}