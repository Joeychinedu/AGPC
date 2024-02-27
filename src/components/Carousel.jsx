import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CarouselItem from "./CarouselItem";

const items = [
  {
    name: "joy mercy",
    text: `“When I faced financial hardship and didn't know how I'd make ends meet,
     my church community rallied around me with love and generosity. Through their kindness, 
     I experienced firsthand the provision and faithfulness of God.”`,
    img: "bishop-3.jpg",
  },
  {
    name: "Onyeka fred",
    text: `“After years of struggling with addiction, I found hope and healing through the support and prayers of my church family. Today,
     I'm living a life of sobriety and purpose, all thanks to God's grace.”`,
    img: "bishop-3.jpg",
    link: "sermon",
    linkText: "somethimg random",
  },
  {
    name: "Ihemelandu Chinedu",
    text: `“After a devastating loss, I felt overwhelmed by grief and despair. But through the prayers and encouragement of my church family,
     I found comfort and strength to navigate the darkest days of my life.
     God's presence never left me, and I'm now walking in renewed hope and peace.”`,
    img: "bishop-3.jpg",
    link: "sermon",
    linkText: "somethimg random",
  },
  {
    name: "John Doe",
    text: `“As a skeptic searching for meaning in life, I stumbled into a church service out of curiosity.
     Little did I know, God had orchestrated that moment to change the course of my life forever. Through the teachings of Jesus and the love of His followers,
     I discovered a profound sense of purpose and belonging that I never thought possible.”`,
    img: "bishop-3.jpg",
    link: "sermon",
    linkText: "somethimg random",
  },
  {
    name: "Nnadika Onyinye",
    text: `“Living with chronic illness, I often felt isolated and misunderstood. But through the unwavering support of my church community,
     I've learned that my struggles do not define me. God's love sustains me every day,
     and I'm grateful for the encouragement and prayers that carry me through each challenge.”`,
    img: "bishop-3.jpg",
    link: "sermon",
    linkText: "somethimg random",
  },
];

function Carousel() {
  return (
    <div>
      <OwlCarousel
        className="owl-theme"
        center
        items={2}
        // loop
        margin={15}
        nav
        navText={[
          `<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" stroke-width="1.5">
          <path d="M10.67 2.088L2.088 8 10.67 13.912l-.487.612L1 8l9.182-6.524.488.612z"/>
        </svg>        
        `,
          `<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" stroke-width="1">
          <path d="M2.667 1.325l10 7.845-10 7.774.435.55 11.132-8.775-11.145-8.775-.422.526z"/>
        </svg>
        `,
        ]}
        // responsive={{
        //   600: {
        //     items: 4,
        //   },
        // }}
      >
        {items.map((item) => (
          <CarouselItem
            name={item.name}
            img={item.img}
            text={item.text}
            linkText={item.linkText}
            link={item.link}
            key={item.name}
          />
        ))}
      </OwlCarousel>
      ;
    </div>
  );
}

export default Carousel;
