  
module.exports = function(eleventyConfig) {
  
  // Allow data cascading instead of replacing. Mainly for post tags.
  eleventyConfig.setDataDeepMerge(true);
  
  // Folders to copy into output.
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("css");
  
  // If we use Netlify and has the _redirects file.
  eleventyConfig.addPassthroughCopy("_redirects");

  eleventyConfig.addCollection("lastThreePosts", function(collection) {
    return collection.getFilteredByTag("post").slice(-3).reverse()
  });
  
  eleventyConfig.addFilter("toISOString", function(date) {
    return date.toISOString().split('T')[0];
  });

}
