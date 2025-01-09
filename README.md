# MongoDB Aggregation Pipeline Bug

This repository demonstrates a common error encountered when using MongoDB's aggregation framework. The bug involves an incorrect aggregation pipeline that leads to inaccurate results when grouping and sorting documents.

## Bug Description
The provided `bug.js` file contains an aggregation pipeline with flaws in the `$match` and `$group` stages. This results in an incorrect count of documents within groups, leading to unexpected results after sorting.

## Solution
The `bugSolution.js` file offers a corrected aggregation pipeline. This solution addresses the logic errors by ensuring correct filtering in the `$match` stage and accurately grouping the documents in the `$group` stage.

## How to reproduce
1. Clone this repository.
2. Ensure you have a MongoDB instance running.
3. Install required Node.js packages.
4. Run `bug.js` and `bugSolution.js` and compare the output.
