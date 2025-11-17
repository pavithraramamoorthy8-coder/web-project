function loadContent(page) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", page, true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      document.body.innerHTML = xhr.responseText;
    } else {
      alert("Error loading page!");
    }
  };
  xhr.send();
}
