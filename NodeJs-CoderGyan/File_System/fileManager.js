import * as readline from "node:readline/promises"
import { stdin, stdout } from "node:process";   // taking input from terminal

import chalk from "chalk"

import { createFile, createdFolder, writeToFile, deleteFile, deleteFolder, listItems, } from "./FS.js";


const r1 = readline.createInterface({
    input: stdin,
    output: stdout
})

async function Menu() {

    console.clear()
    console.log(chalk.blue.bold("\n File System Manager \n"))

    const options = [
        'Create Folder',
        "Create File",
        "Write to File",
        "Delete File",
        "Delete Folder",
        "List Files",
        "Exit"
    ]

    options.forEach((opt, i) => console.log(`${i + 1} ` + chalk.whiteBright(`${opt}`)))

    const answer = await r1.question(chalk.cyan("\n Select an option: "))

    console.log("Ans: ", answer)

    switch (answer) {
        case '1':
            const folderPath = await r1.question(chalk.cyan("Give Folder path: "))
            await createdFolder(folderPath)

            console.log(chalk.green("Folder has been created.."))
            break;
        case '2':
            const filePath = await r1.question(chalk.cyan("Give File path: "))
            const initialContent = await r1.question(chalk.cyan("Initial Content: "))
            await createFile(filePath, initialContent);
            break;

        case '3':
            const appendFilePath = await r1.question(chalk.cyan("File path: "))
            const appendContent = await r1.question(chalk.cyan("Add content: "))

            await writeToFile(appendFilePath, appendContent)
            break
        case '4':
            const deleteFilePath = await r1.question(chalk.cyan("File path: "))

            await deleteFile(deleteFilePath)
            break;
        case '5':
            const deleteFolderPath = await r1.question(chalk.cyan("Folder Path:"))

            await deleteFolder(deleteFolderPath)

            break;
        case '6':
            const listPath = await r1.question(chalk.cyan("List Path: "))

            const items = await listItems(listPath || './')

            console.log(chalk.blue("\nContents: "))

            items.forEach(item => {
                const icon = item.type === "folder" ? "📂" : "📄"

                console.log(`${icon} ${item.name}`)
            })
            break;
        case '7':
            r1.close()
            return;

        default:
            console.log(chalk.red("Enter a valid Option"))

    }

    await r1.question("\n Press Enter to continue: ")

    Menu()
}


Menu()

