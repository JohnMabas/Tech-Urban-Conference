const btn = document.getElementById("menuBtn");
const menu = document.getElementById("mobileMenu");
const iconOpen = document.getElementById("iconOpen");
const iconClose = document.getElementById("iconClose");
btn.addEventListener("click", () => {
  const isHidden = menu.classList.toggle("hidden");
  btn.setAttribute("aria-expanded", String(!isHidden));
  iconOpen.classList.toggle("hidden");
  iconClose.classList.toggle("hidden");
});


 async function fetchUsers() {
    try {
        const response = await fetch("https://dummyjson.com/posts");
        const data = await response.json();

        return data.posts.map(post => post.body);
    } catch (e) {
        console.log(e.message);
        return [];
    }
}

fetchUsers().then(posts => {
    const speaker = document.querySelectorAll(".post");

    speaker.forEach((element, index) => {
        if (posts[index]) {
            element.innerText = posts[index];
        }
    });
});