document.addEventListener("mouseup", () => {
  const selection = window.getSelection();
  const text = selection.toString();

  if (text.length > 0) {
    const range = selection.getRangeAt(0);
    const span = document.createElement("span");

    span.className = "highlight";
    range.surroundContents(span);

    selection.removeAllRanges();
  }
});
