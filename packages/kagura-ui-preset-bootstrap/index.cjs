module.exports = () => {
  const baseColors = {
    primary: "#007bff",
    secondary: "#6c757d"
  }
  return {
    colors: {
      text: baseColors,
      background: baseColors,
      border: baseColors
    },
    components: {
      button: {
        root: {
          "@apply inline-block font-normal text-center whitespace-nowrap align-middle select-none border border-transparent py-1.5 px-3 rounded text-base": {},
          transition: "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out"
        },
        primary: {
          "@apply text-white bg-primary border-primary": {}
        },
        secondary: {
          "@apply text-white bg-secondary border-secondary": {}
        },
        hover: {
          filter: "brightness(.9)"
        }
      },
    },
  };
};
