const { program } = require("commander");
// import fs module which allows us to interact with files on the hard disk
const fs = require("fs/promises");
const chalk = require("chalk");
const QUOTE_FILE = "quotes.txt";

// console.log("TEST: Hello world!")

program
  .name("quotes")
  .description("CLI tool for inspiration")
  .version("0.1.0");

program
  .command("getQuote")
  .description("Retrieves a random quote")
  .action(async () => {
    // ** add try statement from lecture 2.05
    // TODO: Pull a random quote from the quotes.txt file
    try {
      //read file with fs module
      const data = await fs.readFile(QUOTE_FILE, 'utf-8');
      // console.log(data);
      // split into lines 
      const lines = data.split("\n");
      // filter blank lines
      const filteredLines = lines.filter(line => line.trim() !== "");
      // get random index
      const randomIndex = Math.floor(Math.random() * filteredLines.length);
      // select quote using randomIndex from filteredLines
      const randomQuote = filteredLines[randomIndex];
      // console log the quote and author
      // You may style the text with chalk as you wish
      console.log(chalk.inverse.italic(randomQuote));
    } catch (error) {
      console.log(err)
    }
  });

program
  .command("addQuote <quote> [author]")
  .description("adds a quote to the quote file")
  .action(async (quote, author) => {
    try {
    // TODO: Add the quote and author to the quotes.txt file
      // get quote and author from user input: <quote> [author]
      // ** If no author is provided save the author as "Anonymous"
      const authorName = author || "Anonymous";
      // match quote formatting 
      const newQuote = (quote + " |" + authorName + "\n")
      // add to qoutes.txt with appendFile
      await fs.appendFile(QUOTE_FILE, newQuote)
	    const fileContents = await fs.readFile(QUOTE_FILE, 'utf-8')
      // After the quote/author is saved, alert the user that the quote was added.
      // You may style the text with chalk as you wish
      console.log(chalk.bold.magenta("A new quote was added!"))
    } catch(err) {
      console.log(err)
    }
    // HINT: You can store both author and quote on the same line using
    // a separator like pipe | and then using .split() when retrieving
  });

program.parse();
