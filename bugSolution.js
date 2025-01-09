```javascript
// Corrected aggregation pipeline
aggregate([{
  $match: { "field": { $exists: true, $ne: null } }
}, {
  $group: { _id: "$field", count: { $sum: 1 } }
}, {
  $sort: { count: -1 }
}, {
  $limit: 10
}])
```