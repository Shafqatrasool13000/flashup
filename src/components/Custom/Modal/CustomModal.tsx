import { Modal } from "antd";

const CustomModal = ({ children, isModalVisible, setIsModalVisible }: any) => {
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Modal
      visible={isModalVisible}
      footer={null}
      onCancel={handleCancel}
      centered={true}
      closable={false}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
