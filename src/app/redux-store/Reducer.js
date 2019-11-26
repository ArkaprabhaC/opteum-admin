const initState = {
    width: window.innerWidth,
    mob_selected_tab: 0,
    checked_checkBox:false, 
    show_item_modal: false
}
const reducer = (oldState = initState, action) => {
    //Think later
    let newState = {
        ...oldState
    }
    if(action.type === 'screen_resize'){
       // console.log("resized trigger in reducer, action.val: "+action.val)
        newState={
            ...oldState,
            width: window.innerWidth
        }
    }
    if(action.type === 'mob_nav_change'){
        newState = {
            ...oldState,
            mob_selected_tab: action.val
        }

        //console.log('mob selected tab is '+newState.mob_selected_tab);
    }
    if(action.type === 'CHECKBOX_CHANGE'){
        newState = {
            ...oldState,
            checked_checkBox: !oldState.checked_checkBox
        }
    }
    if(action.type === 'SHOW_UNSHOW_ITEM_DASHBOARD'){
        newState = {
            ...oldState,
            show_item_modal: !oldState.show_item_modal
        }
        console.log("dispatched");
    }

    return newState;
}

export default reducer;
