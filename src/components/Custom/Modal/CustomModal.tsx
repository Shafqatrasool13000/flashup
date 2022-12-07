import { CloseOutlined } from "@ant-design/icons";
import { Modal } from "antd";

const CustomModal = ({
  children,
  isModalVisible,
  setIsModalVisible,
  centered,
}: any) => {
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Modal
      open={isModalVisible}
      footer={null}
      onCancel={handleCancel}
      centered={centered}
      style={{ top: 20 }}
      closable={false}
      closeIcon={<CloseOutlined />}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
