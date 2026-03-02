import Navbar from "@/components/Navbar";
import OrganizationMeta from "@/components/OrganizationMeta";
import { TypingAnimation } from "@/components/TypingAnimation";
import { TypingSequenceGroup } from "@/components/TypingSequence";

export default function IEEESOUSPSSBC() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Heading */}
          <div className="mb-12 text-center">
            <img
              src="http://ieee.socet.edu.in/wp-content/uploads/2025/12/IEEE-SPS-SOU-SBC-Full-Color.png"
              alt="IEEE SOU SPS Logo"
              className="h-[150px] mx-auto mb-6 object-contain animate-fade-in-up"
            />
            <h1 className="sr-only">IEEE SOU SPS SBC</h1>
            <p className="text-2xl md:text-3xl font-bold mb-2 animate-fade-in-up">IEEE SOU SPS SBC</p>
            <OrganizationMeta ouCode="SBC20233" nomenclature="Silver Oak University, IEEE SPS Student Branch Chapter" />
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-8 animate-fade-in-up animation-delay-300" />
          </div>

          {/* Content Section */}
          <div className="prose dark:prose-invert max-w-none">
            {/* Vision Section */}
            <section className="mb-12 theme-card theme-card-cyan">
              <h2 className="text-2xl font-semibold mb-6">Vision</h2>
              <TypingSequenceGroup>
                <ul className="list-disc pl-5 space-y-2">
                  <li><TypingAnimation sequenceIndex={0} text="Being a one-stop source of signal processing resources." /></li>
                  <li><TypingAnimation sequenceIndex={1} text="Providing a variety of high-quality resources customized to users' interests." /></li>
                  <li><TypingAnimation sequenceIndex={2} text="Adapting to a rapidly changing technical community." /></li>
                </ul>
              </TypingSequenceGroup>
            </section>

            {/* Mission Section */}
            <section className="mb-12 theme-card theme-card-cyan">
              <h2 className="text-2xl font-semibold mb-6">Mission</h2>
              <TypingSequenceGroup>
                <ul className="list-disc pl-5 space-y-2">
                  <li><TypingAnimation sequenceIndex={0} text="Advancing and disseminating state-of-the-art scientific information." /></li>
                  <li><TypingAnimation sequenceIndex={1} text="Providing a venue for people to interact and exchange ideas." /></li>
                  <li><TypingAnimation sequenceIndex={2} text="Enabling collaboration among professionals, students, and academics in signal processing." /></li>
                </ul>
                <p className="mt-4">
                  <TypingAnimation sequenceIndex={3} text="Our mission is to enable technology for the generation, transformation, and interpretation of information in the signal processing domain." />
                </p>
              </TypingSequenceGroup>
            </section>

            {/* About Section */}
            <section className="theme-card theme-card-cyan">
              <h2 className="text-2xl font-semibold mb-6">About IEEE SOU SPS SBC</h2>
              <TypingSequenceGroup>
                <p className="mb-4">
                  <TypingAnimation sequenceIndex={0} text={"The Signal Processing Society, founded in 1948, is the first IEEE society with a focus on advancing and spreading scientific information in signal processing."} />
                </p>

                <p>
                  <TypingAnimation sequenceIndex={1} text={"IEEE SOU SPS SBC was established in 2021. Despite the short time, we have become the largest society in the Gujarat Section with 63 members. We've organized specialized symposia on emerging technologies and worked hard to keep our members up to date with the latest in signal processing."} />
                </p>
              </TypingSequenceGroup>
            </section>
          </div>
        </div>
      </main>

    </div>
  );
}
