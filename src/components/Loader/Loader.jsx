import { Puff } from "react-loader-spinner";
import { StyledLoaderBackdrop } from "./Loader.styled";

const Loader = () => {
  return (
    <StyledLoaderBackdrop>
      <Puff
        visible={true}
        height="80"
        width="80"
        color="#3470ff"
        ariaLabel="puff-loading"
      />
    </StyledLoaderBackdrop>
  );
};

export default Loader;
