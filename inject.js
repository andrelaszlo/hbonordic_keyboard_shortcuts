function runtime() {
  if (typeof(browser) !== 'undefined' && browser.runtime) {
    return browser.runtime
  } else {
    return chrome.runtime
  }
}

function injectScript(file, node) {
  var th = document.getElementsByTagName(node)[0]
  var s = document.createElement('script')
  s.setAttribute('type', 'text/javascript')
  s.setAttribute('src', file)
  th.appendChild(s)
}

injectScript( runtime().getURL('/shortcuts.js'), 'body');
