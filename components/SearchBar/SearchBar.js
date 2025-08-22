function search(e) {
  console.log("I am in the search event listener");
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  console.log("data:", data);
  console.log("searchquery before:", searchQuery);
  const searchQuery = data.query;
  fetchcharacter(searchQuery);
  console.log("searchquery after:", searchQuery);
  //console.log(data.query);
  e.target.reset();
}
