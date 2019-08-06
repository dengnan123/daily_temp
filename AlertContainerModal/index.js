import PropTypes from 'prop-types'
import styles from './index.less'

import { Modal } from 'antd'

function AlertModal(props) {
  const { modalTitle, modelVis, onCancel, onOk, content } = props
  return (
    <Modal
      closable={true}
      maskClosable={false}
      title={modalTitle}
      visible={modelVis}
      // footer={null}
      destroyOnClose={true}
      onCancel={onCancel}
      className={styles.content}
      onOk={onOk}
    >
      {content}
    </Modal>
  )
}

AlertModal.propTypes = {
  modalTitle: PropTypes.string,
  modelVis: PropTypes.bool,
  onCancel: PropTypes.func,
  onOk: PropTypes.func,
  content: PropTypes.element
}

export default AlertModal
