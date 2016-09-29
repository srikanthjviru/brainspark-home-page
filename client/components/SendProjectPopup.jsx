import React from 'react';

class SendProjectPopup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            files: []
        }
    }

    handlerClickAddFilesBtn = (e) => {
        e.stopPropagation();
        e.preventDefault();

        this.refs.fileInput.click();
    }

    handlerOnchangeFileInput = (e) => {
        let files = e.target.files;
        files = Array.from(files);
        const newFiles = files.map(file => {
            return {
                name: file.name,
                type: file.type,
                size: this._convertFileSize(file.size)
            }
        });

        this.setState({
            files: newFiles
        });
    }

    render() {
        return(
            <div className={`popup ${(this.props.isShow)? 'popup--show' : ''}`}>
                <form
                    className='form form--send-popup'
                    encType="multipart/form-data"
                    onFocus={this.context.handlerFormFocus}
                    onBlur={this.context.removeFocusedClassInForm}
                >
                    <span
                        className="close-btn close-btn--send-popup"
                        onClick={this.props.handlerClosePopup}
                    />
                    <div className="form__input form__input--name">
                        <label htmlFor="form__input-name">Name<sup>*</sup></label>
                        <input id='form__input-name' type="text" name='name'/>
                    </div>
                    <div className="form__input form__input--email">
                        <label htmlFor="form__input-email">Email<sup>*</sup></label>
                        <input id='form__input-email' type="email" name='email'/>
                    </div>
                    <div className="form__input form__input--subject">
                        <label htmlFor="form__input-subject">Subject<sup>*</sup></label>
                        <input id='form__input-subject' type="text" name='subject'/>
                    </div>
                    <div className="form__input form__input--message">
                        <label htmlFor="form__input-message">tell us what site you need<sup>*</sup></label>
                        <textarea id='form__input-message' name='message'></textarea>
                    </div>
                    <div className="form__input form__input--file-attach">
                        <input
                            type="file"
                            name="files[]"
                            multiple
                            ref="fileInput"
                            onChange={this.handlerOnchangeFileInput}
                        />
                        <div className="file-list file-list--form">
                            {
                                this.state.files.map((file, index) =>
                                    <div
                                        key={index}
                                        className="file-list__item"
                                    >
                                        {file.name}
                                        <div className="file-list__item-size">{file.size}</div>
                                    </div>
                                )
                            }
                        </div>
                        <button
                            className="form__add-files-btn"
                            onClick={this.handlerClickAddFilesBtn}
                        />
                    </div>
                    <button className='form__submit-btn' type='submit'>Submit</button>
                </form>
            </div>
        )
    }

    _convertFileSize(bytes) {
        let fileSize;

        if(bytes < 1000000) {
            fileSize = `${Math.floor(bytes/1000)} Kb`;
        } else {
            fileSize = `${Math.floor(bytes/1000000)} Mb`;
        }

        return fileSize;
    }
}

SendProjectPopup.contextTypes = {
  handlerFormFocus: React.PropTypes.func,
  removeFocusedClassInForm: React.PropTypes.func
};

export default SendProjectPopup;
