const fs = require("fs-extra");
let Blog;
try {
  const Blogs = fs.readJSONSync(
    "./expansion/upgrade/blog/routes/checkers/blogModelMainRoute.json"
  ).route;
  Blog = require(Blogs);
} catch (err) {
  Blog = require("../../blog");
}

/* Aristos Logger Path */
const errorAddEvent = require("../../../../../../important/AristosStuff/AristosLogger/AristosLogger")
  .addError;
/**
 * Counts blogs in the Blog collection.
 * @return {promise} A promise that resolves with the count of the blogs
 */
module.exports = () => {
  return Blog.countDocuments({})
    .then(count => {
      return count;
    })
    .catch(err => errorAddEvent(err, "blog query error"));
};
