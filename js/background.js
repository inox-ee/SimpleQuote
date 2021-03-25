chrome.contextMenus.create({
  title: "Copy markdown link to clipboard",
  type: "normal",
  contexts: ["page"],
  onclick: (info, tab) => {
    const textArea = document.createElement("textarea");
    document.body.appendChild(textArea);
    const str = `[${tab.title}](${tab.url})`;
    textArea.value = str;
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  },
});
