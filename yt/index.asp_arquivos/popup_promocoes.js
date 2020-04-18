function NewWindow(mypage, myname, w, h, scroll) {
var winl = (screen.width - w) / 2;
var wint = (screen.height - h) / 2;
winprops = 'height='+h+',width='+w+',top='+wint+',left='+winl+',scrollbars='+scroll+',resizable=no'
win = window.open(mypage, myname, winprops)
if (parseInt(navigator.appVersion) >= 4) { win.window.focus(); }
}

function MM_displayStatusMsg(msgStr) {
  status=msgStr;
  document.MM_returnValue = true;
}
