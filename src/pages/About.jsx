import Overview from "../components/Overview";
import AboutHeader from "../components/AboutHeader";
import PageUnderConstruction from "../components/PageUnderConstruction";

function About() {
  return (
    <div>
      <AboutHeader title={"About"} />
      <Overview
        header="We want people worldwide to cultivate a daily, life-changing
            connection with Jesus"
        // header="God's fight we win"
        btnText={"Learn More"}
        img="associates.jpg"
      />
      <PageUnderConstruction />
    </div>
  );
}

export default About;
