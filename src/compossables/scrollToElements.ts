import { links } from "../stores/useLinks";

const header = document.querySelector("header") as HTMLElement;

const lists = links.map(
  (link) => document.querySelector(`.${link.tab}`) as HTMLElement
);

let index = 0;

const scrollToElement = (id: string) => {
  window.scrollTo({
    top:
      (document.querySelector(`#${id}`) as HTMLElement)?.offsetTop -
      header.clientHeight,
    behavior: "smooth",
  });
};

const watch = () => {
  links.forEach((el, idx) => {
    if (
      document.documentElement.scrollTop + header.clientHeight >=
      (document.querySelector(`#${el.tab}`) as HTMLElement)?.offsetTop
    ) {
      index = idx;
    }
  });

  if (
    document.documentElement.offsetHeight -
      document.documentElement.scrollTop <=
    document.documentElement.clientHeight
  ) {
    index = 4;
  }

  lists.forEach((li) => {
    if (li instanceof HTMLElement) {
      li.classList.remove("active");

      if (li.dataset.tab === links[index].tab) {
        li.classList.add("active");
      }
    }
  });
};

export { scrollToElement, watch };
