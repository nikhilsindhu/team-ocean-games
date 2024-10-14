import React, { useState } from "react";

import TOGLogo from "../assets/images/tog-logo.png";

const Header = () => {
  const navigationItems = [
    {
      key: "ABOUT_US",
      title: "About Us",
      path: "#",
    },
    {
      key: "TEAM",
      title: "Team",
      path: "#",
    },
    {
      key: "CONTACT_US",
      title: "Contact Us",
      path: "#",
    },
  ];
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="flex h-auto w-full justify-center">
        <nav
          className="flex w-full max-w-screen-xl items-center justify-between p-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Team Ocean Games</span>
              <img
                className="h-20 w-auto"
                src={TOGLogo}
                alt="Team Ocean Games"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-10">
            {navigationItems.map((navigationItem) => {
              const { title, path, key } = navigationItem;
              return (
                <a
                  key={key}
                  href={path}
                  className="p-1 text-2xl text-gray-200 hover:underline"
                >
                  {title}
                </a>
              );
            })}
          </div>
        </nav>
      </div>
      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
      <div className="lg:hidden" role="dialog" aria-modal="true">
        {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
        <div className="fixed inset-0 z-50"></div>
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigationItems.map((navigationItem) => {
                  const { title, path, key } = navigationItem;
                  return (
                    <a
                      key={key}
                      href={path}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {title}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
