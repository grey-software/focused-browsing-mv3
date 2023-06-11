function getTwitterFeed(): Element {
  return document.querySelectorAll('[role="main"]')[0].children[0].children[0].children[0].children[0].children[0]
    .children[4]
}

function getTwitterPanel(): Element {
  return document.querySelectorAll('[role="main"]')[0].children[0].children[0].children[0].children[1].children[0]
    .children[1].children[0].children[0].children[0]
}

function hasFeedLoaded(): boolean {
  try {
    return getTwitterFeed().children.length === 1
  }
  catch (err) {
    return false
  }
}

function hasPanelLoaded(): boolean {
  try {
    return getTwitterPanel().children.length !== 0
  }
  catch (err) {
    return false
  }
}

function isFeedHidden(): boolean {
  const feed = getTwitterFeed()
  return feed?.nodeName === 'IFRAME'
}

function isPanelHidden(): boolean {
  const panel = getTwitterPanel()
  return panel.children.length === 1
}

function isHomePage(url: string): boolean {
  if (url.includes('https://twitter.com/'))
    return url.includes('/home') || url === 'https://twitter.com/'
  return false
}

function getFeedAdElements(): HTMLElement[] {
  const spanElements = document.querySelectorAll('span')
  const targetSpanElements: HTMLElement[] = Array.from(spanElements).filter(element => element.innerHTML === 'Promoted')
  return targetSpanElements
    .map(promotedSpanElement => promotedSpanElement.closest('article'))
    .filter((it): it is HTMLElement => it !== null)
}

export default {
  getTwitterFeed,
  getTwitterPanel,
  hasFeedLoaded,
  hasPanelLoaded,
  isFeedHidden,
  isPanelHidden,
  isHomePage,
  getFeedAdElements,
}
