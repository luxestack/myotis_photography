import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";
import aboutPortrait from "@/assets/about-portrait.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 px-6 md:px-12 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black tracking-wide uppercase text-center font-display text-foreground mb-16">
            About Jeremiah
          </h1>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 mb-12">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shrink-0 border-2 border-border">
              <img
                src={aboutPortrait}
                alt="Jeremiah, concert photographer"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="font-display italic text-foreground/90 text-lg md:text-xl leading-relaxed">
              <p>
              I’m Jeremiah, a concert photographer with a relentless passion for capturing the raw energy and soul of live music. I don’t just take photos; I chase moments- the fleeting, electric seconds that define a show’s magic.
              <br></br><br></br>
               Music isn't just a sound: it's energy, movement, emotion, and legacy unfolding in real time. 
              I’m not just documenting concerts; I’m preserving the heartbeat of music culture, one frame at a time. 
              </p>
            </div>
          </div>

          <div className="font-display text-foreground/90 text-lg md:text-xl leading-relaxed space-y-6">
            <p>
           I didn't step into concert photography chasing a paycheck. I stepped into it because I noticed something missing. While on tour, I realized many bands didn’t have anyone capturing their moments; no photos, no visuals, no documentation of the blood, sweat, and magic happening on stage. Those memories deserved more.
            <br>
            </br><br></br>
            After shooting a few shows, I knew I was hooked.
            <br></br><br></br>

            Every set is a challenge. Every stage is a new mountain to climb. Lighting shifts. Crowds move. Energy explodes. And in the middle of that chaos, I’m searching for the frame that tells the story, the shot that feels like the music sounds.
            </p>
            <p>
             I don’t create just to get paid. I create to grow. To push my limits. To see how far I can elevate the art each time the lights go down.
             <br></br><br></br>
             <p>
            Concert photography isn’t about snapping pictures. It’s about representation. It’s about making sure artists-  especially those overlooked, are seen, documented, and remembered.</p>
              <br></br><br></br>
            And every show?
            It’s another opportunity to get better than I was last night. 
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default About;
