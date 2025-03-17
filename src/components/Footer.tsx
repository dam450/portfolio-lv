export const Footer = () => {
  return (
    <footer className="flex h-20 bg-secondary-800 border-t-2 border-y-secondary-600">
      <div className="flex flex-row items-center justify-between max-w-6xl mx-auto gap-8">
        <div> </div>

        <p className="text-sm">Copyright © 2025</p>

        <div className="flex flex-row gap-2">
          {/* github */}
          <a
            className="rounded-full border-2 border-transparent hover:border-primary-500 transition-colors duration-300"
            href="https://github.com/luisviniciusdev"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              // github
              className="size-6"
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="27"
                height="27"
                rx="13.5"
                fill={`var(--color-secondary-50)`}
              />
              <path
                d="M15.75 21V18C15.8543 17.0605 15.5849 16.1176 15 15.375C17.25 15.375 19.5 13.875 19.5 11.25C19.56 10.3125 19.2975 9.39 18.75 8.625C18.96 7.7625 18.96 6.8625 18.75 6C18.75 6 18 6 16.5 7.125C14.52 6.75 12.48 6.75 10.5 7.125C9 6 8.25 6 8.25 6C8.025 6.8625 8.025 7.7625 8.25 8.625C7.70391 9.38691 7.43885 10.3146 7.5 11.25C7.5 13.875 9.75 15.375 12 15.375C11.7075 15.7425 11.49 16.1625 11.3625 16.6125C11.235 17.0625 11.1975 17.535 11.25 18M11.25 18V21M11.25 18C7.8675 19.5 7.5 16.5 6 16.5"
                stroke={`var(--color-secondary-900`}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>

          {/* linkedin */}
          <a
            className="rounded-full border-2 border-transparent hover:border-primary-500 transition-colors duration-300"
            href="https://www.linkedin.com/in/luisviniciuscerq/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              // linkedin
              className="size-6"
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="27"
                height="27"
                rx="13.5"
                fill={`var(--color-secondary-50)`}
              />
              <path
                d="M17.2 9.6999C18.473 9.6999 19.6939 10.2056 20.5941 11.1058C21.4943 12.006 22 13.2269 22 14.4999V20.0999H18.8V14.4999C18.8 14.0756 18.6314 13.6686 18.3314 13.3685C18.0313 13.0685 17.6243 12.8999 17.2 12.8999C16.7757 12.8999 16.3687 13.0685 16.0686 13.3685C15.7686 13.6686 15.6 14.0756 15.6 14.4999V20.0999H12.4V14.4999C12.4 13.2269 12.9057 12.006 13.8059 11.1058C14.7061 10.2056 15.927 9.6999 17.2 9.6999Z"
                stroke={`var(--color-secondary-900`}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.2 10.4999H6V20.0999H9.2V10.4999Z"
                stroke={`var(--color-secondary-900`}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.6 8.0999C8.48366 8.0999 9.2 7.38356 9.2 6.4999C9.2 5.61625 8.48366 4.8999 7.6 4.8999C6.71634 4.8999 6 5.61625 6 6.4999C6 7.38356 6.71634 8.0999 7.6 8.0999Z"
                stroke={`var(--color-secondary-900`}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};
