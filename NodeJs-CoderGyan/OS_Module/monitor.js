import chalk from 'chalk'
import os, { cpus } from 'node:os'


function monitor() {
  // take snapshot
  // take another snapshot after a second


  const oldCpus = os.cpus()

  setTimeout(() => {
    const newCpus = os.cpus()

    const usage = newCpus.map((cpus, i) => {
      return {
        Core: i,
        Usage: CalculateUsage(oldCpus[i], cpus) + "%",
      }
    })

    // clears previous output
    console.clear()
    console.log(chalk.bgMagenta("System statistics"))
    console.table(usage)

    const usedMemory = (os.totalmem() - os.freemem()) / (1024 * 1024 * 1024)
    const TotalMemory = os.totalmem() / (1024 * 1024 * 1024)
    const FreeMemory = os.freemem() / (1024 * 1024 * 1024)

    console.log(
      usedMemory > 3 ? chalk.redBright(`Memory used: ${usedMemory.toFixed(2)} GB`) : chalk.greenBright(`Memory used: ${usedMemory.toFixed(2)} GB`)
    )
    // console.log(`Memory used: ${usedMemory.toFixed(2)} GB`)
    console.log(`Total Memory: ${TotalMemory.toFixed(2)} GB`)
    console.log(`Free Memory: ${FreeMemory.toFixed(2)} GB`)

  }, 1000)


}



function CalculateUsage(oldCpus, newCpus) {

  const oldTotal = Object.values(oldCpus.times).reduce((a, b) => a + b)

  const newTotal = Object.values(newCpus.times).reduce((a, b) => a + b)


  const idle = newCpus.times.idle - oldCpus.times.idle

  const total = newTotal - oldTotal

  const used = total - idle

  return ((100 * used) / total).toFixed(2)


}

setInterval(monitor, 1000)


/* 

[
    {
      model: 'Intel(R) Core(TM) i5-10300H CPU @ 2.50GHz',
      speed: 0,
      times: { user: 65390, nice: 0, sys: 48710, idle: 3420280, irq: 0 }
    },
    {
      model: 'Intel(R) Core(TM) i5-10300H CPU @ 2.50GHz',
      speed: 0,
      times: { user: 99460, nice: 30, sys: 36090, idle: 3407150, irq: 0 }
    },
    {
      model: 'Intel(R) Core(TM) i5-10300H CPU @ 2.50GHz',
      speed: 0,
      times: { user: 80610, nice: 0, sys: 49350, idle: 3417350, irq: 0 }
    },
    {
      model: 'Intel(R) Core(TM) i5-10300H CPU @ 2.50GHz',
      speed: 0,
      times: { user: 75570, nice: 0, sys: 39640, idle: 3439000, irq: 0 }
    },
    {
      model: 'Intel(R) Core(TM) i5-10300H CPU @ 2.50GHz',
      speed: 0,
      times: { user: 85710, nice: 0, sys: 48720, idle: 3412510, irq: 0 }
    },
    {
      model: 'Intel(R) Core(TM) i5-10300H CPU @ 2.50GHz',
      speed: 0,
      times: { user: 65330, nice: 0, sys: 36890, idle: 3452720, irq: 0 }
    },
    {
      model: 'Intel(R) Core(TM) i5-10300H CPU @ 2.50GHz',
      speed: 0,
      times: { user: 97530, nice: 4150, sys: 48980, idle: 3404310, irq: 0 }
    },
    {
      model: 'Intel(R) Core(TM) i5-10300H CPU @ 2.50GHz',
      speed: 0,
      times: { user: 77460, nice: 15060, sys: 35220, idle: 3430270, irq: 0 }
    }
  ]

*/