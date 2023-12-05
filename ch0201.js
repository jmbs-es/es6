// Write Javascript code!
// Global scope
var topic = 'JavaScript';
var topicLet = 'JavaScript';

// Block scope
if (topic) {
  console.log('With var we overwrite the global scope');
  var topic = 'ECMASript ES6';
  console.log('block topic', topic);

  console.log('With let we only change the block scope');
  let topicLet = 'ECMASript ES6';
  console.log('block topic with Let', topicLet);
}

console.log('global is overwritten with var declared in the block', topic);
console.log(
  'global is NOT overwritten with let declared in the block',
  topicLet
);

var div;
var box = document.getElementById('box');

console.log('with var all boxes show 5 for i value');

for (var i = 0; i < 5; i++) {
  div = document.createElement('div');
  div.onclick = function () {
    alert('This box #' + i);
  };
  box.appendChild(div);
}

console.log('with let all boxes show their corresponding value for i value');
var boxLet = document.getElementById('box-let');

for (let i = 0; i < 5; i++) {
  div = document.createElement('div');
  div.onclick = function () {
    alert('This box #' + i);
  };
  boxLet.appendChild(div);
}
