module.exports = function( obj ) {
  const url = 'https://www.xrrjkj.com/jssdk/upload';
  const options = {
    duration: 10000,//指定录音的时长，单位 ms
    sampleRate: 16000,//采样率
    numberOfChannels: 1,//录音通道数
    encodeBitRate: 96000,//编码码率
    format: 'mp3',//音频格式，有效值 aac/mp3
    frameSize: 50,//指定帧大小，单位 KB
  }
  let recorderManager = wx.getRecorderManager()
  recorderManager.start(options);
  recorderManager.onStart(() => {
    console.log('recorder start')
  });
  //错误回调
  recorderManager.onError((res) => {
    console.log(res);
  });
  //停止
  recorderManager.onStop((res) => {
    const { tempFilePath } = res;
    console.log(tempFilePath);
    wx.uploadFile({
      url: url,
      filePath: tempFilePath,
      name: 'file',
      header: {
        "content-type": "multipart/form-data"
      },  
      success: (res) => { console.log(res.data); obj.callback(res.data);},
      fail:  (res)=>{console.log(res)}
    });
  });
}