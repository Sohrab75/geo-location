const fs= require('fs');

// fs.writeFileSync("read.txt", "hello world");

//fs.writeFileSync("read.txt", "Hello NodsJs World");
//fs.appendFileSync("read.txt", "Hello NodsJs World 22");

fs.renameSync("read.txt", "readwrite.txt");
