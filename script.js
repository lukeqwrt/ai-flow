const burger = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mainHeader = document.getElementById("mainHeader");

const mobileProductsBtn = document.getElementById('mobileProductsBtn');
const mobileProductsContent = document.getElementById('mobileProductsContent');
const mobileArrow = document.getElementById('mobileArrow');
const desktopArrow = document.getElementById('desktopArrow');
burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("opacity-0");
    mobileMenu.classList.toggle("-translate-y-4");
    mobileMenu.classList.toggle("pointer-events-none");

    mainHeader.classList.remove("h-[512px]");
    mobileProductsContent.classList.remove('h-[160px]');
    mobileProductsContent.classList.add('opacity-0');
    mobileProductsContent.classList.remove('mt-4');
    mobileProductsContent.classList.remove('mb-2');
    mobileArrow.classList.remove('rotate-180');
    // mobileMenu.classList.toggle("delay-300");
    if (mainHeader.classList.contains('h-[504px]')) {
        mainHeader.classList.remove("h-[344px]");
        mainHeader.classList.remove("h-[504px]");
        mobileProductsContent.classList.remove('h-[144px]');
        mobileProductsContent.classList.add('h-0');
        return
    }
    mainHeader.classList.toggle("h-[344px]");
});

// 2. Toggle Mobile Products Dropdown
mobileProductsBtn.addEventListener('click', () => {
    mainHeader.classList.toggle("h-[512px]");
    mobileProductsContent.classList.toggle('h-[160px]');
    mobileProductsContent.classList.toggle('opacity-0');
    mobileProductsContent.classList.toggle('mt-4');
    mobileProductsContent.classList.toggle('mb-2');

    // Rotate the arrow icon
    mobileArrow.classList.toggle('rotate-180');
});

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

burger.addEventListener("click", () => {
    line1.classList.toggle("rotate-45");
    line1.classList.toggle("translate-y-[10px]");

    line2.classList.toggle("opacity-0");

    line3.classList.toggle("-rotate-45");
    line3.classList.toggle("-translate-y-[6px]");
});
    
const wrapper = document.querySelector("#dropdownMenu");
const menu = document.getElementById("menuButton");
const menu_wrapper = document.querySelector(".menu-drop-down");

menu.addEventListener("mouseenter", () => {
    wrapper.classList.remove("opacity-0", "scale-95", "pointer-events-none");
    wrapper.classList.add("opacity-100", "scale-100");
    desktopArrow.classList.add('rotate-180');
});

menu_wrapper.addEventListener("mouseleave", () => {
    wrapper.classList.add("opacity-0", "scale-95", "pointer-events-none");
    wrapper.classList.remove("opacity-100", "scale-100");
    desktopArrow.classList.remove('rotate-180');
});
menu_wrapper.addEventListener("mouseleave", () => {
    wrapper.classList.add("opacity-0", "scale-95", "pointer-events-none");
    wrapper.classList.remove("opacity-100", "scale-100");
    desktopArrow.classList.remove('rotate-180');
});

// remove active open nav on mobile when scrolling up
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop < lastScrollTop) {
        if(!mainHeader.classList.contains('h-[504px]') && !mainHeader.classList.contains('h-[344px]')) {
            
            return
        }
        // This code runs when scrolling UP
        mobileMenu.classList.add("opacity-0");
        mobileMenu.classList.add("-translate-y-4");
        mobileMenu.classList.add("pointer-events-none");
    
        mainHeader.classList.remove("h-[512px]");
        mobileProductsContent.classList.remove('h-[160px]');
        mobileProductsContent.classList.add('opacity-0');
        mobileProductsContent.classList.remove('mt-4');
        mobileProductsContent.classList.remove('mb-2');
        mobileArrow.classList.remove('rotate-180');
        // mobileMenu.classList.toggle("delay-300");
        line1.classList.remove("rotate-45");
        line1.classList.remove("translate-y-[10px]");
    
        line2.classList.remove("opacity-0");
    
        line3.classList.remove("-rotate-45");
        line3.classList.remove("-translate-y-[6px]");
        if (mainHeader.classList.contains('h-[504px]')) {
            mainHeader.classList.remove("h-[344px]");
            mainHeader.classList.remove("h-[504px]");
            mobileProductsContent.classList.remove('h-[144px]');
            mobileProductsContent.classList.add('h-0');
            return
        }
        mainHeader.classList.remove("h-[344px]");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, {passive: true}) 

