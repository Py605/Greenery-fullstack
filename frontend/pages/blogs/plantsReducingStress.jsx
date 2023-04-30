import React from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';
function plantsReducingStress() {
  return (
    <div>
      <div className="blog-image-div">
        <Image
          src={'/../public/images/plants-reducing-stress.jpg'}
          height={500}
          width={500}
          className="blog-parent-image"
          alt="Example Image"
        />
      </div>
      <div className="blog-container">
        <h3 className="mb-4 mt-4">
          Can Indoor Plants Help Reduce Stress Levels?
        </h3>
        <p>
          Have you been experiencing anxiety or stress recently? This is due to
          the fact that you have lost contact with your true self as well as
          mother nature. Modern people's living space has shifted from outside
          to indoors, with more than 85 percent of a person's everyday life
          spent indoors.
        </p>
        <p>
          Due to a variety of factors, including a lack of connection to the
          outdoors, Taking care of your mental health is a delicate balancing
          act: It's easy for our busy lifestyles to start taking a toll on our
          brains, what with friendships, relationships, job, and family.
        </p>
        <p>
          But, according to health experts, there is another, very simple
          approach to relax our minds: houseplants. Bringing plants into your
          home might help you manage stress and reconnect with nature.
        </p>
        <p>
          So, how do indoor plants assist in the reduction of stress and
          anxiety? Let's talk about how we're going to do it.
        </p>
        <ol>
          <li className="bold">
            According to a study, indoor plants aid in stress reduction.
          </li>
          <p>
            Plants at your house or office can help you feel more relaxed,
            soothed, and natural, according to a studyTrusted Source published
            in the Journal of Physiological Anthropology. Participants' stress
            responses were observed to be reduced when they were given an indoor
            gardening job.
          </p>
          <p>
            Working with plants reduced both physiological and psychological
            stress, according to the researchers. Working with plants elicited a
            better response.
          </p>
          <li className="bold">
            Plants might help you focus and be more creative.
          </li>
          <p>
            Looking at nature or plants – even visuals of plants that are
            interesting but not stressful – has been shown to move the brain
            into a distinct mode of processing that is more suited to
            relaxation, soft focus, and creativity, according to studies.
          </p>
          <p>
            Further research into the huge influence of environmental design in
            the workplace by the human species report suggests that working in
            natural settings results in a 15% improvement in subjective
            wellbeing and a 15% rise in creativity.
          </p>
          <li className="bold">
            Green color and caring for plants help you practice mindfulness
          </li>
          <p>
            After blue, green is the most common colour on the globe. Green
            balances our energies and may be used to develop our sensitivity and
            compassion for others. Caring for our plants is also a form of
            mindfulness that connects us to nature. Being in close proximity to
            nature has numerous health benefits.
          </p>
          <p>
            Meditation, as well as a holistic approach to life guided by a
            balanced diet, regular exercise, and quality sleep— as well as
            taking time to appreciate the beauty of plants and nature— can help
            you feel happier and healthier. Taking care of your garden can
            provide similar benefits as meditation.
          </p>
        </ol>
        <p>
          This plant aids in the prevention of airborne infections and is
          especially useful when the weather conditions deteriorate during the
          holiday season. Due to its rarity, you may have difficulty finding
          this plant in your local market. However, you can get this plant
          online from Nurserylive and have it delivered to your home at a
          discounted price.
          <p>
            So when are you bringing these plants to your indoor garden to
            battle your anxiety ?
          </p>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default plantsReducingStress;
