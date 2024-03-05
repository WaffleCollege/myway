import React from 'react';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import Txt from './input';
import BoxSystemProps from './postdisplay';
import storage from "../../firebase";
import Modal from 'react-modal';
import Individual from '../individual-display/individual';

Modal.setAppElement('#root');

class Entire extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            openModals: {},
            imageUrls: [] // 画像のURLを保持するstateを追加
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
                [postId]: true,
            },
        }));
    }

    closeModal = (postId) => {
        this.setState((prevState) => ({
            openModals: {
                ...prevState.openModals,
                [postId]: false,
            },
        }));
    }

    // 画像のURLを受け取り、stateに追加する関数
    handleImageUploaded = (url) => {
        this.setState(prevState => ({
            imageUrls: [...prevState.imageUrls, url]
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
                        <BoxSystemProps title={post.title} imageUrl={this.state.imageUrls[0]} /> {/* imageUrlをBoxSystemPropsに渡す */}
                        <Modal
                            isOpen={this.state.openModals[post.id] || false}
                            onRequestClose={() => this.closeModal(post.id)}
                            contentLabel={`Individual Post Modal - ${post.id}`}
                        >
                            <Individual postId={post.id} />
                        </Modal>
                        <button className='modalbutton' onClick={() => this.openModal(post.id)}>Check!</button>
                    </div>
                ))}
            </div>
        );
    }
}

export default Entire;
