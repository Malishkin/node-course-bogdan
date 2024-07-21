async function getData(url) {
  const response = await fetch(url);
  const posts = response.json();
  return posts;
}

export default getData;
