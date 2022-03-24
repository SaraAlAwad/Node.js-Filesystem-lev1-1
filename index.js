const fs = require("fs")

fs.open("./blog1.txt", "r", function (err, f) {
    if (err) {
        return console.error(err);
    }
    console.log(f);
    console.log("File is opened!!");
})

// const outputStr = "my name is Sara"
// fs.writeFile("./blog1.txt", outputStr, () => {
//     console.log("done. please see totalLinesOfCode.txt file in current project")
// })
const content = 'this is the file i created with write file'

// fs.writeFile('./blog2.txt', content, err => {
//     if (err) {
//         console.log(err);
//         return
//     }
// })

// fs.mkdir("./assets", function (err) {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log('New directory successfully created.');
// })

// const txt = "delete file"
// fs.writeFile('./delete.txt', txt, err => {
//     if (err) {
//         console.log(err);
//         return
//     }

//     console.log("new file delete.txt has been created");
// })

// fs.rmdir("./assets", function (err) {
//     if (err) {
//         throw err
//     }
//     console.log("Successfully removed the empty directory!")
// })

// fs.unlink("./delete.txt", (err) => {
//     if (err) {
//         console.error(err)
//         return
//     }
//     console.log("file removed");
// }
// )

// create a new file then rename it
const txt = "Hello World v.02"
fs.writeFile('./hello.txt', txt, err => {
    if (err) {
        console.log(err);
        return
    }

    console.log("new file has been created");
})
//fs.rename( oldPath, newPath, callback )
fs.rename('./hello.txt', './HelloWorld.txt', () => {
    console.log('RENAME');
});