import { useNavigate } from "react-router-dom";
// import logo from "../../assets/icons/ic_logo(1).svg";
import CustomButton from "../CustomButton/CustomButton";
import ConfirmedStyle from "./style";
const CheckUserProxy = ({ setIsModalVisible }: any) => {
  const navigate = useNavigate();
  return (
    <ConfirmedStyle>
      <div className="inner-container">
        {/* <img src={logo} alt="logo" /> */}
        <p className="message">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna
        </p>
        <div className="mt-4">
          <CustomButton
            bgcolor="blue"
            color="white"
            padding="8px 8px"
            width="100%"
            type="submit"
            title="THANKS!"
            margin="auto"
            fontSize="16px"
            borderRadius="4px"
            clicked={() => setIsModalVisible(false)}
          />
        </div>
      </div>
    </ConfirmedStyle>
  );
};

export default CheckUserProxy;
