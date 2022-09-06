// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const callback = (entries) => {
  const ent = entries[0];
  console.log(ent);

  if (ent.isIntersecting === false) {
    document.body.classList.add("sticky");
  }

  if (ent.isIntersecting === true) {
    document.body.classList.remove("sticky");
  }
};

const option = { root: null, threshold: 0, rootMargin: "-80px" };

const obs = new IntersectionObserver(callback, option);

obs.observe(sectionHeroEl);
