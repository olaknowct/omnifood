let callback = (entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry);
  });
};

let observer = new IntersectionObserver(callback);

let target = document.querySelector("#howitworks");
observer.observe(target);
