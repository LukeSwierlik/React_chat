import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import ViewMessages from 'view/ViewMessages';
import ViewInputMessage from 'view/ViewInputMessage';
import {currentTime} from 'utility/utility';
import { messages as action } from 'reduxUtility/actionsType/actionsType';
import ViewAlert from "../view/ViewAlert";

class Messages extends Component {
    constructor(props) {
        super(props);

        this.messageBox = React.createRef();

        this.state = {
            text: '',
            channelId: props.channel.id
        };
    }

    componentDidMount() {
        const { actions: { fetchMessages } } = this.props;
        const { channelId } = this.state;

        fetchMessages(channelId);
    }

    handlerChange = ({ target }) => {
        const text = target.value;

        this.setState({
            text
        });
    };

    onSubmitMessage = (event) => {
        event.preventDefault();

        const { actions: { sendMessage }, user } = this.props;
        const { text, channelId } = this.state;
        const date = currentTime();

        const data_message = {
            channelId,
            userId: user.id,
            message: text,
            messageDate: date
        };

        sendMessage(data_message);

        this.setState({
            text: ''
        });
    };

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.messages.loading !== this.props.messages.loading ||
            prevProps.messages.messagesList.length !== this.props.messages.messagesList.length) {
            const { current } = this.messageBox;
            const scrollHeight = current.scrollHeight;
            const height = current.clientHeight;
            const maxScrollTop = scrollHeight - height;
            ReactDOM.findDOMNode(current).scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
        }
    }


    render() {
        const { messages, user, users } = this.props;
        const { text } = this.state;

        return (
            <div className={'row'}>
                <div className={'col sm-12'}>
                    <div className={'messages_box'} ref={this.messageBox}>
                        {!messages.loading && <ViewMessages
                            messages={messages.messagesList}
                            currentUser={user}
                            users={users}
                        />}
                    </div>

                    <hr />

                    {user.isLogged ? (<ViewInputMessage
                        onChange={this.handlerChange}
                        onSubmit={this.onSubmitMessage}
                        textMessage={text}
                    />) : (
                        <ViewAlert type={'danger'} message={'You must be logged in to be able to write.'}/>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth,
        messages: state.messages,
        users: state.users.usersList
    }
};

const mapDispatchToProps = (dispatch) => {
    const actions = {
        sendMessage: (data_message) => dispatch({type: action.SEND_MESSAGES_SAGA, data_message}),
        fetchMessages: (channelId) => dispatch({type: action.FETCH_MESSAGES_SAGA, channelId})
    };

    return { actions }
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);