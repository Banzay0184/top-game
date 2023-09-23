const Cross = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={"100%"}
    height={"100%"}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={2}
      d="M3.414 3 21 20.586M3 21 21 3"
    />
  </svg>
);
export default Cross;
