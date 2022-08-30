
let interval = 0;
let spinner = ['| ', '/', '-', '\\', '|', '/', '-', '\\'];

for (const rota of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r ${rota} `);
  }, interval);
  interval += 200;
}

setTimeout(() => {
  process.stdout.write("\n");
}, interval);



