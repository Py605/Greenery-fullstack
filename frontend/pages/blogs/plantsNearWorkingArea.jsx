import React from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';
function plantsNearWorkingArea() {
  return (
    <div>
      <div className="blog-image-div">
        <Image
          src={'/../public/images/plant-near-working-area.jpg'}
          height={500}
          width={500}
          className="blog-parent-image"
          alt="Example Image"
        />
      </div>
      <div className="blog-container">
      <h3 className='mb-4 mt-4'>8 Reasons Why You Must Keep a Plant Near Working Area</h3>
        <p>
        People have an inherent urge to be connected to nature, referred to as "biophilia" by scientists. Unfortunately, the areas where we spend the majority of our days — our workplaces – have lost much of their connection to nature.
        </p>
        <p>
        According to studies, merely adding some greenery in the form of indoor plants can have significant positive effects on people and their workplaces. Including some green buddies about your workplace is a terrific way to boost productivity and give some happiness to your workplace. Office plants, like office snacks, are a low-cost method to brighten your team's day and perhaps increase productivity.
        </p>
        <p>
        Here are a few detailed reasons to convince you to bring plants in your workspace.
        </p>

        <ol>
          <li className="bold">
          Plants help in reducing stress.
          </li>
          <p>
          Workers saw considerable reductions in stress when plants were introduced to their office, according to a 2010 study by the new University of Technology, Sydney. There was a 37% decrease in reported tension and anxiety, a 58 percent decrease in despair or dejection, a 44 percent decrease in anger and hostility, and a 38% decrease in weariness.
          </p>
          <p>
          Color psychology advocates claim that the colour green has a relaxing and calming impact, therefore using it to decorate offices could have a similar effect as bringing plants into the office.
          </p>
          <li className="bold">
          Plants in the office boost productivity.
          </li>
          <p>
          Did you know that offices with no decor are regarded as the "most hazardous" environments for humans? Employees perform better when household plants are brought to their work areas, according to Dr. Chris Knight and his colleagues at Exeter University.
          </p>
          <p>
          In fact, after ten years of research, the researchers discovered that when there are houseplants and décor around, workers are 15% more productive. Reason? Employees that are more engaged with their surroundings produce more and have an easier time staying focused.Place some shared office plants in positions where employees may see them from their desks.
          </p>
          <li className="bold">
          Certain plants can help you be more creative.
          </li>
          <p>
          Creative barriers are no joking matter. Whether you're running out of ideas or have been stuck on the same one for far too long, workplace plants can help. Bright colours and scents are essential for ensuring that your green companion has a favourable impact on your creativity.
          </p>
          <p>
          It's long been known that activating our senses may help us think more creatively, and taking the time to literally smell the roses can help you get out of a rut.
          </p>
          <li className="bold">
          They aid in the reduction of sickness and absences.
          </li>
          <p>
          Plants in the workplace, according to some experts, can help to lower the danger of sick building syndrome. The introduction of plants to one office was connected to a 25% reduction in symptoms of poor health, including weariness, concentration issues, dry skin, and nose and eye discomfort, according to a small research conducted by Norway's Agricultural University in the 1990s.
          </p>
          <p>
          We can suppose that plants have a special effect on our sense of well-being because of our psychobiological identity and mankind's favourable relationship to nature.
          </p>
          <li className="bold">
          Plants are mood lifters
          </li>
          <p>
          With all of the advantages listed above, it isn't a stretch to conclude that plants can improve your mood. Houseplants, on the other hand, have been scientifically shown to improve your mental wellness. People who spend more time outside in nature have a substantially more optimistic attitude on life than people who spend a lot of time indoors, according to studies.
          </p>
        </ol>
        <p>
        These are just a few of the many ways that office plants can enhance your team's general health, productivity, and creativity. You don't have to go all out right away; start with a few easy-to-care-for plants and work your way up. Begin amassing an office plant collection and discover all of the fantastic ways they may improve your day. Here are few you can find to begin with.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default plantsNearWorkingArea;
