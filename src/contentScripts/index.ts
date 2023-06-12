import { AppState, Website } from '~/focus/types';
import TwitterController from '~/focus/twitter'
import WebsiteController from '~/focus/website-controller';
import { launchAccessScript } from './access';
import { appStateStorage } from '~/logic/app-state';

let currentWebsite: Website = Website.Unsupported;
let websiteController: WebsiteController;

async function initialize() {
  let currentURL = document.URL;
  console.log(currentURL)
  if (currentURL.includes("twitter.com")) {
    websiteController = new TwitterController();
    currentWebsite = Website.Twitter;
  } else if (currentURL.includes("access.grey.software")) {
    console.log("In access")
    currentWebsite = Website.Access;
    launchAccessScript()
  }
}

function getFocusState(website: Website) {
  const appState: AppState = JSON.parse(appStateStorage.value)
  const focusState = appState.focusStates[website]
  return focusState
}

function render() {
  if (currentWebsite != Website.Unsupported) {
    let focusState = getFocusState(currentWebsite);
    websiteController.renderFocusState(focusState);
  }
}

// (async () => {
//   await initialize();
//   if (currentWebsite === Website.Access) return
//   render()
// });
