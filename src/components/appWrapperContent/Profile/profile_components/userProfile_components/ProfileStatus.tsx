import React, {useState, useEffect} from 'react';
import {updateStatus_thunkC} from "../../../../../redux/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import {appStateType} from "../../../../../redux/redux-store";
import {getStatus_selector} from "../../../../../Selectors/Selectors";

const ProfileStatus: React.FC = () => {
    let dispatch = useDispatch()
    let status = useSelector((state: appStateType) => getStatus_selector(state))
    let [editMode, setEditMode] = useState(false);
    let [statusState, setStatus] = useState(useSelector((state: appStateType) => getStatus_selector(state)));

    useEffect(() => {
        setStatus(status)
    }, [status]);

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={() => {
                        setEditMode(true)
                      }}>
                    {statusState || "-------"}
                </span>
            </div>
            }
            {editMode &&
            <div>
                <input
                    onChange={(e) => {
                        setStatus(e.currentTarget.value)
                    }}
                    autoFocus={true} onBlur={() => {
                        setEditMode(false)
                        dispatch(updateStatus_thunkC(status))
                    }}
                    value={status}/>
            </div>
            }
        </div>
    )
}

export default React.memo(ProfileStatus);