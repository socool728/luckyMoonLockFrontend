import React from "react";

const Setting = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.9327 10.4307L16.1839 9.81425C15.6709 9.39199 15.6718 8.60716 16.1839 8.18575L16.9327 7.56932C17.4656 7.1306 17.6019 6.37833 17.2568 5.7805L15.7782 3.2195C15.433 2.62171 14.7132 2.36366 14.067 2.60575L13.1587 2.94602C12.5366 3.17904 11.8574 2.78603 11.7483 2.13177L11.5889 1.17503C11.4754 0.494191 10.8921 0 10.2018 0H7.24465C6.55435 0 5.97097 0.494191 5.85752 1.17506L5.69805 2.13177C5.58882 2.78719 4.90869 3.17865 4.28773 2.94606L3.37946 2.60575C2.73319 2.36366 2.01347 2.62174 1.66827 3.2195L0.189702 5.78046C-0.155426 6.37822 -0.0191608 7.13053 0.513773 7.56928L1.26257 8.18571C1.77557 8.60801 1.77455 9.39277 1.26257 9.81422L0.513738 10.4306C-0.0191608 10.8694 -0.155462 11.6217 0.189667 12.2195L1.66827 14.7805C2.01343 15.3782 2.73301 15.6363 3.37946 15.3942L4.28769 15.0539C4.90992 14.8208 5.589 15.2141 5.69802 15.8682L5.85749 16.8249C5.97097 17.5058 6.55435 18 7.24461 18H10.2018C10.892 18 11.4754 17.5058 11.5889 16.8249L11.7483 15.8683C11.8575 15.213 12.5376 14.8213 13.1587 15.054L14.067 15.3943C14.7134 15.6364 15.433 15.3783 15.7782 14.7805L17.2568 12.2195C17.6019 11.6217 17.4656 10.8694 16.9327 10.4307ZM14.5603 14.0774L13.652 13.7371C12.2001 13.1932 10.6156 14.1108 10.3612 15.637L10.2018 16.5938H7.24465L7.08518 15.637C6.83033 14.1079 5.24348 13.1942 3.79438 13.7371L2.88612 14.0774L1.40755 11.5164L2.15634 10.8999C3.35338 9.91452 3.35088 8.08344 2.15634 7.10005L1.40755 6.48362L2.88615 3.92263L3.79438 4.26291C5.24633 4.80677 6.83082 3.8892 7.08518 2.36296L7.24461 1.40625H10.2018L10.3612 2.36296C10.6161 3.89232 12.203 4.80565 13.652 4.26291L14.5603 3.92263L16.0392 6.48327C16.0392 6.48327 16.0391 6.48338 16.0388 6.48359L15.29 7.10002C14.093 8.08537 14.0954 9.91649 15.29 10.8999L16.0388 11.5163L14.5603 14.0774ZM8.72321 5.53124C6.81054 5.53124 5.25445 7.08732 5.25445 9C5.25445 10.9127 6.81054 12.4688 8.72321 12.4688C10.6359 12.4688 12.192 10.9127 12.192 9C12.192 7.08732 10.6359 5.53124 8.72321 5.53124ZM8.72321 11.0625C7.58594 11.0625 6.6607 10.1373 6.6607 9C6.6607 7.86273 7.58594 6.93749 8.72321 6.93749C9.86048 6.93749 10.7857 7.86273 10.7857 9C10.7857 10.1373 9.86048 11.0625 8.72321 11.0625Z"
        fill="#7C86AF"
      />
    </svg>
  );
};

export default Setting;
