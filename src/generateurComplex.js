const prompt = (name) => ({ type: "prompt", name });
const print = (message) => ({ type: "print", message });

/**
 * name = prompt "What's your name?"
 * greetings = "Hello " + name + "!"
 * show greetings
 */
export function* myProgram() {
  const name = yield prompt("What's your name?");
  const greetings = `Hello ${name}!`;
  yield print(greetings);
}

export function executeProgram(program) {
  const it = program();
  let res = it.next();
  while (!res.done) {
    const effect = res.value;
    switch (effect.type) {
      case "prompt":
        const input = window.prompt(effect.name);
        res = it.next(input);
        break;
      case "print":
        window.alert(effect.message);
        res = it.next();
        break;
      default:
        throw new Error(`Invalid effect type: ${effect.type}`);
    }
  }
}
