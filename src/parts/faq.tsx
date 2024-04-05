import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const FaqSection: React.FC = () => {
  return (
    <>
      <div className="max-w-5xl mx-9 md:mx-auto xl:mx-auto  bg-white">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is a CV?</AccordionTrigger>
            <AccordionContent className="text-lg">
              A CV, or curriculum vitae, is a document that provides a
              comprehensive overview of a person's professional and academic
              background. It typically includes detailed information about
              education, work experience, skills, achievements, publications (if
              applicable), and other relevant accomplishments.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is a cover letter?</AccordionTrigger>
            <AccordionContent>
              A cover letter is a formal document that accompanies a resume or
              CV when applying for a job, internship, or other professional
              opportunities. It serves as an introduction to the employer and
              allows the applicant to highlight specific qualifications,
              experiences, and interests that make them a strong candidate for
              the position.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Are there any limitations on the number of CVs I can create?
            </AccordionTrigger>
            <AccordionContent>
              There are no limitations on the number of CVs you can create using
              our platform. You can create and customize as many CVs as you need
              for different job applications or purposes.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Is my information secure when using this service??
            </AccordionTrigger>
            <AccordionContent>
              We take data security and privacy seriously. Your information is
              encrypted and stored securely on our servers. We do not share or
              sell your personal data to third parties.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default FaqSection;
