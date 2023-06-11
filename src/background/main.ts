import { onMessage } from 'webext-bridge/background'
import { sponsorStorage } from '~/logic'

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
  const isSponsoring = await verifySponsorship(githubData.data)
  sponsorStorage.value = isSponsoring
})
