const navBar = document.getElementById("nav-bar");
const data = ["home", "about", "projects", "contact"];

navBar.innerHTML = data
  .map((name) => {
    return `<li><a href="#${name}" class="relative before:absolute before:w-full before:h-0.5 before:bg-white before:-bottom-1 before:scale-x-0 before:transition-all hover:before:scale-x-100 before:rounded-full">${name}</a></li>`;
  })
  .join("");

const skillContainer = document.getElementById("skill-container");
const skills = [
  "java",
  "javascript",
  "tailwindcss",
  "React.JS",
  "CSS3",
  "HTML5",
  "TypeScript",
];

skillContainer.innerHTML = skills
  .map(
    (skill) =>
      `<li class="hover:scale-95 transition-all duration-300 hover:shadow-md hover:shadow-purple-500/30 shadow-lg shadow-purple-500/30" >${skill}</li>`
  )
  .join("");

const socialIcons = document.getElementById("social-icons");
const classNames = [
  {
    name: "fa-brands fa-facebook",
    link: "https://web.facebook.com/achintha.prabash.336",
  },
  {
    name: "fa-brands fa-instagram",
    link: "https://www.instagram.com/achintha0110/",
  },
  { name: "fa-brands fa-x-twitter", link: "https://x.com/PrabashAch10994" },
  {
    name: "fa-brands fa-github",
    link: "https://github.com/AchinthaPrabash3",
  },
  { name: "fa-solid fa-code", link: "https://icodethis.com/AchinthaP" },
];

socialIcons.innerHTML = classNames
  .map(
    ({ name, link }) =>
      `<a href="${link}" target="_blank"><i class=" ${name} fa-2xl hover:scale-105 transition-all duration-300"></i></a>`
  )
  .join("");

const projectsContainer = document.getElementById("projects-container");
const projectdata = [
  {
    name: "dribbble design to code",
    tech: ["react", "tailwindcss", "html"],
    img: "https://i.pinimg.com/564x/5f/26/bd/5f26bdf0aa1e680c7fd0d88e14e6dea7.jpg",
    des: "this is a design form dribbble that i coded using react js and tailwindcss for animation i have used framer-motion",
  },
  {
    name: "dribbble design to code",
    tech: ["react", "tailwindcss", "html"],
    img: "https://i.pinimg.com/564x/c9/45/12/c94512d5ec3b81aaa47a57470a555887.jpg",
    des: "this is a design form dribbble that i coded using react js and tailwindcss for animation i have used framer-motion",
  },
  {
    name: "univercity project (resturent web application)",
    tech: ["react", "tailwindcss", "html", "java", "springBoot"],
    img: "https://i.pinimg.com/736x/1e/96/ea/1e96ea9e268b85ff2916c91062556978.jpg",
    des: "full-stack web application done for a univercity project using springboot for the back-end and react for the front-end  ",
  },
  {
    name: "i code this projects",
    tech: ["tailwindcss", "html"],
    img: "https://i.pinimg.com/564x/f2/00/29/f20029d07006f9be10d4ee8539027e62.jpg",
    des: "there are many projects like this on i code this you can find me @AchinthaP or click the link at the bottom",
  },
];

projectsContainer.innerHTML = projectdata
  .map(({ name, tech, img, des }) => {
    const liElsm = tech
      .map(
        (data) =>
          `<li class="capitalize font-thin backdrop-blur rounded-full px-4 py-2 bg-purple-500/20 cursor-pointer" >${data}</li>`
      )
      .join("");

    return `
    <div class="relative hover:scale-[0.98] transition-all duration-300 cursor-pointer">
  <div class=" absolute size-full bg-gradient-to-b from-transparent to-slate-800 z-10 flex flex-col items-start justify-end p-2 ">
    <h1 class="font-bold text-xl mb-1 first-letter:uppercase pl-1" >${name}</h1>
    <p class="font-thin text-xs w-[70%] pl-1" >${des}</p>
    <ul class="flex gap-2 items-center mt-2 flex-wrap">
    ${liElsm}
    </ul>
  </div>
  <img src="${img}" class="object-top relative z-0" alt="${des}" />
  </div>`;
  })
  .join("");
