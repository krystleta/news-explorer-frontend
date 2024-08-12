export const toDate = getCurrentDate();
export const fromDate = getFromDate();

function formatDate(today) {
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${year}-${month}-${date}`;
}

function formatArticleDate(date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const dateString = `${month} ${date.getDate()}, ${year}`;
  return dateString;
}

function getCurrentDate() {
  const today = new Date();
  return formatDate(today);
}

function getFromDate() {
  const today = new Date();
  const day = today.getTime() - 7 * 24 * 60 * 60 * 1000;
  today.setTime(day);
  return formatDate(today);
}

function truncateString(str, length, ending = "...") {
  if (str.length > length) {
    return str.slice(0, length - ending.length) + ending;
  }
  return str;
}

function checkValidImage(str) {
  if (str === null) {
    return false;
  }
  if (str !== null && str.indexOf(".webp") > -1) {
    return false;
  } else return true;
}

function toTitleCase(str) {
  if (str === null || str === "") return false;
  else str = str.toString();

  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function getKeywords(articles) {
  const keywords = [];
  articles.forEach((item) => {
    if (keywords[item.keywordTag]) {
      keywords[item.keywordTag] += 1;
    } else {
      keywords[item.keywordTag] = 1;
    }
  });
  return keywords;
}

function getKeywordInfo(keywords) {
  const keywordTags = Object.keys(keywords).slice(0, 2).join(", ");
  const keywordTagCount = Object.keys(keywords).length - 2;
  let keywordInfo;

  if (keywordTagCount > 0) {
    keywordInfo = keywordTags + " and " + keywordTagCount + " others";
  } else {
    keywordInfo = keywordTags;
  }
  return keywordInfo;
}

function validateForm(data) {
  const errors = {};

  if (!data.search.trim()) {
    errors.username = "Please enter a search keyword.";
  }

  // if (!data.email.trim()) {
  //   errors.email = "Please enter you email address..";
  // } else if (!/\S+@\S+\.\S+/.test(data.email)) {
  //   errors.email = "Invalid email address.";
  // }

  // if (!data.password) {
  //   errors.password = "Password is required";
  // } else if (data.password.length < 8) {
  //   errors.password = "Password must be at least 8 characters long";
  // }

  // if (data.confirmPassword !== data.password) {
  //   errors.confirmPassword = "Passwords do not match";
  // }

  return errors;
}

export {
  formatArticleDate,
  getCurrentDate,
  getFromDate,
  truncateString,
  checkValidImage,
  toTitleCase,
  getKeywords,
  getKeywordInfo,
  validateForm,
};
