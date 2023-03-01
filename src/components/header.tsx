import { TopBar } from "./top-bar";
import { Logo } from "./logo";
import { SearchBar } from "./search-bar";
import { AccountInfo } from "./account-info";
import { CategoriesButton } from "./categories-button";
import { NavBar } from "./nav-bar";
import { Hotline } from "./hotline";

export default function Header(): JSX.Element {
  return (
    <>
      <div className="bg-dark-green hidden xl:block">
        <div className="container mx-auto">
          <TopBar></TopBar>
        </div>
      </div>

      <div className="container flex items-center justify-between px-5 py-3 xl:py-8">
        <img
          src="/images/nav-icon-2.svg"
          alt="nav-icon"
          className="xl:hidden"
        />

        <Logo></Logo>

        <div className="ml-auto min-w-search-bar hidden xl:block">
          <SearchBar></SearchBar>
        </div>

        <div className="ml-8">
          <AccountInfo></AccountInfo>
        </div>
      </div>

      <div className="border-t border-grey border-solid hidden xl:block"></div>

      <div className="container items-center h-16 hidden xl:flex">
        <div className="self-end">
          <CategoriesButton></CategoriesButton>
        </div>
        <div className="self-start ml-20">
          <NavBar></NavBar>
        </div>
        <div className="ml-auto">
          <Hotline></Hotline>
        </div>
      </div>
    </>
  );
}
