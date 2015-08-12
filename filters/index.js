module.exports = function(swig) {

  function pageLink (page) {
    return '<a href="' + page.urlTitle + '">' + page.title + '</a>';
  };
  pageLink.safe = true;

  swig.setFilter('pageLink', pageLink);

};