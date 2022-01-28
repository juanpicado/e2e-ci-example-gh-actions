#!/usr/bin/env node
const greetings = "Hello World";
function hi() {
  process.stdout.write("Hello World");
}

hi();

exports.greetings = greetings;