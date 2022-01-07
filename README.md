# notes-app
This application runs on node using cli

Core operations in this app are - 

**Add (To add a new task, will through error if task is already present)**
node app.js add --title="Demo Task" --body="Task1, Task2"

**Remove (To remove an old task)**
node app.js remove --title="Demo Task"

**List (To display all the tasks)**
node app.js list

**Read (To read items in the particular task)**
npde app.js read --title="Demo Task"
