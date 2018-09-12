import React from 'react';

const ViewInputMessage = (props) => {
    const { onSubmit, onChange, textMessage } = props;

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <input type="text"
                       className="form-control"
                       id="exampleInputEmail1"
                       aria-describedby="emailHelp"
                       placeholder="Example message"
                       onChange={onChange}
                       value={textMessage}
                />
            </div>

            <button type="submit" className="btn btn-primary">Send</button>
        </form>
    );
};

export default ViewInputMessage;