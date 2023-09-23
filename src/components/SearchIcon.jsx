const SearchIcon = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={"100%"}
    height={"100%"}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={2.314}
      d="m21 21-4.486-4.494L21 21Zm-2-10.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0v0Z"
    />
  </svg>
);
export default SearchIcon;
