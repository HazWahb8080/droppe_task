export const images: ImagesDb = {
  logo: {
    link: "../../images/droppe-logo.png",
    alt: "droppe-logo",
  },
  shopapp: {
    header: {
      left: {
        link: "../../images/img1.png",
        alt: "coworkers in food factory",
      },
      right: {
        link: "../../images/img2.png",
        alt: "factory worker with gray gloves holding panel ",
      },
    },
  },
};

interface ImagesDb {
  logo: {
    link: string;
    alt: string;
  };
  shopapp: {
    header: {
      left: {
        link: string;
        alt: string;
      };
      right: {
        link: string;
        alt: string;
      };
    };
  };
}
