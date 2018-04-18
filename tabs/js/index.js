'use strict';

const tabs = document.querySelectorAll('.tabs > nav a');
const content = document.getElementById('content');
const preloader = document.getElementById('preloader');
const request = new XMLHttpRequest();

request.addEventListener('loadstart', () => {
  preloader.classList.remove('hidden');
});

request.addEventListener('load', () => {
  preloader.classList.add('hidden');
  content.innerHTML = request.responseText;
});

for (let tab of tabs) {
  tab.addEventListener('click', (event) => {
    event.preventDefault();
    tabs.forEach((tab) => tab.classList.remove('active'));
    tab.classList.add('active');
    showTab(event.currentTarget.href);
  });
}

showTab(tabs[0].href);

function showTab(url) {
  request.open('GET', url);
  request.send();
}