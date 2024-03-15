//Scrape comments from a post
//For example from this post https://instagram.com/p/B7wOyffArc5/
//In this example post id will be B7wOyffArc5 or you can set full URL
(async () => {
  try {
    const options = { count: 100 };
    const comments = await instaTouch.comments("B7wOyffArc5", options);
    console.log(comments);
  } catch (error) {
    console.log(error);
  }
})();
