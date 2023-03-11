import {
  IBanner2,
  ICardBlog,
  ICardDealDay,
  ICardFeaturedProduct,
  ICardIg,
  ICardPerson,
  ICategory,
  IMenuFooter,
  INavBar,
  IStoreLocation,
  IWhyChooseContent,
  IWhySection,
} from "./../types.d";
import axios from "axios";

const BASE_URL = "http://localhost:3004";

export async function getCategories(): Promise<ICategory[]> {
  const res = await axios.get(`${BASE_URL}/categories`);
  return res.data;
}

export async function getCardPerson(): Promise<ICardPerson[]> {
  const res = await axios.get(`${BASE_URL}/cardPerson`);
  return res.data;
}

export async function getBanner2(): Promise<IBanner2[]> {
  const res = await axios.get(`${BASE_URL}/banner2`);
  return res.data;
}

export async function getCardBlog(): Promise<ICardBlog[]> {
  const res = await axios.get(`${BASE_URL}/cardBlog`);
  return res.data;
}

export async function getCardDealDay(): Promise<ICardDealDay[]> {
  const res = await axios.get(`${BASE_URL}/cardDealDay`);
  return res.data;
}

export async function getCardFeaturedProduct(): Promise<ICardFeaturedProduct[]> {
  const res = await axios.get(`${BASE_URL}/cardFeaturedProduct`);
  return res.data;
}

export async function getCardInstagram(): Promise<ICardIg[]> {
  const res = await axios.get(`${BASE_URL}/cardInstagram`);
  return res.data;
}

export async function getMenuFooter(): Promise<IMenuFooter[]> {
  const res = await axios.get(`${BASE_URL}/menuFooter`);
  return res.data;
}

export async function getNavbar(): Promise<INavBar[]> {
  const res = await axios.get(`${BASE_URL}/navBar`);
  return res.data;
}

export async function getStoreLocation(): Promise<IStoreLocation[]> {
  const res = await axios.get(`${BASE_URL}/storeLocation`);
  return res.data;
}

export async function getWhyChooseContent1(): Promise<IWhyChooseContent[]> {
  const res = await axios.get(`${BASE_URL}/whyChooseContent1`);
  return res.data;
}

export async function getWhyChooseContent2(): Promise<IWhyChooseContent[]> {
  const res = await axios.get(`${BASE_URL}/whyChooseContent2`);
  return res.data;
}

export async function getWhySection(): Promise<IWhySection[]> {
  const res = await axios.get(`${BASE_URL}/whySection`);
  return res.data;
}
