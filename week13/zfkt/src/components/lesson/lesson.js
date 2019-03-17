import React from 'react';
import { DatePicker,Rate,Upload, Icon, message } from "antd";
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            qqq:false
        }
    }
    change(){
        console.log(arguments)
        console.log(this);
        this.setState({
            qqq:true
        })
        this.fn()
    }
    fn(){
        this.rate.focus(5)
        console.log(this.rate)
    }
    getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    beforeUpload(file) {
        // debugger
        const isJPG = file.type === 'image/jpeg';
        if (!isJPG) {
            message.error('gsfgsgfsdgdsgsgsdgdfg');
        }
        const isLt2M = file.size / 1024 / 1024 < 0;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        // return isJPG && isLt2M;
        return true
    }
    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl => this.setState({
            imageUrl,
            loading: false,
            }));
        }
    }
    render() {
        const uploadButton = (
            <div>
              <Icon type={this.state.loading ? 'loading' : 'plus'} />
              <div className="ant-upload-text">Upload</div>
            </div>
          );
        const imageUrl = this.state.imageUrl;
        return <div className=''>
            <DatePicker 
                format=':MM:DD-YYYY hh-mm-ss' 
                onChange={this.change.bind(this)}  
                disabled={this.state.qqq}
            />
            <Rate 
                ref={(ele)=>{this.rate = ele}}
                allowHalf 
                defaultValue={2.5} 
                character="珠峰"  
                tooltips={['hello']}
            />
            <Upload
                name="mypic"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="//jsonplaceholder.typicode.com/posts/"
                beforeUpload={this.beforeUpload}
                onChange={this.handleChange}
            >
                {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
            </Upload>
            <input type="file"/>
        </div>;
    }
}

export default App