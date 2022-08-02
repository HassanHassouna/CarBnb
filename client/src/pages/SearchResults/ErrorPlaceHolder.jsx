import Simplert from "react-simplert";

const ErrorPlaceHolder = () => {
  return(
    <Simplert
      showSimplert={true}
      type={"error"}
      title={"Error!"}
      message={"An error ocured, please try again"}
    />
  );
};

export default ErrorPlaceHolder;
