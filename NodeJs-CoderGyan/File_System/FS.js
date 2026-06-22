// import * as fs from "node:fs"



/* 
function createFile(pathname) {

    // sync
    // fs.writeFileSync(pathname, "Hello!, Vikas \n\n")
    // fs.appendFileSync(pathname, "Hello!, Prakhar")

    // console.log("File has been created...")
    
    // when ever fs operation is performed a new thread is created for it
    
    
    // Async
    // Error first callbacks
    
    fs.writeFile(pathname, "Hello!, Async Node Js", (error) => {
        if (error) {
            console.log("Something went wrong while creating file...")
            return
            }
            
            fs.appendFile(pathname, "\n Hello!, Async JavaScript", (error, data) => {
                if (error) {
                console.log("Something went wrong while creating file...")
                return
            }


            console.log("File has been Created Async. inner..")
            })
            
        console.log("File has been Created Async. outer..")
        })


        
        console.log("File Operation done...")
        
        } */

// * promises 

/* async function createFile(pathname) {
    try {
        await fs.writeFile(pathname, "Hello NodeJs! \n")
        await fs.appendFile(pathname, "Hello JavaScript!")
    } catch (error) {
        console.log(error, "Error")
    }
    
    
    console.log("File written!")
    
    
    }
    
    createFile("./Hello.txt") */

import { stat } from "node:fs"
import * as fs from "node:fs/promises"
import path from "node:path"


export async function listItems(listPath = './') {
    const items = await fs.readdir(listPath, { withFileTypes: true })

    return items.map((items) => {
        return {
            name: items.name,
            type: items.isDirectory() ? "Folder" : "File",
            path: path.join(import.meta.dirname, items.name)
        }
    })
}

// listItems()

export async function createdFolder(folderName) {
    await fs.mkdir(folderName, { recursive: true })  // recursive parameter makes nested folder creation possible
}

export async function deleteFolder(folderPath) {
    await fs.rm(folderPath, { recursive: true })
    console.log("Folder has been deleted...")
}


export async function writeToFile(pathname, content) {
    await fs.appendFile(pathname, content + "\n")

    console.log("Content has been written in file...", content)
}

export async function createFile(pathname, content = '') {
    await fs.writeFile(pathname, content + "\n")
    console.log("File has been created...", content)
}

export async function readFile(pathname) {
    const data = await fs.readFile(pathname, 'utf-8')

    console.log("data \n", data)
}

export async function deleteFile(filePath) {
    await fs.unlink(filePath)
    console.log("File has been deleted...")
}

export async function getFileInfo(filePath) {
    const stats = await fs.stat(filePath)

    return {
        size: `${(stats.size / 1024)} KB`,
        created: stats.birthtime.toLocaleString(),
        modified: stats.mtime.toLocaleString(),
    }
    console.log(stats)
}

// createFile("./Hello.txt", "Hello Vikas")
// writeToFile("./Hello.txt", "Hello Prakhar")
// readFile("./Hello.txt")
// createdFolder('./contents/images/logos')
// getFileInfo("./Hello.txt").then((data) => {
//     console.log("data: ", data)
// })

// deleteFile("./Hello.txt")

// deleteFolder("./contents")


