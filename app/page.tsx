import React, { ReactPortal, createContext } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} "@radix-ui/react-dialog";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="p-4 flex flex-row justify-between w-screen items-center relative">
        <div className="">
          <svg
            className="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M32 16.0003C32.0062 20.0094 30.5005 23.8734 27.7834 26.8214C27.6321 26.9859 27.4774 27.1488 27.3187 27.3065C27.311 27.3139 27.3026 27.3205 27.2935 27.3261C27.1558 27.4038 26.9965 27.4342 26.8399 27.4126C26.6833 27.3911 26.5381 27.3187 26.4266 27.2067L15.2182 15.9997L21.568 9.63168C21.5778 9.62159 21.5895 9.61354 21.6024 9.60805C21.6153 9.60255 21.6292 9.5997 21.6433 9.59967H25.1084C25.1295 9.59975 25.1501 9.60608 25.1676 9.61785C25.1851 9.62962 25.1988 9.64632 25.2068 9.66582C25.2149 9.68532 25.2169 9.70675 25.2128 9.72744C25.2086 9.74813 25.1985 9.76714 25.1836 9.78207L19.0601 15.9213C19.0502 15.9311 19.0423 15.9429 19.037 15.9558C19.0316 15.9687 19.0289 15.9825 19.0289 15.9965C19.0289 16.0104 19.0316 16.0243 19.037 16.0372C19.0423 16.0501 19.0502 16.0618 19.0601 16.0717L26.7123 23.7242C26.7232 23.7352 26.7365 23.7437 26.7511 23.7491C26.7657 23.7545 26.7813 23.7567 26.7968 23.7555C26.8123 23.7542 26.8273 23.7496 26.8409 23.7419C26.8544 23.7342 26.8661 23.7237 26.8752 23.711C28.7402 21.0808 29.5889 17.8638 29.2639 14.6559C28.9389 11.448 27.4624 8.46651 25.1077 6.26367C25.0973 6.25406 25.0889 6.24244 25.0831 6.22949C25.0772 6.21655 25.074 6.20256 25.0737 6.18836C25.0734 6.17416 25.076 6.16003 25.0813 6.14686C25.0866 6.13368 25.0945 6.12172 25.1045 6.11168L26.8394 4.376C26.8591 4.35618 26.8857 4.34481 26.9137 4.34434C26.9417 4.34386 26.9687 4.35431 26.9891 4.37344C28.5732 5.86695 29.8348 7.66887 30.6963 9.66828C31.5578 11.6677 32.0009 13.8223 31.9983 15.9994L32 16.0003Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.9319 27.4848L24.7128 29.2656C24.7241 29.2769 24.7328 29.2906 24.7381 29.3057C24.7435 29.3208 24.7454 29.3368 24.7437 29.3528C24.7421 29.3687 24.7369 29.384 24.7286 29.3977C24.7202 29.4113 24.7089 29.4229 24.6955 29.4317C22.2797 30.9954 19.4869 31.8786 16.6112 31.9884C13.7355 32.0981 10.8834 31.4304 8.35544 30.0554C5.82742 28.6804 3.71704 26.6492 2.24657 24.1756C0.776108 21.702 0 18.8776 0 16C0 13.1224 0.776108 10.298 2.24657 7.82443C3.71704 5.35084 5.82742 3.31957 8.35544 1.94461C10.8834 0.569649 13.7355 -0.0981193 16.6112 0.0116468C19.4869 0.121413 22.2797 1.00465 24.6955 2.56832C24.7089 2.57706 24.7202 2.58869 24.7286 2.60234C24.7369 2.61599 24.7421 2.63133 24.7437 2.64725C24.7454 2.66316 24.7435 2.67924 24.7381 2.69432C24.7328 2.7094 24.7241 2.72309 24.7128 2.7344L11.5214 15.9245C11.5115 15.9343 11.5037 15.9461 11.4983 15.959C11.493 15.9719 11.4902 15.9857 11.4902 15.9997C11.4902 16.0137 11.493 16.0275 11.4983 16.0404C11.5037 16.0533 11.5115 16.065 11.5214 16.0749L17.6657 22.2189C17.6806 22.2338 17.6908 22.2528 17.6949 22.2735C17.699 22.2942 17.697 22.3156 17.6889 22.3351C17.6809 22.3546 17.6672 22.3713 17.6497 22.3831C17.6322 22.3949 17.6116 22.4012 17.5905 22.4013H14.0742L7.74969 16.0749C7.7398 16.065 7.73196 16.0533 7.7266 16.0404C7.72125 16.0275 7.7185 16.0137 7.7185 15.9997C7.7185 15.9857 7.72125 15.9719 7.7266 15.959C7.73196 15.9461 7.7398 15.9343 7.74969 15.9245L20.1772 3.49824C20.1901 3.48534 20.1995 3.46937 20.2044 3.45183C20.2094 3.4343 20.2099 3.41579 20.2057 3.39804C20.2015 3.38029 20.1929 3.3639 20.1806 3.35042C20.1684 3.33693 20.1529 3.32679 20.1356 3.32096C18.0157 2.62947 15.7563 2.48054 13.564 2.88782C11.3716 3.29509 9.31645 4.24556 7.5864 5.65227C5.85634 7.05899 4.50666 8.87704 3.66081 10.9401C2.81496 13.0032 2.49996 15.2454 2.74462 17.4616C2.98927 19.6779 3.78578 21.7974 5.06127 23.6263C6.33676 25.4552 8.05052 26.9352 10.0458 27.9307C12.041 28.9262 14.254 29.4055 16.4824 29.3248C18.7108 29.2441 20.8833 28.606 22.8014 27.4688C22.8215 27.4569 22.845 27.4521 22.8682 27.4551C22.8913 27.458 22.9129 27.4686 22.9294 27.4851L22.9319 27.4848Z"
              fill="black"
            />
          </svg>
        </div>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M4 8V4H8V8H4Z" fill="black" />
                <path d="M10 8V4H14V8H10Z" fill="black" />
                <path d="M16 8V4H20V8H16Z" fill="black" />
                <path d="M4 14V10H8V14H4Z" fill="black" />
                <path d="M10 14V10H14V14H10Z" fill="black" />
                <path d="M16 14V10H20V14H16Z" fill="black" />
                <path d="M4 20V16H8V20H4Z" fill="black" />
                <path d="M10 20V16H14V20H10Z" fill="black" />
                <path d="M16 20V16H20V20H16Z" fill="black" />
              </svg>
            </div>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay></Dialog.Overlay>
            <Dialog.Content>
              <div>Hello</div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

        <div className="p-4 flex flex-row justify-between w-screen items-center relative">
          <div className="">
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M32 16.0003C32.0062 20.0094 30.5005 23.8734 27.7834 26.8214C27.6321 26.9859 27.4774 27.1488 27.3187 27.3065C27.311 27.3139 27.3026 27.3205 27.2935 27.3261C27.1558 27.4038 26.9965 27.4342 26.8399 27.4126C26.6833 27.3911 26.5381 27.3187 26.4266 27.2067L15.2182 15.9997L21.568 9.63168C21.5778 9.62159 21.5895 9.61354 21.6024 9.60805C21.6153 9.60255 21.6292 9.5997 21.6433 9.59967H25.1084C25.1295 9.59975 25.1501 9.60608 25.1676 9.61785C25.1851 9.62962 25.1988 9.64632 25.2068 9.66582C25.2149 9.68532 25.2169 9.70675 25.2128 9.72744C25.2086 9.74813 25.1985 9.76714 25.1836 9.78207L19.0601 15.9213C19.0502 15.9311 19.0423 15.9429 19.037 15.9558C19.0316 15.9687 19.0289 15.9825 19.0289 15.9965C19.0289 16.0104 19.0316 16.0243 19.037 16.0372C19.0423 16.0501 19.0502 16.0618 19.0601 16.0717L26.7123 23.7242C26.7232 23.7352 26.7365 23.7437 26.7511 23.7491C26.7657 23.7545 26.7813 23.7567 26.7968 23.7555C26.8123 23.7542 26.8273 23.7496 26.8409 23.7419C26.8544 23.7342 26.8661 23.7237 26.8752 23.711C28.7402 21.0808 29.5889 17.8638 29.2639 14.6559C28.9389 11.448 27.4624 8.46651 25.1077 6.26367C25.0973 6.25406 25.0889 6.24244 25.0831 6.22949C25.0772 6.21655 25.074 6.20256 25.0737 6.18836C25.0734 6.17416 25.076 6.16003 25.0813 6.14686C25.0866 6.13368 25.0945 6.12172 25.1045 6.11168L26.8394 4.376C26.8591 4.35618 26.8857 4.34481 26.9137 4.34434C26.9417 4.34386 26.9687 4.35431 26.9891 4.37344C28.5732 5.86695 29.8348 7.66887 30.6963 9.66828C31.5578 11.6677 32.0009 13.8223 31.9983 15.9994L32 16.0003Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.9319 27.4848L24.7128 29.2656C24.7241 29.2769 24.7328 29.2906 24.7381 29.3057C24.7435 29.3208 24.7454 29.3368 24.7437 29.3528C24.7421 29.3687 24.7369 29.384 24.7286 29.3977C24.7202 29.4113 24.7089 29.4229 24.6955 29.4317C22.2797 30.9954 19.4869 31.8786 16.6112 31.9884C13.7355 32.0981 10.8834 31.4304 8.35544 30.0554C5.82742 28.6804 3.71704 26.6492 2.24657 24.1756C0.776108 21.702 0 18.8776 0 16C0 13.1224 0.776108 10.298 2.24657 7.82443C3.71704 5.35084 5.82742 3.31957 8.35544 1.94461C10.8834 0.569649 13.7355 -0.0981193 16.6112 0.0116468C19.4869 0.121413 22.2797 1.00465 24.6955 2.56832C24.7089 2.57706 24.7202 2.58869 24.7286 2.60234C24.7369 2.61599 24.7421 2.63133 24.7437 2.64725C24.7454 2.66316 24.7435 2.67924 24.7381 2.69432C24.7328 2.7094 24.7241 2.72309 24.7128 2.7344L11.5214 15.9245C11.5115 15.9343 11.5037 15.9461 11.4983 15.959C11.493 15.9719 11.4902 15.9857 11.4902 15.9997C11.4902 16.0137 11.493 16.0275 11.4983 16.0404C11.5037 16.0533 11.5115 16.065 11.5214 16.0749L17.6657 22.2189C17.6806 22.2338 17.6908 22.2528 17.6949 22.2735C17.699 22.2942 17.697 22.3156 17.6889 22.3351C17.6809 22.3546 17.6672 22.3713 17.6497 22.3831C17.6322 22.3949 17.6116 22.4012 17.5905 22.4013H14.0742L7.74969 16.0749C7.7398 16.065 7.73196 16.0533 7.7266 16.0404C7.72125 16.0275 7.7185 16.0137 7.7185 15.9997C7.7185 15.9857 7.72125 15.9719 7.7266 15.959C7.73196 15.9461 7.7398 15.9343 7.74969 15.9245L20.1772 3.49824C20.1901 3.48534 20.1995 3.46937 20.2044 3.45183C20.2094 3.4343 20.2099 3.41579 20.2057 3.39804C20.2015 3.38029 20.1929 3.3639 20.1806 3.35042C20.1684 3.33693 20.1529 3.32679 20.1356 3.32096C18.0157 2.62947 15.7563 2.48054 13.564 2.88782C11.3716 3.29509 9.31645 4.24556 7.5864 5.65227C5.85634 7.05899 4.50666 8.87704 3.66081 10.9401C2.81496 13.0032 2.49996 15.2454 2.74462 17.4616C2.98927 19.6779 3.78578 21.7974 5.06127 23.6263C6.33676 25.4552 8.05052 26.9352 10.0458 27.9307C12.041 28.9262 14.254 29.4055 16.4824 29.3248C18.7108 29.2441 20.8833 28.606 22.8014 27.4688C22.8215 27.4569 22.845 27.4521 22.8682 27.4551C22.8913 27.458 22.9129 27.4686 22.9294 27.4851L22.9319 27.4848Z"
                fill="black"
              />
            </svg>
          </div>
          <a className="inline-flex items-center">
            <span className="uppercase font-mono text-xs font-medium">
              Test Ride
            </span>
            <svg
              className="h-3 w-3"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M3.2 9L2.5 8.3L7.3 3.5H3V2.5H9V8.5H8V4.2L3.2 9Z"
                fill="black"
              />
            </svg>
          </a>
        </div>

        <a className="inline-flex items-center">
          <span className="uppercase font-mono text-xs font-medium">
            Test Ride
          </span>
          <svg
            className="h-3 w-3"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M3.2 9L2.5 8.3L7.3 3.5H3V2.5H9V8.5H8V4.2L3.2 9Z"
              fill="black"
            />
          </svg>
        </a>
      </div>
    </>
  );
}