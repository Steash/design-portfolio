import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { Design } from '../../models/design.model';

@Component({
  selector: 'app-design',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './design.component.html',
  styleUrl: './design.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DesignComponent {
  designs: Design[] = [
    {
      id: 1,
      title: 'Little Dots',
      description: `The album artwork for Little Dots’ “Do you know how we got here”, featuring a vinyl edition and a four-panel digi pack, is a minimalistic design inspired by connect-the-dots puzzles, inviting the viewer to engage with the band's transformative journey. The dots form a path through an open space, encouraging the audience to "connect the dots" and find their own meaning. This interactive simplicity mirrors the band's new direction, where authenticity and vulnerability meet bold exploration, offering an invitation to discover their evolving sound.<br>Collaboratively crafted with Studio Studio.`,
      imageGroup: [
        '/images/01-Little-Dots/LittleDots-01.jpg', 
        '/images/01-Little-Dots/LittleDots-02.jpg',
        '/images/01-Little-Dots/LittleDots-03.jpeg',
        '/images/01-Little-Dots/LittleDots-04.jpeg',
        '/images/01-Little-Dots/LittleDots-05.jpg',
        '/images/01-Little-Dots/LittleDots-06.jpg',
        '/images/01-Little-Dots/LittleDots-07.jpg'
      ]
    },
    {
      id: 2,
      title: 'I AM WHO I AM',
      description: `Poster en handout for the 11th annual group exhibition of i-psy’s Open Atelier programme “I AM WHO I AM”. The exhibition not only reflects the diversity of the artists and their individual histories, it also reflects the individual ways in which the artists have chosen to express their creative therapeutic process. WHO I AM speaks to the imperative to accept one’s self. To claim and reclaim one’s space as a creative being, to demand the right to be who you are.`,
      imageGroup: [
        '/images/02-I-AM-WHO-I-AM/iamwhoiam-01.jpg',
        '/images/02-I-AM-WHO-I-AM/iamwhoiam-02.jpg',
        '/images/02-I-AM-WHO-I-AM/iamwhoiam-03.jpg',
        '/images/02-I-AM-WHO-I-AM/iamwhoiam-04.jpg',
        '/images/02-I-AM-WHO-I-AM/iamwhoiam-05.jpg',
        '/images/02-I-AM-WHO-I-AM/iamwhoiam-06.jpg',
        '/images/02-I-AM-WHO-I-AM/iamwhoiam-07.jpg'
      ]
    },
    {
      id: 3,
      title: 'CCTV in Buikslotermeerplein',
      description: `To increase security and to combat nuisance in public space, the municipality has taken a number of measures including the use of CCTV. There are 18 camera areas in Amsterdam, one of them is Buikslotermeerplein. The cameras give police and enforcement an ‘extra eyes’ in the city. Many residents have reported to feel safer with CCTV, even if it means they must give up their privacy. <br><br> There is a total of 68 CCTV in Buikslotermeerplein, I captured them all and provided each with the exact location.`,
      imageGroup: [
        '/images/03-CCTV-in-Buikslotermeerplein/cctvbuikslotermeerplein01.jpg',
        '/images/03-CCTV-in-Buikslotermeerplein/cctvbuikslotermeerplein02.jpg',
        '/images/03-CCTV-in-Buikslotermeerplein/cctvbuikslotermeerplein03.jpg',
        '/images/03-CCTV-in-Buikslotermeerplein/cctvbuikslotermeerplein04.jpg',
        '/images/03-CCTV-in-Buikslotermeerplein/cctvbuikslotermeerplein05.jpg',
        '/images/03-CCTV-in-Buikslotermeerplein/cctvbuikslotermeerplein06.jpg',
        '/images/03-CCTV-in-Buikslotermeerplein/cctvbuikslotermeerplein07.jpg',
        '/images/03-CCTV-in-Buikslotermeerplein/cctvbuikslotermeerplein08.jpg'
      ]
    },
    {
      id: 4,
      title: 'Another Graphic',
      description: `Another Graphic is a digital archive focusing on typographic treatment within graphic design practices. At the heart of the identity is the concept of archiving, visually represented through a grid-based system that underpins every design element. Inspired by the clarity and precision of mathematical and scientific graphics, the brand identity reflects Another Graphic’s mission to be a precise and reliable resource for typographic exploration. While also positioning the archive as a space where design meets analysis, creativity meets calculation and where every element is meticulously archived for future reference.`,
      imageGroup: [
        '/images/04-Another-Graphic/ag01.jpg',
        '/images/04-Another-Graphic/ag02.jpg',
        '/images/04-Another-Graphic/ag03.jpg',
        '/images/04-Another-Graphic/ag04.jpg',
        '/images/04-Another-Graphic/ag05.jpg',
        '/images/04-Another-Graphic/ag06.jpg'
      ]
    },
    {
      id: 5,
      title: 'Studio Studio',
      description: `Branding essentials for Studio Studio which include a door poster, tote bag, and business card. Together, these pieces create a unified and memorable brand experience, reflecting Studio Studio’s expertise in clear and impactful visual communication. Each item is designed to resonate with clients and visitors, ensuring that the studio’s identity is consistently conveyed across all touchpoints.`,
      imageGroup: [
        '/images/05-Studio-Studio/studiostudio01.jpg',
        '/images/05-Studio-Studio/studiostudio02.jpg',
        '/images/05-Studio-Studio/studiostudio03.jpg',
        '/images/05-Studio-Studio/studiostudio04.jpg'
      ]
    },
    {
      id: 6,
      title: 'Depend On Me',
      description: `Poster and handout for Amsterdam-based research group “depend on me”. The group brings together artists from different contexts, levels and generations who are related through similar interests, questions and collaborative projects. The research program explores the boundaries between professional and amateur artists and show that a certain degree of dependence within an artistic process can also be powerful and serve as a source of inspiration.`,
      imageGroup: [
        '/images/06-Depend-On-Me/dependonme01.jpg',
        '/images/06-Depend-On-Me/dependonme02.jpg',
        '/images/06-Depend-On-Me/dependonme03.jpg',
        '/images/06-Depend-On-Me/dependonme04.jpg',
        '/images/06-Depend-On-Me/dependonme05.jpg',
        '/images/06-Depend-On-Me/dependonme06.jpg'
      ]
    },
    {
      id: 7,
      title: 'Mutant Garden',
      description: `Booklet for Harm van den Dorpel's second exhibition “Mutant Garden” at Upstream Gallery in Amsterdam.`,
      imageGroup: [
        '/images/07-Mutant-Garden/mutant-garden01.jpg',
        '/images/07-Mutant-Garden/mutant-garden02.jpg',
        '/images/07-Mutant-Garden/mutant-garden03.jpg',
        '/images/07-Mutant-Garden/mutant-garden04.jpg',
        '/images/07-Mutant-Garden/mutant-garden05.jpg',
        '/images/07-Mutant-Garden/mutant-garden06.jpg',
        '/images/07-Mutant-Garden/mutant-garden07.jpg',
        '/images/07-Mutant-Garden/mutant-garden08.jpg'
      ]
    },
    {
      id: 8,
      title: 'Proud Aliens',
      description: `The project group of Framer Framed’s Open Atelier have created an utopian future where difference and diversity are recognised as beautiful and celebrated. The exhibition’s identity reflects the diverse cultural backgrounds of the participants.`,
      imageGroup: [
        '/images/08-Proud-Aliens/ProudAliens-01.jpg',
        '/images/08-Proud-Aliens/ProudAliens-02.jpg'
      ]
    },
    {
      id: 9,
      title: 'HKU Fashion & Design Graduation Show',
      description: `The identity for the Fashion Department’s graduation show at the Art Academy of Utrecht is a striking embodiment of innovation and creativity. It seamlessly blends all the students' artworks into a fluid, cohesive design, much like watercolors merging together—each piece maintaining its individuality while contributing to a vibrant whole. This concept reflects the students' bold approach to their craft, where they push boundaries, embrace experimentation, and redefine the norms of fashion design.<br><br>Collaboratively crafted with Sanne Bouman.`,
      imageGroup: [
        '/images/09-HKU-Fashion-And-Design-Graduation-Show/hku-gradshow-01.jpg',
        '/images/09-HKU-Fashion-And-Design-Graduation-Show/hku-gradshow-02.jpg',
        '/images/09-HKU-Fashion-And-Design-Graduation-Show/hku-gradshow-03.jpg',
        '/images/09-HKU-Fashion-And-Design-Graduation-Show/hku-gradshow-04.jpg',
        '/images/09-HKU-Fashion-And-Design-Graduation-Show/hku-gradshow-05.gif',
        '/images/09-HKU-Fashion-And-Design-Graduation-Show/hku-gradshow-06.jpg',
        '/images/09-HKU-Fashion-And-Design-Graduation-Show/hku-gradshow-07.jpg',
        '/images/09-HKU-Fashion-And-Design-Graduation-Show/hku-gradshow-08.jpg',
        '/images/09-HKU-Fashion-And-Design-Graduation-Show/hku-gradshow-09.jpg',
        '/images/09-HKU-Fashion-And-Design-Graduation-Show/hku-gradshow-10.jpg',
        '/images/09-HKU-Fashion-And-Design-Graduation-Show/hku-gradshow-11.jpg',
        '/images/09-HKU-Fashion-And-Design-Graduation-Show/hku-gradshow-12.jpg'
      ]
    },
    {
      id: 10,
      title: 'Doe Een Wens',
      description: `The poster for the group exhibition “Doe Een Wens” highlights a diverse array of artists, each interpreting their dreams through various artistic mediums. The design visually conveys the transformative journey from imagination to art, inviting viewers to explore the varied and vibrant dreams captured in the show.`,
      imageGroup: [
        '/images/10-Doe-Een-Wens/Doe-Een-Wens01.jpg',
        '/images/10-Doe-Een-Wens/Doe-Een-Wens02.jpg',
        '/images/10-Doe-Een-Wens/Doe-Een-Wens03.jpg',
        '/images/10-Doe-Een-Wens/Doe-Een-Wens04.jpg'
      ]
    }
  ]
}
