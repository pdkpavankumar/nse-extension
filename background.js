var submit = () => {
  document.getElementsByClassName('loader')[0].style.display = 'block';
  document.getElementById("submit").disabled = true;
  var array = document.getElementById("symbol").value || '';
  var date = document.getElementById("date").value;

  chrome.tabs.executeScript({
    code: `
    window.array = '${array}';
    window.date = '${date}';
  `
  });
  chrome.tabs.executeScript({ file: "content.js" });
}

document.addEventListener("DOMContentLoaded", () => {
  var button = document.getElementById("submit")

  button.addEventListener("click", (e) => {
    submit();
  })
});