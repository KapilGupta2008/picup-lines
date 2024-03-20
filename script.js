const febHolidays = [
    "First of all, I love you❤️",
    "Do you have a name, or can I call you mine?",
    "If you were a vegetable, you'd be a cute-cumber.",
    "Do you believe in love at first sight, or should I walk by again?",
    "Do you have a map? Because I keep getting lost in your eyes.",
    "If you were a fruit, you'd be a fineapple.",
    "I must be a snowflake because I've fallen for you.",
    "Are you made of copper and tellurium? Because you're Cu-Te.",
    "Are you a campfire? Because you're hot and I want s'more.",
    "Do you have a sunburn, or are you always this hot?",
    "Is your name Wi-Fi? Because I'm really feeling a connection.",
    "Excuse me, but I think you dropped something: my jaw.",
    "Are you a camera? Because every time I look at you, I smile.",
    "If you were a cat, you'd purr-fect.",
    "Do you believe in fate? Because I think we were meant to meet.",
    "I must be an egg because I've fallen for you.",
    "Do you have a twin?Because you r twice as nice as anyone I've ever met.",
    "I must be a peg because I've fallen for you.",
    "Is there an airport nearby, or is it just my heart taking off?",
    "Do you like Star Wars? Because Yoda one for me!",
    "If beauty were a crime, you'd be serving a life sentence.",
    "Are you a bank loan? Because you have my interest.",
    "I'm not a photographer, but I can definitely picture us together.",
    "Are you a time traveler? Because I see you in my future.",
    "Is it hot in here, or is it just you?",
    " I hope you know CPR, because you just took my breath away!",
    "Are you a parking ticket?‘Cause you got ‘fine’ written all over you.",
    "Do you have a bed? Because you're so comfortable.",
    "Are you an ice cream? Because you're so refreshing.",
    " Are you a Netflix show? Because I want to binge watch you all night.",

  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
        idx + 1
      }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  