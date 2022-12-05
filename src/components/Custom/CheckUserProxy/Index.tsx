import CustomButton from "../CustomButton/CustomButton";
import ConfirmedStyle from "./style";
const CheckUserProxy = () => {
  // const navigate = useNavigate();
  return (
    <ConfirmedStyle>
      <div className="inner-container">
        <div className="d-flex justify-content-center">
          <CustomButton
            bgcolor="red"
            color="white"
            padding="8px 8px"
            width="80%"
            type="submit"
            title="Proxy Build ... !"
            margin="auto"
            fontSize="16px"
            borderRadius="4px"
            // clicked={() => setIsModalVisible(false)}
          />
        </div>
      </div>
    </ConfirmedStyle>
  );
};

export default CheckUserProxy;
