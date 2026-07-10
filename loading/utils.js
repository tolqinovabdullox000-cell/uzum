var DEFAULT_REDIRECT_DELAY = 3000;
var DEFAULT_REDIRECT_URL = "./home/index.html";

function getRedirectConfig(customDelay, customUrl) {
  return {
    delay: typeof customDelay === "number" && customDelay >= 0 ? customDelay : DEFAULT_REDIRECT_DELAY,
    url: typeof customUrl === "string" && customUrl.length > 0 ? customUrl : DEFAULT_REDIRECT_URL,
  };
}

function scheduleRedirect(delay, url, locationObj) {
  var config = getRedirectConfig(delay, url);
  var loc = locationObj || window.location;
  return setTimeout(function () {
    loc.href = config.url;
  }, config.delay);
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    DEFAULT_REDIRECT_DELAY: DEFAULT_REDIRECT_DELAY,
    DEFAULT_REDIRECT_URL: DEFAULT_REDIRECT_URL,
    scheduleRedirect: scheduleRedirect,
    getRedirectConfig: getRedirectConfig,
  };
}
