export interface ICategory {
  thumbnail: string;
  name: string;
  isActive?: boolean;
}

interface ICardPerson {
  name: string;
  position: string;
  isActive?: boolean;
  activeLayer?: true;
  activeContact?: true;
}

interface IBanner2 {
  src: string;
  text1: string;
  text2: string;
  textSeparate: string;
}

interface ICardBlog {
  cardBlogTitle: string;
}

interface ICardDealDay {
  isActive?: boolean;
  title: string;
  name: string;
  volume: string;
  price: number;
}

interface ICardFeaturedProduct {
  cardActive?: string;
  behaviourActive?: string;
  isTag?: boolean;
  btnActive?: string;
  title: string;
  name: string;
  volume: string;
  price: string;
}

interface ICardIg {
  isActive?: boolean;
  iconActive?: string;
}

interface IMenuFooter {
  title: string;
  detail1: string;
  detail2: string;
  detail3: string;
  detail4: string;
  detail5: string;
  detail6: string;
}

interface INavBar {
  name: string;
  arrowIcon?: boolean;
}

interface IStoreLocation {
  heading: string;
}

interface IWhyChooseContent {
  backgroundColor: string;
  src: string;
  heading: string;
}

interface IWhySection {
  image: string;
  alt: string;
  text1: string;
  text2: string;
}
