function solution(new_id) {
  // 대문자를 소문자로 바꾼다.
  let result = "";

  for (let s of new_id) {
    s = s.toLowerCase();
    if (s === "-" || s === "_") {
      result += s;
    } else if (s === "." && result.substr(-1) === ".") {
      continue;
    } else if (
      (s.charCodeAt() >= 97 && s.charCodeAt() <= 122) ||
      s === "." ||
      (s.charCodeAt() >= 48 && s.charCodeAt() <= 57)
    ) {
      result += s;
    }
  }

  if (result[0] === ".") {
    result = result.slice(1);
  }
  if (result.substr(-1) === ".") {
    result = result.slice(0, -1);
  }

  if (result.length > 15) {
    result = result.slice(0, 15);
    if (result.substr(-1) === ".") {
      result = result.slice(0, -1);
    }
  } else if (result.length === 0) {
    result += "aaa";
  } else if (result.length <= 2) {
    let end = result.substr(-1);
    while (result.length < 3) {
      result += end;
    }
  }

  return result;
}

let new_id = "...!@BaT#*..y.abcdefghijklm";

console.log(solution(new_id));

//좋은풀이

function solution(new_id) {
  const answer = new_id
    .toLowerCase() // 1
    .replace(/[^\w-_.]/g, "") // 2
    .replace(/\.+/g, ".") // 3
    .replace(/^\.|\.$/g, "") // 4
    .replace(/^$/, "a") // 5
    .slice(0, 15)
    .replace(/\.$/, ""); // 6
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}
