import * as actionTypes from '../actionTypes';
import { updateObject } from '../utility';

const profilestate={
    username:'',
    password:'',
    age:'',
    gender:'',
    suger:'',
    diastolic:'',
    systolic:'',
    bpresult:'',
    sugarresult:''
}

const ProfileReducer=(state=profilestate,action)=>{
    switch(action.type){
        case actionTypes.PROFILE_UPDATE:{
            return updateObject(state,{
                age:action.age,
                gender:action.gender,
                sugar:action.sugar,
                diastolic:action.diastolic,
                systolic:action.systolic,
                bpresult:action.bpresult,
                sugerresult:action.sugarresult
            })
        }
        case actionTypes.CRED_UPDATE:{
            return updateObject(state,{
                username:action.username,
                password:action.password
            })
        }
        default: return state;
    }
}

export default ProfileReducer