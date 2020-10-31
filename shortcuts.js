try {
  (function() {

    // Only load once
    if (window.__shortcut_extension_loaded) {
      return
    }
    window.__shortcut_extension_loaded = true

    const VOLUME_STEP = 1/15
    const KeyCode = {
      F: 70,
      M: 77,
      SPACE: 32,
      LEFT: 37,
      RIGHT: 39,
      UP: 38,
      DOWN: 40,
    }

    function getPlayer() {
      if (!window.videojs) {
        return
      }
      let players = Object.keys(window.videojs.players)
      for (let i=0; i < players.length; i++) {
        let player = window.videojs.players[players[i]]
        if (player) {
          return player
        }
      }
    }

    function changeVolume(increment) {
      let player = getPlayer()
      if (!player) { return }
      player.volume(Math.max(0, Math.min(1.0, player.volume() + increment)))
    }

    let handlers = {
      [KeyCode.F]:     () => document.querySelector('.vjs-fullscreen-control').click(),
      [KeyCode.LEFT]:  () => document.querySelector('.backward-button').click(),
      [KeyCode.RIGHT]: () => document.querySelector('.forward-button').click(),
      [KeyCode.UP]:    () => changeVolume(VOLUME_STEP),
      [KeyCode.DOWN]:  () => changeVolume(-VOLUME_STEP),

      [KeyCode.SPACE]: (e) => {
        document.querySelector('.vjs-play-control').click()
        e.preventDefault()
        e.stopPropagation()
        return false
      },

      [KeyCode.M]:     () => {
        let player = getPlayer()
        player && player.muted(!player.muted())
      }
    }

    document.addEventListener('keydown', (e) => {
      if (!getPlayer()) {
        // Don't handle keys for pages without a player
        return
      }
      let handler = handlers[e.keyCode]
      if (handler) {
        // There's a bug with space bar as a shortcut key in Firefox:
        // https://bugzilla.mozilla.org/show_bug.cgi?id=1487102
        document.activeElement.blur()

        return handler(e)
      }
    })
  })()

} catch (e) {
  debugger
}
