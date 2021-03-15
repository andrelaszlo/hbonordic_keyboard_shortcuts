This extension enables keyboard shortcuts for HBO Europe for Firefox and Chrome.

The following sites are supported:

- [HBO Nordic](http://www.hbonordic.com/) - http://www.hbonordic.com/

Experimental support:

- [HBO Hungary](https://hbogo.hu/) - https://hbogo.hu/
- [HBO España](https://en.hboespana.com/) - https://en.hboespana.com/
- [HBO Czech Republic](https://hbogo.cz/) - https://hbogo.cz/
- [HBO Romania](https://hbogo.ro/) - https://hbogo.ro/
- [HBO Bulgaria](https://hbogo.ro/) - https://hbogo.ro/
- [HBO Portugal](https://hboportugal.com/) - https://hboportugal.com/
- [HBO Slovakia](https://hbogo.sk/) - https://hbogo.sk/
- [HBO Poland](https://hbogo.pl/) - https://hbogo.pl/
- [HBO Croatia](https://hbogo.hr/) - https://hbogo.hr/
- [HBO Slovenia](https://hbogo.si/) - https://hbogo.si/
- [HBO Montenegro](https://hbogo.me/) - https://hbogo.me/
- [HBO Serbia](https://www.hbo.rs) - https://www.hbo.rs
- [HBO Macedonia](https://hbogo.mk) - https://hbogo.mk
- [HBO Bosnia and Herzegovina](https://hbogo.ba) - https://hbogo.ba

Please report any bugs that you find. I only have access to HBO Nordic for testing.

[![Buy Me A Coffee logo](https://media.giphy.com/media/513lZvPf6khjIQFibF/giphy.gif)](https://www.buymeacoffee.com/andrelaszlo)


## Install links

addons.mozilla.com (AMO): https://addons.mozilla.org/en-US/firefox/addon/hbo-nordic-keyboard-shortcuts/

Chrome Web Store: https://chrome.google.com/webstore/detail/hbo-nordic-keyboard-short/mlpdnnafcflhiocbcbneodhbdbinpima

See [releases](https://github.com/andrelaszlo/hbonordic_keyboard_shortcuts/releases) for packaged versions available for manual installation.


## Shortcuts

- Full-screen: F
- Play/pause: Space
- Toggle mute: M
- Skip forward/backward: Left and right arrow keys
- Volume up/down: Up and down arrow keys


## Building

### Firefox

```
web-ext build
export WEB_EXT_API_KEY=
export WEB_EXT_API_SECRET=
# Or, source ../env if you have the file
web-ext sign
```

Update it at https://addons.mozilla.org/en-US/developers/addons

### Chrome and Chromium

Go to the [developer console](https://chrome.google.com/webstore/devconsole).

See https://developer.chrome.com/docs/webstore/update/#upgrade-your-package for more info.


## Acknowledgements

Author: André Laszlo

Icon: Keyboard by Susannanova from the Noun Project


## Notes

The extension or its author are not affiliated with HBO in any way.
