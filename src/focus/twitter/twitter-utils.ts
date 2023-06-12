function getTwitterFeed(): Element {
  return document.querySelectorAll('[role="main"]')[0].children[0].children[0].children[0].children[0].children[0]
    .children[4]
}

function getMainContainer(): HTMLElement {
  return document.querySelectorAll('[role="main"]')[0].children[0].children[0]
    .children[0].children[0].children[0].parentElement!
}

function hasFeedLoaded(): boolean {
  try {
    return getTwitterFeed().children.length === 1
  }
  catch (err) {
    return false
  }
}
function isFeedHidden(): boolean {
  const feed = getTwitterFeed()
  return feed?.nodeName === 'IFRAME'
}

function isHomePage(url: string): boolean {
  if (url.includes('https://twitter.com/'))
    return url.includes('/home') || url === 'https://twitter.com/'
  return false
}

export default {
  getTwitterFeed,
  hasFeedLoaded,
  isFeedHidden,
  isHomePage,
  getMainContainer,
}
