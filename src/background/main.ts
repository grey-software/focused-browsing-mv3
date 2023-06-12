import { onMessage } from 'webext-bridge/background'
import { AppState } from '~/focus/types'
import { appStateStorage } from '~/logic/app-state'

const verifySponsorship = async (githubData: any) => {
  const isSponsoringResult = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${githubData.token}`,
    },
    body: JSON.stringify({
      query: `
        query { 
          organization(login:"grey-software") {
            viewerIsSponsoring
          }
        }
      `,
    }),
  })
    .then(res => res.json())
    .then(response => JSON.stringify(response))

  console.log(isSponsoringResult)
  const isSponsoring = JSON.parse(isSponsoringResult).data.organization.viewerIsSponsoring
  return isSponsoring
}

onMessage('verify-sponsor', async (githubData) => {
  console.log(githubData)
  const isSponsor = await verifySponsorship(githubData.data)
  const appState: AppState = JSON.parse(appStateStorage.value);
  appState.isSponsor = isSponsor
  appStateStorage.value = JSON.stringify(appState)
  console.log(appStateStorage.value)
})
