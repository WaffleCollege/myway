import React from 'react';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import Txt from './input'; // Txtコンポーネントのインポート
import BoxSystemProps from './postdisplay'; // BoxSystemPropsコンポーネントのインポート
import storage from "../../firebase"
import Modal from 'react-modal';//ReactModalのインポート
import Individual from '../individual-display/individual';//individual-displayインポート

Modal.setAppElement('#root');

class Entire extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            openModals: {}, //各モーダルの開閉状態を管理
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

    openModal = (postId) => {
        this.setState((prevState) => ({
            openModals: {
                ...prevState.openModals,
                [postId]: true, // 特定の投稿のモーダルを開く
            },
        }));
    }

    closeModal = (postId) => {
        this.setState((prevState) => ({
            openModals: {
                ...prevState.openModals,
                [postId]: false, // 特定の投稿のモーダルを閉じる
            },
        }));
    }

    render() {
        return (
            <div className="whole">
                <div className="explore">
                    <Txt />
                </div>
                {this.state.posts.map((post) => (
                    <div className="displayimages" key={post.id}>
                        <BoxSystemProps title={post.title} />

                         {/* 投稿ごとのモーダル */}
                        <Modal
                            isOpen={this.state.openModals[post.id] || false}
                            onRequestClose={() => this.closeModal(post.id)}
                            contentLabel={`Individual Post Modal - ${post.id}`}
                        >
                            {/* Individualコンポーネントをモーダル内で表示 */}
                            <Individual postId={post.id} />
                        </Modal>

                        {/* モーダルを開くボタン */}
                        <button className='modalbutton' onClick={() => this.openModal(post.id)}>Check!</button>   
                    </div>
                ))}
            </div>
        );
    }
}
export default Entire;