const { program } = require("commander");
// import fs module which allows us to interact with files on the hard disk
const fs = require("fs/promises");
const chalk = require("chalk");
const QUOTE_FILE = "quotes.txt";

console.log("Hello!")

program
  .name("quotes")
  .description("CLI tool for inspiration")
  .version("0.1.0");

program
  .command("getQuote")
  .description("Retrieves a random quote")
  .action(async () => {
    //// TODO - add try statement from lecture 2.05
    // TODO: Pull a random quote from the quotes.txt file
      //read file with fs module
      const data = await fs.readFile(QUOTE_FILE, 'utf-8');
      console.log(data)
      
      // split into lines 
      // select random quote
    // console log the quote and author
    // You may style the text with chalk as you wish
  });

program
  .command("addQuote <quote> [author]")
  .description("adds a quote to the quote file")
  .action(async () => {
    // TODO: Add the quote and author to the quotes.txt file
    // If no author is provided,
    // save the author as "Anonymous".
    // After the quote/author is saved,
    // alert the user that the quote was added.
    // You may style the text with chalk as you wish
    // HINT: You can store both author and quote on the same line using
    // a separator like pipe | and then using .split() when retrieving
  });

program.parse();
