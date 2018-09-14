import React from 'react';

const ViewInputMessage = (props) => {
    const { onSubmit, onChange, textMessage } = props;

    return (
        <form onSubmit={onSubmit} className="row">
            <div className={'col-9'}>
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
            </div>

            <div className={'col-3 button-send'}>
                <button type="submit" className="btn btn-primary">Send</button>
            </div>
        </form>
    );
};

export default ViewInputMessage;