
export function launchAccessScript() {
  const url = new URL(window.location.href);
  const status = url.searchParams.get("status");
  const token = url.searchParams.get("token");
  console.log(url, status, token)
  // Send the token to the background script
  browser.runtime.sendMessage("verify-sponsor", { status, token });
}
