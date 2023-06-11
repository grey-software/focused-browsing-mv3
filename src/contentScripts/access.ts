// Listen for a completed state change
window.addEventListener('load', () => {
  console.log('on access')
  // Check the URL to see if it's the redirect URL
  if (window.location.href.startsWith('https://access.grey.software/result')) {
    console.log('on access result page')
    const url = new URL(window.location.href)
    const status = url.searchParams.get('status')
    const token = url.searchParams.get('token')
    // Send the token to the background script
    browser.runtime.sendMessage({ status, token })
  }
})
