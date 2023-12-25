const Loader = (props: { color: string }) => {
  return <span className={`loader loader_${props.color}`} id="loader"></span>;
};

export default Loader;
