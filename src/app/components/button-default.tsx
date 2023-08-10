const ButtonDefault = (props: { btnName: string }) => {
  return (
    <button className="button-default" type="submit">
      {props.btnName}
    </button>
  );
};

export default ButtonDefault;
