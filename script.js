// https://www.youtube.com/watch?v=fr85UI37dUA

(function preLoader() {
  var tl = gsap.timeline();

  tl.to(".pre-loader", {
    display: "flex",
    duration: 0,
  });

  tl.to(".pre-loader .yellow", {
    height: 0,
    delay: 0.3,
    duration: 0.8,
    ease: "expo.out",
  });

  tl.to(
    ".pre-loader video",
    {
      y: "-100%",
      delay: 0.3,
      duration: 0.8,
      ease: "expo.out",
    },
    "ptn"
  );

  tl.to(
    ".pre-loader h1",
    {
      opacity: 0,
      delay: 0.3,
      duration: 0.8,
    },
    "ptn"
  );

  tl.to(
    "nav",
    {
      opacity: 1,
      delay: 0.3,
      duration: 0.5,
      ease: "expo.in",
    },
    "ptn"
  );

  tl.to(".pre-loader", {
    display: "none",
    duration: 0,
  });
})();

(function cursor() {
  let main = document.querySelector("#page1 h1");
  let cursor = document.querySelector("#page1 h1 .cursor-vid");
  main.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      scale: 1,
      duration: 0.4,
      ease: "power4.out",
    });
  });

  main.addEventListener("mousemove", (dets) => {
    let x = dets.clientX - main.getBoundingClientRect().left;
    let y = dets.clientY - main.getBoundingClientRect().top;
    console.log(x, y);
    gsap.to(cursor, {
      x: x,
      y: y,
      duration: 0,
    });
  });

  main.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      scale: 0,
      duration: 0.4,
      ease: "power4.in",
    });
  });
})();

function section2Img() {
  let elems = document.querySelectorAll(".elem");
  let page = document.querySelector("#page2");
  elems.forEach((e, idx) => {
    e.addEventListener("mouseenter", function () {
      let bgimg = `asstes/image 0${idx + 1}.jpg`;
      page.style.backgroundImage = `url('${bgimg}')`;
    });
  });
}

function blockData() {
  let arr = [
    {
      idx: 1,
      h3: "Converse",
      em: "nextStudio",
    },
    {
      idx: 2,
      h3: "FUTUREVVORLD",
      em: "Identity & Website",
    },
    {
      idx: 3,
      h3: "Converse",
      em: "Basketball Identity",
    },
    {
      idx: 4,
      h3: "NIKE NFL",
      em: "2022 CAMPAIGN",
    },
    {
      idx: 5,
      h3: "PUBLIC.COM",
      em: "CAMPAIGN",
    },
    {
      idx: 6,
      h3: "jeen-yuhs",
      em: "FILM IDENTITY",
    },
    {
      idx: 7,
      h3: "NIKE",
      em: "STUDIO 45",
    },
    {
      idx: 8,
      h3: "Between Places",
      em: "Visual Identity",
    },
    {
      idx: 9,
      h3: "NIKE <br />AIR FEAR OF GOD",
      em: "IDENTITY",
    },
    {
      idx: 10,
      h3: "VERSACE TRIGRECA",
      em: "IDENTITY",
    },
    {
      idx: 11,
      h3: "CONVERSE",
      em: "BASKETBALL HO19",
    },
    {
      idx: 12,
      h3: "The North Face Climb Festival",
      em: "Visual Identity",
    },
    {
      idx: 13,
      h3: "ESSENTIALS <br />FEAR OF GOD",
      em: "IDENTITY",
    },
    {
      idx: 14,
      h3: "THE XI",
      em: "BRAND DESIGN",
    },
    {
      idx: 15,
      h3: "JOHN ELLIOTT",
      em: "SCENES FROM <br />NEPAL",
    },
    {
      idx: 16,
      h3: "L.E.D. Studio",
      em: "Website",
    },
    {
      idx: 17,
      h3: "De Cara Al Sol",
      em: "Book Design",
    },
    {
      idx: 18,
      h3: "Calvin Klein",
      em: "Retail Concept Design",
    },
    {
      idx: 19,
      h3: "CDL",
      em: "CHAMPIONSHIP <br />KIT 2021",
    },
    {
      idx: 20,
      h3: "HERON PRESTON",
      em: "WEBSITE",
    },
    {
      idx: 21,
      h3: "Beyonce:",
      em: "The Gift Album",
    },
    {
      idx: 22,
      h3: "FEAR OF GOD",
      em: "POP UP",
    },
    {
      idx: 23,
      h3: "REEBOK",
      em: "SPLIT FROM ZINE",
    },
    {
      idx: 24,
      h3: "CONVERSE",
      em: "BASKETBALL EXPLORATIONS",
    },
    {
      idx: 25,
      h3: "NIKE AIR MAX 21",
      em: "FILM IDENTITY",
    },
    {
      idx: 26,
      h3: "PELOTON",
      em: "TREAD FILM",
    },
    {
      idx: 27,
      h3: "CDL",
      em: "CHAMPIONSHIP <br />KIT 2020",
    },
    {
      idx: 28,
      h3: "DREAMHAUS",
      em: "IDENTITY",
    },
    {
      idx: 29,
      h3: "JOHN ELLIOTT",
      em: "SHOWS",
    },
    {
      idx: 30,
      h3: "KITH",
      em: "SPORT SS18",
    },
    {
      idx: 31,
      h3: "RESHAPE",
      em: "IDENTITY",
    },
  ];
  return arr;
}

