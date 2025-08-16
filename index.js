const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('1.0.0');

program.command('countLines')
  .description('Count the number of lines in a file')
  .argument('<file>', 'path of the file')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const lines = data.trim().split('\n').length;
        console.log(`There are ${lines} lines in ${file}`);
      }
    });
  });


program.command('countWords')
  .description('Count the number of words in a file')
  .argument('<file>', 'path of the file')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let totalWords = 0;
        const trimmedData = data.trim();
        for(let i = 0; i < trimmedData.length; i++) {
            if(trimmedData[i] === ' ') {
                totalWords++;
            }
        }
        console.log(`There are ${totalWords + 1} words in ${file}`);
      }
    });
  });


program.command('countChar')
  .description('Count the number of characters in a file')
  .argument('<file>', 'path of the file')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let totalChar = 0;
        const trimmedData = data.trim();
        for(let i = 0; i < trimmedData.length; i++) {
            if(trimmedData[i] === " ") {
                continue;
            }else {
                totalChar++;
            }
        }
        console.log(`There are ${totalChar} character in ${file}`);
      }
    });
  });

program.parse();