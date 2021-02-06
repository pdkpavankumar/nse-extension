(function () {
  var waitFor = (sec) => {
    var waitTill = new Date(new Date().getTime() + sec * 1000);
    while (waitTill > new Date()) { }
  }

  var combo1 = document.querySelector('#select_symbol');
  var combo2 = document.querySelector('#expirySelect');
  var goBtn = document.querySelector('#symbolSearchGo');
  var dwnloadBtn = document.querySelector('#optionchain_equity_sp > div > div > div.row.my-3 > div.xlsDownload-wrp.col.d-flex.justify-content-end > div.xlsdownload > a');
  var options = window.array.split(',').map(ele => ele.trim());
  var date = window.date;
  var i = 0
  var inter = setInterval(() => {
    var option = options[i];
    combo1.value = option;
    combo2.value = date;
    goBtn.click();
    setTimeout(() => {
      dwnloadBtn.click();
    }, 3000);
    i++;
    if (i == options.length) { clearInterval(inter); }
  }, 4000);
})();