// 826. Most Profit Assigning Work



// You have n jobs and m workers. You are given three arrays: difficulty, profit, and worker where:

// difficulty[i] and profit[i] are the difficulty and the profit of the ith job, and
// worker[j] is the ability of jth worker (i.e., the jth worker can only complete a job with difficulty at most worker[j]).
// Every worker can be assigned at most one job, but one job can be completed multiple times.

// For example, if three workers attempt the same job that pays $1, then the total profit will be $3. If a worker cannot complete any job, their profit is $0.
// Return the maximum profit we can achieve after assigning the workers to the jobs.







/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    
    let jobs = []

    for(let i = 0; i < difficulty.length; i++){
        jobs.push({difficulty: difficulty[i], profit: profit[i]})
    }

    jobs.sort((a,b) => a.difficulty - b.difficulty)
    worker.sort((a,b) => a - b)

    let maxProfit = 0
    let jobIndex = 0
    let totalProfit = 0

    for(let i = 0; i < worker.length; i++){
        
        let ability = worker[i]

        while(jobIndex < jobs.length && ability >= jobs[jobIndex].difficulty){
            maxProfit = Math.max(maxProfit, jobs[jobIndex].profit)
            jobIndex++
        }  

        totalProfit += maxProfit
    }

    return totalProfit
};