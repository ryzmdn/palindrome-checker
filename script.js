"use strict";

const result = document.getElementById("result");

function isPalindrome(text) {
  const originalString = text.replace(/[^a-z0-9]/gi, '').toLowerCase();
  const reversedString = originalString.split('').reverse().join('');
  return originalString === reversedString;
}

function checkPalindrome() {
  const input = document.getElementById("input");

  if (input.value.trim() === "") {
    result.textContent = "";
    return;
  }
  
  if (isPalindrome(input.value)) {
    result.textContent = `${input.value} is a Palindrome`;
    result.style.color = "#22c55e";
  } else {
    result.textContent = `${input.value} is NOT a Palindrome`;
    result.style.color = "#ef4444";
  }
}
