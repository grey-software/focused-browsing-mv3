import WebsiteController from '../website-controller'
import TwitterUtils from './twitter-utils'

export default class TwitterController extends WebsiteController {
  
  unfocus(): void {
    throw new Error('Method not implemented.')
  }
  premiumFocus(): void {
    throw new Error('Method not implemented.')
  }
  clearIntervals(): void {
    throw new Error('Method not implemented.')
  }
  feedIntervalId = 0

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
