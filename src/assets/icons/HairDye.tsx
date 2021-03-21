import React from "react";
import { IPropsIcon } from "./type";

function HairDye({ size, color, ...rest }: IPropsIcon): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "32"}
      height={size || "32"}
      viewBox="0 0 512.003 512.003"
      {...rest}
    >
      <path
        fill={color || "#fff"}
        d="M90.889 296.923a7.5 7.5 0 01-7.477-8.189c3.597-38.953 57.412-58.241 67.907-60.603 49.069-17.934 67.642-31.597 53.678-93.744a7.5 7.5 0 015.673-8.962 7.497 7.497 0 018.962 5.673c7.882 35.078 6.079 58.414-5.845 75.665-11.204 16.211-30.436 25.657-57.834 35.646a7.465 7.465 0 01-1.229.333c-9.336 1.694-53.797 19.439-56.376 47.371a7.499 7.499 0 01-7.459 6.81zM216.032 444.547c-10.516 0-21.03-1.913-29.224-5.739a7.5 7.5 0 01-3.623-9.969 7.498 7.498 0 019.969-3.623c12.401 5.791 33.354 5.791 45.754 0a7.502 7.502 0 016.348 13.592c-8.194 3.826-18.71 5.739-29.224 5.739zM153.903 332.506c-8.487 0-16.975-.902-23.588-2.708a7.501 7.501 0 013.951-14.471c10.645 2.906 28.629 2.906 39.273 0a7.501 7.501 0 013.951 14.471c-6.613 1.806-15.1 2.708-23.587 2.708zM279.136 334.494c-8.491 0-16.985-.902-23.608-2.706a7.5 7.5 0 013.941-14.473c10.669 2.906 28.67 2.905 39.308.001a7.501 7.501 0 013.951 14.471c-6.61 1.804-15.1 2.707-23.592 2.707z"
      />
      <path
        fill={color || "#fff"}
        d="M492.298.892a7.5 7.5 0 00-10.154 3.064L420.047 119.73l-33.75-18.099c-4.835-2.58-10.299-2.83-15.124-1.173-38.872-42.93-93.666-67.433-151.309-67.433-53.476 0-104.133 20.726-142.641 58.359a7.5 7.5 0 0010.484 10.728c35.688-34.879 82.623-54.088 132.156-54.088 53.374 0 104.124 22.695 140.15 62.457L352 125.436c-3.455 6.475-2.761 14.063 1.126 19.719l-35.885 44.234c-1.393 1.71-5.629 6.915-4.354 13.303.533 2.67 2.243 6.432 7.377 9.194l88.688 47.544v42.47c0 43.503-2.194 78.019-12.905 105.063-11.461 28.941-32.275 47.225-65.504 57.539-8.013 2.489-11.571 1.789-12.412.984-1.04-.997-2.229-4.643 1.093-17.785 9.942-11.88 18.185-24.255 23.853-36.079a7.499 7.499 0 00-3.521-10.005 7.499 7.499 0 00-10.005 3.521c-5.468 11.407-13.195 22.851-22.252 33.6-.448.41-.848.876-1.188 1.392C278.989 471.74 240.59 497 214.947 497c-.716 0-1.422-.02-2.117-.059a6.775 6.775 0 00-.855 0c-18.6 1.06-47.099-12.85-72.232-34.139-2.865-1.928-13.664-11.28-17.835-17.04-10.452-17.475-10.106-34.828-8.271-60.657 3.976-56.245 47.513-79.66 89.617-102.304 22.597-12.153 44.295-23.828 60.163-40.012 20.034 34.254 55.101 49.101 85.34 49.198l.001 7.176c.008 19.88.01 25.879-.192 29.525a7.187 7.187 0 00-.012.415c0 12.58-2.11 26.964-6.104 41.598a7.5 7.5 0 005.261 9.21 7.482 7.482 0 001.979.267 7.502 7.502 0 007.23-5.527c4.317-15.824 6.61-31.496 6.633-45.341.214-4.049.212-9.778.204-30.151l-.003-14.981a7.5 7.5 0 00-8.155-7.471c-28.297 2.481-64.003-10.988-81.888-46.349a81.931 81.931 0 005.671-9.544c.078-.156.142-.314.209-.472.015-.036.036-.067.051-.103l.033-.087.032-.085c11.066-27.678 5.85-64.781-13.976-99.301a7.501 7.501 0 00-13.008 7.47c17.522 30.508 22.411 62.662 13.116 86.104-12.501 24.49-40.282 39.437-69.692 55.253-43.554 23.423-92.918 49.972-97.476 114.455-2.001 28.153-2.323 48.533 10.586 69.795.094.171 6.853 8.676 10.14 11.406-8.677-3.06-20.383-8.867-32.779-18.598-20.866-16.379-55.871-54.41-55.871-125.096v-85.04c0-38.899 11.968-76.332 34.609-108.251a7.5 7.5 0 10-12.234-8.678c-24.451 34.469-37.375 74.902-37.375 116.929v85.04c0 45.391 13.699 85.425 39.616 115.775 21.539 25.223 47.653 39.186 64.911 43.842 4.503 1.215 8.416 1.822 11.729 1.822 2.867 0 5.283-.456 7.244-1.364 22.449 17.136 48.53 30.374 70.566 30.373.869 0 1.731-.021 2.588-.062 19.969.961 46.382-10.319 72.617-31.003a230.883 230.883 0 0017.446-15.262c.665 3.995 2.239 7.721 5.288 10.642 3.422 3.279 7.912 4.914 13.576 4.914 3.967 0 8.51-.803 13.662-2.403 82.266-25.535 88.96-95.235 88.96-176.928v-40.127c5.659-2.615 7.564-8.746 8.189-10.777l16.978-54.351c.1.001.2.009.3.009 1.84 0 3.692-.271 5.507-.816 4.872-1.466 8.876-4.736 11.271-9.205l8.605-16.024c4.892-9.217 1.409-20.737-7.765-25.681l-.014-.007-33.759-18.104 62.096-115.772a7.493 7.493 0 00-3.06-10.154zm-74.483 245.66c-.059.188-.114.36-.169.52l-18.412-9.87 6.845-23.706a7.502 7.502 0 00-5.125-9.287 7.503 7.503 0 00-9.287 5.125l-5.954 20.62-24.099-12.919 13.898-16.353a7.5 7.5 0 10-11.429-9.715l-15.993 18.818-19.562-10.487c.105-.14.224-.289.354-.449l36.352-44.809 69.789 37.425zm43.756-83.006l-8.591 15.997a3.981 3.981 0 01-2.375 1.933 3.96 3.96 0 01-3.027-.299l-.003-.002-76.639-41.098-4.091-2.194c-1.893-1.01-2.631-3.476-1.618-5.372l8.58-16.009c.717-1.33 2.141-2.097 3.581-2.097a3.89 3.89 0 011.833.452l80.704 43.278c1.937 1.045 2.667 3.486 1.646 5.411z"
      />
    </svg>
  );
}

export default HairDye;