
//REDUCER
function data(state, action) {
    switch(action.type) {
        case 'SEARCH_VIDEO': {
            let results =[]
            if(action.payload.query){
                const categories = state.data.categories
                categories.map(item => {
                    let tempResults = item.playlist.filter(item => {
                        return item.author.toLowerCase().includes(action.payload.query.toLowerCase())
                    })
                    results = results.concat(tempResults)
                })
            }
            return {
                ...state,
                search: results
            }
        }
        default:
        return state
    }
}

export default data