import TwitterUtils from './twitter-utils'

export default class TwitterController {
  feedIntervalId = 0

  static init() {
    focus()
  }

  focus() {
    if (this.feedIntervalId)
      window.clearInterval(this.feedIntervalId)

    this.feedIntervalId = window.setInterval(() => {
      this.tryBlockingFeed()
    }, 250)
  }

  tryBlockingFeed() {
    try {
      const url = document.URL
      if (!TwitterUtils.isHomePage(url))
        return

      if (TwitterUtils.isFeedHidden())
        return

      if (TwitterUtils.hasFeedLoaded())
        this.hideFeed()
    }
    catch (err) {}
  }

  hideFeed() {
    const feed = TwitterUtils.getTwitterFeed()
    const feedParent = feed.parentElement
    feedParent?.removeChild(feed)

    window.clearInterval(this.feedIntervalId)

    this.feedIntervalId = window.setInterval(() => {
      this.tryBlockingFeed()
    }, 2000)
  }
}
