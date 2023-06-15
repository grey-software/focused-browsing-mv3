import IntervalBot from '../interval-bot'
import WebsiteController from '../website-controller'
import TwitterUtils from './twitter-utils'
import { createApp } from 'vue'
import FocusCard from '~/components/FocusCard.vue'

export default class TwitterController extends WebsiteController {

  unfocus(): void {
    throw new Error('Method not implemented.')
  }

  clearIntervals(): void {
    throw new Error('Method not implemented.')
  }

  focusIntervalBot = new IntervalBot()

  focus() {
    this.focusIntervalBot.start(this.tryBlockingFeed)
  }

  tryBlockingFeed() {
    console.log("called")
    try {
      const url = document.URL
      console.log(url)
      if (!TwitterUtils.isHomePage(url))
        return

      if (TwitterUtils.isFeedHidden())
        return

      if (TwitterUtils.hasFeedLoaded()) {
        console.log("Hiding feed")
        const feed = TwitterUtils.getTwitterFeed()
        console.log(feed)
        const feedParent = feed.parentElement
        feedParent?.removeChild(feed)
        const root = document.createElement('div')
        const app = createApp(FocusCard)
        app.mount(root)
        feedParent?.appendChild(root)
      }
    }
    catch (err) {
      console.log(err)
    }
  }
}
