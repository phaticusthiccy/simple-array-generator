function custom(length, current) {
  current = current ? current : '';
  return length ? custom(--length, "0123456789ABC".charAt(Math.floor(Math.random() * 12)) + current) : current;
}

console.log(custom(23));
