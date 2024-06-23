const contents = document.querySelectorAll("#menu-demo section");
const menuItems = document.querySelectorAll("menu li");

const content = contents[0];
const menuItem = menuItems[0];

for (let i = 0; i < menuItems.length; i += 1) {
  const menuItem = menuItems[i];
  const content = contents[i];

  for (contentBox of contents) {
    menuItems.addEventListener("click", () => {
      content.style.display = "block";
    });
  }
}

const toggledTopic = document.queryDelector("div h3");
const toggledContent = document.queryDelector("div p");

for(let i=0; i < toggledTopic.length; i+= 1) {
    toggledTopics[i].addEventListener("click", () => {
        toggledContent[i].classlist.toggle("hidden");
    });
}


toggledTopic.addEventListener("click", () => {
  toggledContent.classlist.toggle("hidden");
});

console.log(toggledContent);

keyInput.addEventListener("keypress", (e) => {
    
})