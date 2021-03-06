"use strict";

var customizeFirefox = {
  id: "customize",
  // title, badge, ...
  task: { title: "Customize Firefox" },
  // content about this task,
  page: () => {
    let page = document.createElement("div");
    let title = document.createElement("h1");
    title.textContent = "Rearrange your toolbar.";
    let desc = document.createElement("p");
    desc.textContent = `Put the tools you use most right at your fingertips. Customize mode lets you drag, drop, and reorder the toolbar with built-in features as well as extensions you add yourself.`;
    page.appendChild(title);
    page.appendChild(desc);
    return page;
  },
  // deal with the page
  pageActoin: function() {},
  // check if this task is done
  verify: async function() {
    return true;
  },
  // set this task as done (call for setAllComplete)
  setComplete: async function() {
    alert("set Customize Firefox tour as done");
  },
};
