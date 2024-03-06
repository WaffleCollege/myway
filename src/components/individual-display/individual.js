import React from 'react';
import Modal from 'react-modal'; // Modalをインポート

Modal.setAppElement('#root');

const Individual = ({ post, isOpen, onRequestClose }) => { // propsを受け取るように修正
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={`Individual Post Modal - ${post.id}`}
    >
      <h2>{post.title}</h2>
      {/* ここに詳細情報などを表示 */}
    </Modal>
  );
};

export default Individual;
