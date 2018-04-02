import {addVideo,sourceEdit} from '@/api/source'
import {setStore,getStore} from '@/utils/index'


const upload = {
  state: {
    uploadQueue:[],
    uploading:{
      progress:0,
      videoSpeed:0,
      videoSize:0,
      videoLoaded:0,

      hasSuccess:false,

      fileName:'',
      uploadId:'',
      isLoading:false,
      videoId:''
    }
  },

  mutations: {
    ADD_QUEUE:(state,data)=>{
      state.uploadQueue.push(data)
    },
    UPDATE_LOADING:(state,data)=>{
      Object.assign(state.uploading, data);
    },
    REMOVE_QUEUE:(state,index)=>{
      state.uploadQueue.splice(index,1);
    },
    RESET_LOADING:(state)=>{
      state.uploading={
        progress:0,
        videoSpeed:0,
        videoSize:0,
        videoLoaded:0,
        hasSuccess:false,

        fileName:'',
        uploadId:'',
        isLoading:false,
        videoId:''
      }
    }
  },

  actions: {
    //视频上传
    PushLoading({ commit }, obj) {
      const postParam={};
      postParam.fileName=obj.fileName;
      postParam.suffix=obj.suffix;
      postParam.uploadStatus=0;
      // postParam.tempId=obj.uploadId;
      postParam.url=obj.url;
      postParam.videoType=101;
      postParam.teamId=null;
      return new Promise((resolve, reject) => {
        if(obj.way=='add'){
          addVideo(postParam).then(res => {
            // const data = response.data;
            // setToken(data.token);
            // commit('SET_TOKEN', data.token);
            let queueObj={}
            queueObj.videoId=res.data.id;
            queueObj.uploader=obj.uploader;
            queueObj.uploadId=obj.uploadId;
            setStore('videoDetailById',res.data.id)
            let loadingObj={};
            loadingObj.fileName=obj.fileName;
            loadingObj.uploadId=obj.uploadId;
            loadingObj.videoId=res.data.id;
            loadingObj.isLoading=true;

            commit('ADD_QUEUE',queueObj)

            commit('UPDATE_LOADING',loadingObj);
            resolve()
          }).catch(error => {
            reject(error)
          })
        }else if(obj.way=='edit'){
          postParam.id=getStore('videoDetailById');
          sourceEdit(postParam).then(res => {
            // const data = response.data;
            // setToken(data.token);
            // commit('SET_TOKEN', data.token);
            let queueObj={}
            queueObj.videoId=res.data.id;
            queueObj.uploader=obj.uploader;
            queueObj.uploadId=obj.uploadId;
            setStore('videoDetailById',res.data.id)
            let loadingObj={};
            loadingObj.fileName=obj.fileName;
            loadingObj.uploadId=obj.uploadId;
            loadingObj.videoId=res.data.id;
            loadingObj.isLoading=true;

            commit('ADD_QUEUE',queueObj)

            commit('UPDATE_LOADING',loadingObj);
            resolve()
          }).catch(error => {
            reject(error)
          })
        }
      })
    },

    //获取进度
    UpdateLoading({ commit }, obj) {
      commit('UPDATE_LOADING',obj)
    },

    //移除进程
    RemoveQueue({ commit }, index) {
      commit('REMOVE_QUEUE',index)
    },
    //重置进程
    ResetLoading({ commit }){
      commit('RESET_LOADING')
    }


  }
}

export default upload
