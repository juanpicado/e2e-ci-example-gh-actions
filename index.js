#!/usr/bin/env node
const greetings = "Hello World";
function hi() {
  process.stdout.write("Hello Worldx");
}

hi();

exports.greetings = greetings;