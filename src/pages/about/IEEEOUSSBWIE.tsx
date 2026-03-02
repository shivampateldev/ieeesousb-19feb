import Navbar from "@/components/Navbar";
import OrganizationMeta from "@/components/OrganizationMeta";
import { TypingAnimation } from "@/components/TypingAnimation";
import { TypingSequenceGroup } from "@/components/TypingSequence";

export default function IEEEOUSSBWIE() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Heading */}
          <div className="mb-12 text-center">
            <img
              src="http://ieee.socet.edu.in/wp-content/uploads/2025/12/IEEE-SOU-WIE-AG-Logo-Coloured-scaled.png"
              alt="IEEE SOU WIE Logo"
              className="h-[150px] mx-auto mb-6 object-contain animate-fade-in-up"
            />
            <h1 className="sr-only">IEEE SOU WIE AG</h1>
            <p className="text-2xl md:text-3xl font-bold mb-2 animate-fade-in-up">IEEE SOU WIE AG</p>
            <OrganizationMeta ouCode="SBA20233" nomenclature="Silver Oak University, IEEE WIE Affinity Group" />
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-8 animate-fade-in-up animation-delay-300" />
          </div>

          {/* Content Section */}
          <div className="prose dark:prose-invert max-w-none">
            {/* Vision Section */}
            <section className="mb-12 theme-card theme-card-purple">
              <h2 className="text-2xl font-semibold mb-6">Vision</h2>
              <TypingSequenceGroup>
                <ul className="list-disc pl-5 space-y-2">
                  <li><TypingAnimation sequenceIndex={0} text="Equal access to knowledge." /></li>
                  <li><TypingAnimation sequenceIndex={1} text="Encourage women in the potency of engineering." /></li>
                  <li><TypingAnimation sequenceIndex={2} text="Enhance the share of women's voices." /></li>
                </ul>
              </TypingSequenceGroup>
            </section>

            {/* Mission Section */}
            <section className="mb-12 theme-card theme-card-purple">
              <h2 className="text-2xl font-semibold mb-6">Mission</h2>
              <TypingSequenceGroup>
                <ul className="list-disc pl-5 space-y-2">
                  <li><TypingAnimation sequenceIndex={0} text="Betterment of society." /></li>
                  <li><TypingAnimation sequenceIndex={1} text="Empower women in leadership roles." /></li>
                  <li><TypingAnimation sequenceIndex={2} text="Technical enhancement of women." /></li>
                </ul>
                <p className="mt-4">
                  <TypingAnimation sequenceIndex={3} text="Our goal is to facilitate the recruitment and retention of women in technical disciplines globally. We envision a vibrant community of IEEE women and men collectively using their diverse talents to innovate for the benefit of humanity." />
                </p>
              </TypingSequenceGroup>
            </section>

            {/* About Section */}
            <section className="theme-card theme-card-purple">
              <h2 className="text-2xl font-semibold mb-6">About IEEE SOU WIE AG</h2>
              <TypingSequenceGroup>
                <p className="mb-4">
                  <TypingAnimation sequenceIndex={0} text={"IEEE WIE is a global network of IEEE members and volunteers dedicated to promoting women engineers and scientists, and inspiring girls around the world to follow their academic interests in a career in engineering and science. It envisions a vibrant community of IEEE women and men by collectively using their diverse talents to innovate for the benefit of humanity."} />
                </p>

                <p>
                  <TypingAnimation sequenceIndex={1} text={"With the same vision and mission, IEEE SOU WIE AG was established in 2019, and today, it is the largest affinity group in the Gujarat Section with 32 members. Starting from its inception, IEEE SOU WIE AG has carried out multiple campaigns and initiatives emphasizing the betterment of society. Alongside this, the AG has organized various technical and non-technical events & talks, that have helped many students to uplift their technical and interpersonal skills."} />
                </p>
              </TypingSequenceGroup>
            </section>
          </div>
        </div>
      </main>

    </div>
  );
}
