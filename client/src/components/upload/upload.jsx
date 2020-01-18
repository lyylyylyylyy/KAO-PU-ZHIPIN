import React,{Component} from 'react'
import {
    Upload, Icon, message,Modal
} from 'antd';
import 'antd/dist/antd.css';
import PropTypes from "prop-types";
import ImgCrop from "antd-img-crop";
import "antd/dist/antd.css";
import "./index.scss";


function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' ||file.type==='image/jpg';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG/JPEG file!');
    }

    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }

    return isJpgOrPng && isLt2M;
}

export default class Demo extends React.Component {
    static propTypes = {
        setHeader: PropTypes.func.isRequired,
    }

    state = {
        imageUrl:null,
        loading: false
    };


    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                        imageUrl,
                        loading: false,
                    },

                    this.props.setHeader(imageUrl,'1')
                ),
            );
        }
    };

    render() {
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const { imageUrl } = this.state;
        //const listHeader = !imageUrl ? '请上传头像' :<img src={imageUrl} />
        //console.log(imageUrl)
        return (
            <div>
                <ImgCrop>
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="http://localhost:3000/upload"
                        beforeUpload={beforeUpload}
                        onChange={this.handleChange}

                    >
                        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }}/> :  uploadButton}
                    </Upload>
                </ImgCrop>
            </div>

        );
    }
}


