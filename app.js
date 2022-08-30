const input = document.createElement('input');
input.type = 'text';

input.oninput = (e) => {
  console.log(e);
};

document.body.append(input);
