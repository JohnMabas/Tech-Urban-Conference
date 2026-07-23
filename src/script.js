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

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const data = await response.json();
        return data.posts;

    } catch (error) {
        console.log(error.message);
    }
}

fetchUsers().then((posts) => {
    const container = document.querySelector(".blogs");
    const template = document.querySelector("#blog-section");

    posts.forEach((post) => {
        const clone = template.content.cloneNode(true);

        clone.querySelector(".title").textContent = post.title;
        clone.querySelector(".body").textContent = post.body;
        clone.querySelector(".views").textContent = `Views : ${post.views}`;
        clone.querySelector(".likes").textContent = `Likes: ${post.reactions.likes}`;
        clone.querySelector(".dislikes").textContent = `Dislikes: ${post.reactions.dislikes}`;

        const tags = clone.querySelector(".tags");

        post.tags.forEach((tag) => {
            const span = document.createElement("span");
            span.textContent = tag;
            span.className =
                "inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm mr-2 mb-2";
            tags.appendChild(span);
        });

        container.appendChild(clone);
    });
});