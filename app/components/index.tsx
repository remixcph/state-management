import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";
import { Link } from "@remix-run/react";

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    type="button"
    className="rounded-md bg-gradient-to-r from-teal-500 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/50 transition hover:scale-110 hover:from-pink-500 hover:to-orange-500 hover:shadow-orange-500/50 dark:from-orange-500 dark:to-pink-500 dark:shadow-orange-500/50 dark:hover:from-blue-500 dark:hover:to-teal-500 dark:hover:shadow-blue-500/50"
    {...props}
  />
);

export const Title = (props: JSX.IntrinsicElements["h1"]) => (
  <h1
    className="text-4xl font-bold uppercase drop-shadow-md transition-colors dark:text-slate-200"
    {...props}
  />
);

export const SubTitle = (props: JSX.IntrinsicElements["h2"]) => (
  <h2
    {...props}
    className={clsx(
      "text-3xl font-bold text-green-600 transition-colors dark:text-orange-400",
      props.className
    )}
  />
);

export const SubSubTitle = (props: JSX.IntrinsicElements["h3"]) => (
  <h2
    {...props}
    className={clsx(
      "text-xl font-bold text-slate-500 transition-colors dark:text-slate-400",
      props.className
    )}
  />
);

type NavigationProps = {
  back: string;
  forward: string;
};

export const Navigation = ({ back, forward }: NavigationProps) => (
  <div className="mt-20 flex gap-8">
    <Link to={back}>
      <ArrowLeftCircleIcon className="h-12 w-12 text-teal-500 transition hover:scale-125 hover:text-teal-600 dark:text-orange-500 dark:hover:text-orange-600" />
    </Link>

    <Link to={forward}>
      <ArrowRightCircleIcon className="h-12 w-12 text-teal-500 transition hover:scale-125 hover:text-teal-600 dark:text-orange-500 dark:hover:text-orange-600" />
    </Link>
  </div>
);

type PageProps = {
  dark: boolean;
} & JSX.IntrinsicElements["div"];
export const Page = ({ dark, ...props }: PageProps) => (
  <div
    className={clsx("h-screen w-screen", {
      dark,
    })}
  >
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-8 bg-slate-100 transition-colors dark:bg-slate-900"
      {...props}
    />
  </div>
);
