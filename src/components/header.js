import { TopBar } from "./top-bar";
import { Logo } from "./logo";
import { SearchBar } from "./search-bar";
import { AccountInfo } from "./account-info";
import { CategoriesButton } from "./categories-button";
import { NavBar } from "./nav-bar";
import { Hotline } from "./hotline";

export default function Header() {
  return (
    <>
      <div class="bg-dark-green hidden xl:block">
        <div class="container mx-auto">
          <TopBar></TopBar>
        </div>
      </div>

      <div class="container flex items-center justify-between px-5 py-3 xl:py-8">
        <img src="/images/nav-icon-2.svg" alt="nav-icon" class="xl:hidden" />

        <Logo></Logo>

        <div class="ml-auto min-w-search-bar hidden xl:block">
          <SearchBar></SearchBar>
        </div>

        <div class="ml-8">
          <AccountInfo></AccountInfo>
        </div>
      </div>

      <div class="border-t border-grey border-solid hidden xl:block"></div>

      <div class="container items-center h-16 hidden xl:flex">
        <div class="self-end">
          <CategoriesButton></CategoriesButton>
        </div>
        <div class="self-start ml-20">
          <NavBar></NavBar>
        </div>
        <div class="ml-auto">
          <Hotline></Hotline>
        </div>
      </div>
    </>
  );
}
