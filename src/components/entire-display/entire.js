import React from 'react';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import BoxSystemProps from './postdisplay';
import Modal from 'react-modal';

Modal.setAppElement('#root');

class Entire extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            currentPostId: null, // 現在表示中の投稿IDを管理
            selectedPost: null // 選択された投稿の詳細情報を保持
        };
    }

    componentDidMount() {
        const postData = collection(db, "posts");
        getDocs(postData).then((querySnapshot) => {
            this.setState({ posts: querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })) });
        });

        onSnapshot(postData, (post) => {
            this.setState({ posts: post.docs.map((doc) => ({ ...doc.data(), id: doc.id })) });
        });
    }
    
    openModal = (post) => {
        this.setState({
          currentPostId: post.id, // 現在表示中の投稿IDを更新
          selectedPost: post // 選択された投稿の詳細情報を設定
        });
    };
    
    closeModal = () => {
        this.setState({
          currentPostId: null, // モーダルを閉じたら現在表示中の投稿IDをリセット
          selectedPost: null // 選択された投稿の詳細情報をリセット
        });
    };

    render() {        
        const { posts, currentPostId, selectedPost } = this.state;

        return (
            <div className="whole">
                {posts.map((post, index) => (
                    <div className="displayimages" key={index}>
                        <BoxSystemProps title={post.title} image={post.coverImage}/>              
                        <button className="modalbutton" onClick={() => this.openModal(post)}>
                            Check!
                        </button>
                    </div>
                ))}
                
                {/* 選択された投稿の詳細情報をモーダルで表示 */}
                <Modal
                    isOpen={currentPostId !== null}
                    onRequestClose={this.closeModal}
                    contentLabel="Individual Post Modal"
                >
                    {selectedPost && (
                        <div>
                            <h2>{selectedPost.title}</h2>
                            {/* ここに詳細情報などを表示 */}
                        </div>
                    )}
                </Modal>
            </div>
        );
    }
}

export default Entire;
