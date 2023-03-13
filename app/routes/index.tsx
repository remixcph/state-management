import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-black mix-blend-multiply" />
            </div>

            <div className="relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pb-20 lg:pt-32">
              <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                <span className="block uppercase text-green-500 drop-shadow-md">
                  Where is my state?
                </span>
              </h1>

              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                <Link
                  className="text-2xl font-medium text-white drop-shadow-md hover:text-pink-600"
                  to="/whoami"
                >
                  @adicuco
                </Link>
              </div>

              <a href="https://remix.run">
                <img
                  src="https://lh5.googleusercontent.com/26i4yjdAwAFpOqNpRLPnhBi9GU3NTxUVkVrxR-TIdUbm-BF5szO-XLgqKyug4oyMkQU=w2400"
                  alt="Remix"
                  className="mx-auto mt-4 w-full max-w-xs"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