// floating cta
const cta = document.getElementById("floatingCta");
const trigger = document.getElementById("triggerSection");
const footer = document.getElementById("footer");

let isInTrigger = false;
let isInFooter = false;

function updateCTA() {
if (isInTrigger && !isInFooter) {
    // SHOW
    cta.classList.remove("opacity-0", "translate-y-10", "pointer-events-none");
} else {
    // HIDE
    cta.classList.add("opacity-0", "translate-y-10", "pointer-events-none");
}
}

// 👇 Trigger section observer
const triggerObserver = new IntersectionObserver(
(entries) => {
    entries.forEach((entry) => {
    isInTrigger = entry.isIntersecting || entry.boundingClientRect.top < 0;
    updateCTA();
    });
},
{ threshold: 0.3 }
);

const footerObserver = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
    const rect = entry.boundingClientRect;

    // footer is actually near viewport bottom
    isInFooter = rect.top < window.innerHeight;
    updateCTA();
});
});

triggerObserver.observe(trigger);
footerObserver.observe(footer);

// testimonials
const data = [
{
    bg: '#fcf2cb',
    image: "./img/peter-heymans-zp23PVm-yAY-unsplash.jpg",
    quote: `"We now know agents meet our quality bar before they ever touch a customer. That's the difference."`,
    name: "Marissa Taylor",
    role: "Manager Product Support",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    stat1: "50%",
    stat1Text: "Faster time to quality threshold",
    stat2: "33%",
    stat2Text: "Increase in resolution speed"
},
{
    bg: "#cbeed3",
    image: "./img/sample2.jpg",
    quote: `"Our team became twice as efficient after using this system."`,
    name: "John Carter",
    role: "Operations Lead",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    stat1: "70%",
    stat1Text: "Faster onboarding",
    stat2: "40%",
    stat2Text: "Better customer satisfaction"
},
{
    bg: '#bfe7e6',
    image: "./img/sample3.jpg",
    quote: `"Consistency across agents improved dramatically."`,
    name: "Sarah Lee",
    role: "Customer Success Manager",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    stat1: "60%",
    stat1Text: "Improved QA scores",
    stat2: "25%",
    stat2Text: "Reduced errors"
}
];

let currentIndex = 0;

// DOM elements
const mainImage = document.getElementById("mainImage");
const quote = document.getElementById("quote");
const name = document.getElementById("personName");
const role = document.getElementById("personRole");
const avatar = document.getElementById("personProfilePic");

const stat1 = document.getElementById("stat1");
const stat1Text = document.getElementById("stat1Text");
const stat2 = document.getElementById("stat2");
const stat2Text = document.getElementById("stat2Text");
const testimonial_bg = document.querySelector(".testimonial-bg")
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

// update UI
function updateContent(index) {
  const item = data[index];
  quote.textContent = item.quote;
  name.textContent = item.name;
  role.textContent = item.role;
  avatar.src = item.avatar;
  testimonial_bg.style.background = item.bg
  stat1.textContent = item.stat1;
  stat1Text.textContent = item.stat1Text;
  stat2.textContent = item.stat2;
  stat2Text.textContent = item.stat2Text;
}

// next
nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= data.length) currentIndex = 0;
  updateContent(currentIndex);
});

// prev
prevBtn.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = data.length - 1;
  updateContent(currentIndex);
});

const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  grabCursor: true,
  loop: true, // infinite scroll

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});