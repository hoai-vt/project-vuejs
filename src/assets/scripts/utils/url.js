export function isContains(pattern, text) {
  const regExp = RegExp(pattern, "i");
  return regExp.test(text);
}

export function hasProtocol(path) {
  const regExp = RegExp("^https?://[^/]+/");
  return regExp.test(path);
}

export function isInternalLink(path) {
  if (!hasProtocol(path)) return true;

  const host = location.host;
  const targetUrl = new URL(path);

  return host === targetUrl.host;
}

export function removeHtmlTag(text) {
  const regExp = RegExp(`<(".*?"|'.*?'|[^'"])*?>`, "gim");
  let result = text;
  let htmlTag;

  while ((htmlTag = regExp.exec(text)) !== null) {
    result = result.replace(htmlTag[0], "");
  }

  return result;
}
