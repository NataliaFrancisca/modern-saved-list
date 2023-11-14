const Loader = (props: { color: string }) => {
  return <span className={`loader loader_${props.color}`}></span>;
};

export default Loader;
