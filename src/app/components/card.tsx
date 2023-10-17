import React from 'react';

// Define the prop types for the Card component
type CardProps = {
  title: string;
  description: string;
  backgroundColor: string;
  height: string;
};

const Card: React.FC<CardProps> = ({ title, description, backgroundColor, height }) => {
  // Define a style object to set the background color and height
  const cardStyle = {
    backgroundColor: backgroundColor,
    height: height,
    zIndex: 1, // Set the card's z-index to 1 (behind the SVG)
  };


  return (
    <div className="w-[227px] h-[187px] relative">
    <div className="border-box">
      <div className="w-[227px] h-[387px] absolute top-0 left-1/2 transform -translate-x-1/2">
        <div className="p-4 max-w-md mx-auto border shadow-lg rounded-lg" style={cardStyle}>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
    <svg
  width={314}
  height={314}
  viewBox="0 0 228 228"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="w-[214px] h-[194px] relative"
  preserveAspectRatio="xMidYMid meet"
  style={{
    position: 'absolute',
    zIndex: 1, // Ensure the SVG is in front of the card
    top: '50%', // Center vertically
    left: '50%', // Center horizontally
    transform: 'translate(-50%, -50%)', // Center the SVG
  }}
>
          {<svg
  width={214}
  height={114}
  viewBox="0 40 228 228" // Keep the viewBox as it is
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="w-[114px] h-[214px] relative" // Adjust the class for size
  preserveAspectRatio="xMidYMid meet"
>
<svg
  width={228}
  height={228}
  viewBox="0 40 228 228"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="w-[227px] h-[227px] relative"
  preserveAspectRatio="xMidYMid meet"
>
  <g clip-path="url(#clip0_738_700)">
    <path
      d="M67.4139 98.7192L17.8408 192.117L62.8576 187.958L84.6456 227.574L134.219 134.176L67.4139 98.7192Z"
      fill="#E95454"
    />
    <path
      d="M73.0919 200.378C74.4829 197.39 73.028 193.82 70.1182 192.273L67.2652 190.754C64.4121 189.129 63.3263 185.517 64.8805 182.593C66.4561 179.619 70.1608 178.483 73.1344 180.059L81.1967 184.338C83.6878 185.659 86.8105 184.7 88.0951 182.195L88.2938 181.812C89.77 179.449 88.8971 176.326 86.4415 175.027L62.3256 162.231C59.3874 160.67 57.9467 157.114 59.3164 154.119C60.8281 150.933 64.6463 149.676 67.7194 151.309L90.0894 163.182C92.5804 164.502 95.7032 163.544 97.0232 161.053L97.151 160.726L97.1864 160.656C98.613 158.044 97.6123 154.765 94.9792 153.367L82.4316 146.71C79.4934 145.148 78.0527 141.593 79.4437 138.562C80.9412 135.411 84.7737 134.12 87.8467 135.752L101.707 143.112C104.298 144.488 107.392 143.339 108.733 140.727C108.755 140.691 108.755 140.691 108.769 140.656C108.79 140.62 108.79 140.62 108.804 140.585C110.217 138.009 109.436 134.801 106.838 133.431L91.8849 125.497C88.9822 123.957 87.5415 120.401 88.9112 117.406C90.4229 114.219 94.2411 112.963 97.3142 114.595L134.205 134.176L84.6317 227.574L70.9698 202.741C71.8499 202.145 72.6164 201.407 73.0919 200.378Z"
      fill="#ED6362"
    />
    <path
      d="M160.145 98.7192L209.718 192.117L164.701 187.958L142.913 227.574L93.3398 134.176L160.145 98.7192Z"
      fill="#ED6362"
    />
    <path
      d="M154.467 200.378C153.076 197.39 154.531 193.82 157.44 192.273L160.293 190.754C163.146 189.129 164.232 185.516 162.678 182.592C161.102 179.619 157.398 178.483 154.424 180.059L146.362 184.338C143.871 185.658 140.748 184.7 139.463 182.195L139.265 181.812C137.789 179.448 138.662 176.326 141.117 175.027L165.24 162.224C168.178 160.662 169.619 157.107 168.249 154.112C166.738 150.925 162.919 149.669 159.846 151.301L137.476 163.175C134.985 164.495 131.863 163.537 130.542 161.046L130.415 160.719L130.379 160.648C128.953 158.036 129.953 154.758 132.586 153.359L145.134 146.702C148.072 145.141 149.513 141.585 148.122 138.555C146.624 135.404 142.792 134.112 139.719 135.745L125.844 143.118C123.254 144.495 120.159 143.345 118.818 140.734C118.797 140.698 118.797 140.698 118.783 140.663C118.761 140.627 118.761 140.627 118.747 140.592C117.335 138.016 118.115 134.808 120.713 133.438L135.667 125.503C138.569 123.963 140.01 120.408 138.64 117.413C137.129 114.226 133.31 112.97 130.237 114.602L93.3467 134.183L142.92 227.581L156.582 202.748C155.709 202.145 154.942 201.407 154.467 200.378Z"
      fill="#E95454"
    />
    <path
      d="M113.779 166.241C159.525 166.241 196.609 129.157 196.609 83.4108C196.609 37.6651 159.525 0.580811 113.779 0.580811C68.0335 0.580811 30.9492 37.6651 30.9492 83.4108C30.9492 129.157 68.0335 166.241 113.779 166.241Z"
      fill="#FFCC5B"
    />
    <path
      d="M125.014 73.9078H72.5238C68.443 73.9078 65.0932 70.558 65.0932 66.4772L65.1499 65.9662V65.8526C65.0932 61.5447 68.6062 58.0245 72.9212 58.0245H109.301C114.12 58.0245 118.378 54.4547 118.662 49.6287C118.889 44.5827 114.865 40.3244 109.812 40.3244H71.2747C67.0236 40.3244 63.8441 36.7546 63.9009 32.4964C63.9009 32.4396 63.9009 32.4396 63.9009 32.3828C63.9009 32.326 63.9009 32.326 63.9009 32.2693C63.8441 28.0181 67.0165 24.4412 71.2747 24.4412H111.6C116.362 24.4412 120.621 20.8714 120.905 16.1021C121.132 10.9993 117.108 6.79785 112.055 6.79785H82.5236C52.4107 19.2106 31.1904 48.8196 31.1904 83.4108C31.1904 118.002 52.4107 147.604 82.5307 160.002H120.025C124.787 160.002 129.045 156.433 129.329 151.663C129.556 146.561 125.532 142.366 120.479 142.366L77.8253 142.359C72.7935 142.359 68.7411 138.151 69.0107 133.055C69.2591 128.286 73.5458 124.702 78.3221 124.702H94.8583C99.6133 124.567 103.453 120.67 103.453 115.88C103.453 111.004 99.4856 107.03 94.6028 107.03H69.5359C65.4551 107.03 62.1053 103.687 62.1621 99.5992V98.9747C61.8782 94.9506 65.1145 91.544 69.1385 91.544H124.503C129.322 91.544 133.58 87.9742 133.864 83.205C134.091 78.1093 130.06 73.9078 125.014 73.9078Z"
      fill="#FDBC4B"
    />
    <path
      d="M113.779 142.53C81.1751 142.53 54.6533 116.001 54.6533 83.4038C54.6533 50.8069 81.1751 24.2852 113.779 24.2852C146.383 24.2852 172.905 50.814 172.905 83.4109C172.905 116.008 146.383 142.53 113.779 142.53Z"
      fill="#FFDB70"
    />
    <path
      opacity="0.2"
      d="M172.905 83.4107C172.905 51.9565 148.193 26.2296 117.171 24.4553H111.664C108.03 24.4553 104.787 27.1806 104.567 30.8143C104.396 34.7035 107.462 37.9114 111.316 37.9114L143.849 37.9185C147.689 37.9185 150.776 41.1264 150.57 45.0156C150.378 48.6564 147.114 51.3887 143.466 51.3887H130.854C127.228 51.4952 124.297 54.4618 124.297 58.1168C124.297 61.8356 127.327 64.8661 131.046 64.8661H150.166C153.281 64.8661 155.829 67.421 155.786 70.5295V70.998C155.999 74.071 153.537 76.6614 150.464 76.6614H108.243C104.567 76.6614 101.323 79.3867 101.103 83.0204C100.933 86.9096 103.999 90.1175 107.853 90.1175H147.88C150.996 90.1175 153.544 92.6724 153.544 95.7809L153.501 96.1713V96.2564C153.544 99.5424 150.861 102.225 147.575 102.225H119.826C116.149 102.225 112.906 104.95 112.686 108.627C112.516 112.473 115.581 115.724 119.435 115.724H148.824C152.068 115.724 154.488 118.449 154.445 121.692C154.445 121.735 154.445 121.735 154.445 121.778C154.445 121.82 154.445 121.82 154.445 121.863C154.488 125.106 152.068 127.831 148.824 127.831H118.073C114.439 127.831 111.195 130.557 110.975 134.19C110.805 138.087 113.871 141.287 117.725 141.287H125.837C152.685 135.695 172.905 111.87 172.905 83.4107Z"
      fill="white"
    />
    <path
      d="M155.056 70.3168H126.299L117.406 42.9646C116.264 39.4516 111.288 39.4516 110.146 42.9646L101.26 70.3168H72.503C68.8054 70.3168 67.2653 75.0505 70.2603 77.2222L93.5245 94.1274L84.639 121.48C83.4963 124.993 87.5204 127.917 90.5154 125.745L113.78 108.84L137.044 125.745C140.039 127.917 144.063 124.993 142.92 121.48L134.035 94.1274L157.299 77.2222C160.287 75.0505 158.754 70.3168 155.056 70.3168Z"
      fill="#EC9922"
    />
  </g>
  <defs>
    {/* <clippath id="clip0_738_700">
      <rect width={227} height={227} fill="white" transform="translate(0.279297 0.580811)" />
    </clippath> */}
  </defs>
</svg>;
</svg>
}
</svg>
</div>
  );
};

export default Card;