(function elemMoving() {
  let h2 = document.querySelectorAll("#page2 h2");
  let backText = document.querySelectorAll("#page2 .moving");
  let elem = document.querySelectorAll("#page2 .elem");
  let moving = document.querySelectorAll("#page2 .elem .moving-out");
  elem.forEach((e, idx) => {
    e.addEventListener("mouseenter", () => {
      h2[idx].style.fontStyle = "italic";
      h2[idx].style.color = "#000";
      moving[idx].style.transform = "translateY(-50%) scaleY(1)";
      backText[idx].style.color = "#000";
    });
    e.addEventListener("mouseleave", () => {
      h2[idx].style.fontStyle = "normal";
      h2[idx].style.color = "#fff";
      moving[idx].style.transform = "translateY(-50%) scaleY(0)";
      backText[idx].style.color = "transparent";
    });
  });
  section2Img();
})();

(function blk() {
  let arr = blockData();
  function lines(kit) {
    let clutter = "";
    for (let i = 1; i <= 3; i++) {
      clutter += `<div class="line-block line${i}"></div>`;
    }
    kit.innerHTML = clutter;
  }
  let page = document.querySelector("#page3");
  page.innerHTML = '<div class="block-container"></div>';
  let blockContainer = document.querySelector(".block-container");
  lines(blockContainer);
  let line = document.querySelectorAll(".line-block");
  function three() {
    let clutter = ["", "", ""];
    let net = 0;
    arr.forEach(function (e) {
      if (net == 0) {
        clutter[0] += `<div class="block-img block-img${e.idx}">
               <img src="asstes/bottom images/image ${e.idx}.jpg" alt="" />
               <div class="back-block-text"><h3>${e.h3}</h3><em>${e.em}</em></div>
             </div>
             <div class="space-block"></div>`;
        net++;
      } else if (net == 1) {
        clutter[1] += `<div class="block-img block-img${e.idx}">
                   <img src="asstes/bottom images/image ${e.idx}.jpg" alt="" />
                   <div class="back-block-text"><h3>${e.h3}</h3><em>${e.em}</em></div>
                 </div>
                 <div class="space-block"></div>`;
        net++;
      } else if (net == 2) {
        clutter[2] += `<div class="block-img block-img${e.idx}">
                   <img src="asstes/bottom images/image ${e.idx}.jpg" alt="" />
                   <div class="back-block-text"><h3>${e.h3}</h3><em>${e.em}</em></div>
                 </div>
                 <div class="space-block"></div>`;
        net = 0;
      }
    });
    for (let i = 0; i < clutter.length || i < line.length; i++) {
      line[i].innerHTML = clutter[i];
    }
  }
  three();
})();

(function loco() {
  let page = document.querySelector("#page3");
  setTimeout(function () {
    page.style.height = page.clientHeight + "px";
  }, 200);

  setTimeout(function () {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("main"),
      smooth: true,
    });
    clicks(scroll);
  }, 200);
})();

function clicks(scroll) {
  document
    .querySelector("footer .back-btn button")
    .addEventListener("click", () => {
      scroll.scrollTo(0);
    });
}

// function scrollpage(num) {
//   const scroll = new LocomotiveScroll({
//     el: document.querySelector("main"),
//     smooth: true,
//   });
//   if (num == 1) {
//     let page = document.getElementById(`page1`);
//     let scrollon = page.scrollHeight;
//     scroll.scrollTo(0,scrollon);
//   } else if (num == 2) {
//     let page = document.getElementById(`page2`);
//     let scrollon = page.scrollHeight;
//     scroll.scrollTo(0,scrollon*2);
//   }
// }
