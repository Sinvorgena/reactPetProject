import React, {useState} from "react";
import s from "./Paginator.module.scss"
import cn from "classnames"
import {useDispatch} from "react-redux";
import {usersActions, usersActionsTypes} from "../../redux/usersReducer";
// import {actions} from "../../redux/usersReducer";


type props = {
    numberOfPages: number
    currentPage: number
    setCurrentPage: (currentPage:number)=> usersActionsTypes
    portionSize?: number
}

const Paginator: React.FC<props> = ({numberOfPages, currentPage, setCurrentPage,portionSize=10})=> {
    let dispatch = useDispatch()
    let [currentPortion, setCurrentPortion] = useState(1)
    let totalPortionCount = Math.ceil(numberOfPages / portionSize)
    let pages = []
    for(let i =0;i<=numberOfPages;i++){
        pages.push(i)
    }
    let leftPortionPageNumber = (currentPortion-1)*portionSize+1
    let rightPortionPageNumber = currentPortion*portionSize
    return (
        <div className={s.paginatorBox}>
            {currentPortion !==1? <button onClick={()=>{
                setCurrentPortion(1)
                dispatch(setCurrentPage(1))
            }} className={s.toolBtn}>FIRST</button> : ""}
            {currentPortion > 1 ? <button onClick={()=>{
                setCurrentPortion(currentPortion-1)
                dispatch(setCurrentPage(((currentPortion-2)*portionSize)+1))
            }} className={s.toolBtn}>PREV</button> : ""}
            {pages.filter(p=> p>=leftPortionPageNumber && p<=rightPortionPageNumber).map(p=>{
                return <button  className={cn(s.btn, {[s.selectedBtn]:currentPage===p})} onClick={()=>{
                    dispatch(setCurrentPage(p))
                }}>{p}</button>

            })}
            {currentPortion < totalPortionCount ? <button onClick={()=>{
                setCurrentPortion(currentPortion+1)
                dispatch(setCurrentPage((currentPortion*portionSize)+1))
            }} className={s.toolBtn}>NEXT</button> : ""}
            {currentPortion < totalPortionCount ? <button onClick={()=>{
                setCurrentPortion(totalPortionCount)
                dispatch(setCurrentPage(numberOfPages))
            }} className={s.toolBtn}>LAST</button> : ""}
        </div>
    )

}

export default React.memo(Paginator)