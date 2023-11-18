const reg_exp = /(store|content)(?=\.)(|.+)\.zigzag\.kr/i

function ignoreSetCookie(req) {
  if (!req || !req.headers) {
    return false;
  }
  const headers = req.headers || {};

  if (headers.referer && reg_exp.test(headers.referer)) {
    return true;
  }

  return headers.origin && reg_exp.test(headers.origin);
}

module.exports.ignoreSetCookie = ignoreSetCookie;
