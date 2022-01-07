const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            // to make this required, we can add demandOption: by default it is false
            demandOption: true,
            // mandatory attribute else it will return title as true on running node app.js --title
            type: 'string'
        },
        body: {
            desciption: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            // to make this required, we can add demandOption: by default it is false
            demandOption: true,
            // mandatory attribute else it will return title as true on running node app.js --title
            type: 'string'
        },
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        // console.log('Listing out all notes')
        notes.listNotes();
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            // to make this required, we can add demandOption: by default it is false
            demandOption: true,
            // mandatory attribute else it will return title as true on running node app.js --title
            type: 'string'
        },
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
})

// console.log(yargs.argv)
//With the help of parse, it actually goes through the process of parsing the arguments with all of the configuration details provided with yargs command above
yargs.parse()