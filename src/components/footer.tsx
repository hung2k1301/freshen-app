import { Address } from "./address";
import { BottomBar } from "./bottom-bar";
import { Contact } from "./contact";
import { Logo2 } from "./logo-2";
import { NewsLetter } from "./newsletter";
import { SubsForm } from "./subscribe-form";
import { MenuFooter } from "./menu-footer";

export default function Footer(): JSX.Element {
  return (
    <div className="bg-dark-green pt-10 xl:pt-28">
      <div className="container">
        <div className="grid grid-cols-6 xl:grid-cols-12 gap-7">
          <div className="col-span-6 xl:col-span-6">
            <NewsLetter />
          </div>
          <div className="col-span-6 xl:col-span-6">
            <SubsForm />
          </div>
        </div>

        <div className="grid grid-cols-6 xl:grid-cols-12 gap-y-20 mt-24 xl:mt-36 mb-12 xl:mb-24">
          <div className="col-span-full sm:col-span-3">
            <div className="flex flex-col">
              <div className="-translate-y-8">
                <Logo2 />
              </div>
              <Address />
            </div>
          </div>

          <div className="col-span-full sm:col-span-3">
            <Contact />
          </div>

          <MenuFooter></MenuFooter>
        </div>
      </div>

      <div className="border-t border-bottom-bar border-solid bg-dark-green"></div>

      <div className="container pt-8 pb-10 xl:pb-7">
        <BottomBar />
      </div>
    </div>
  );
}
