import type { CompanyPage } from "@/types/messages";

export const content: CompanyPage = {
  logo: {
    src: "/images/pendraig-logo.png",
    messages: {
      Welsh: {
        alt: "Ffilmiau PenDraig",
      },
      English: {
        alt: "PenDraig Films",
      },
    },
  },
  messages: {
    Welsh: {
      title: "Ffilmiau PenDraig",
      blurb: `
      `,
    },
    English: {
      title: "PenDraig Films",
      blurb: `
        A start-up filming company, the primary directive of PenDraig Films is to create a space in which to learn and improve my craft and understanding of making films, from pre-production to post, all the while making unconventional stories.
        
        I have been fortunate in meeting and befriending many up-and-coming talent in North and West Wales, sourcing various artists from these regions, aiming to create films that these artists can point back to and be proud.
        
        Currently filming Glass Vultures.
        
        Please feel free to get in contact if you have any inquiries about our projects, or yours!
      `,
    },
  },
};
