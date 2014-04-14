# Twitter Userstyle

Bring the aesthetic of Twitter for iOS to the [newly updated Twitter.com](https://twitter.com/twitter/status/422840296175443968) with this custom userstyle.

![](https://f.cloud.github.com/assets/98681/1937508/b8618f62-7f26-11e3-8a87-f8c8373d61c3.png)


## What changes

* Overrides nearly all of the new accent color treatment across the interface.
* Styles the topbar like that of iOS.
* Removes the rather heavy global focus style.
* Changes the stats design to look closer to iOS.
* Fixes the inconsistent border colors by using the same color across the board.
* Makes the topbar full-width instead of being slightly wider than the content.
* Outright hides the Who to Follow widget those avatars are quite large and the buttons' text is misaligned.
* Hides the text for each Tweet action (Reply, Favorite, etc) so only the icons are shown.


## Why

More than anything else, this is an hour-long experiment that I decided to open source. I enjoy using Twitter's native apps and believe the same design can work on all platforms.

Beyond that, I think (and hope) Twitter can grow to no longer support user themes or customizations (beyond profile avatars and headers) without sacrificing the overall experience or utility. So far, I'm enjoying it.


## Todo

Want to help? Great! Submit a pull request that does one of the following:

* Move timestamps away from the user name in Tweets and back to the right
* Fix accent colors everywhere
* Fix borders and shadows on dropdown menus
* Fix remaining uses of the accent color
* Any kind of bugs


## Bug reports

I've disabled issues on this repository. If you'd like to help, submit a pull request instead. I have little intent of supporting every edge case, though I do want to improve this.


## How to use

#### With userstyle extension

* Chrome: https://chrome.google.com/webstore/detail/stylish/fjnbnpbmkenffdnngjfgmeleoegfcffe?hl=en
* Firefox: https://addons.mozilla.org/en-US/firefox/addon/stylish/ (be sure to place the CSS inside the `@-moz-document domain("twitter.com")` block)
* Safari: http://code.grid.in.th/

Copy-pasta the styles from `twitter.css` into a new userstyle in your favorite browser. Be sure to specify that it apply to sites beginning with `https://twitter.com`.

#### With custom Chrome extension

Load up an unpacked Chrome extension with the included `manifest.json` file.


## <3

Licensed under [MIT](LICENSE) by [@mdo](https://twitter.com/mdo).
