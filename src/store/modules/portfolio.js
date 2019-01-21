const state= {
    funds: 10000,
    stocks: []
};

const mutations = {
    'BUY_STOCK'(state, {stockid, quantity, price}){
        const record = state.stocks.find(element => element.id == stockid);
        if(record){
            record.quantity= Number(quantity) + Number(record.quantity);
        }else{
            state.stocks.push({
                id: stockid,
                quantity: quantity
            });
        }
        state.funds-=price*quantity;
    },
    'SELL_STOCK'(state,{stockid, quantity, price}){
        const record = state.stocks.find(element => element.id == stockid);
        if(record.quantity> quantity){
            record.quantity-=quantity;
        }else{
            state.stocks.splice(state.stocks.indexOf(record),1)
        }
        state.funds+= price*quantity
    }
    
}

const actions = {
    sellStock({commit}, order){
        commit('SELL_STOCK',order);
    }
}

const getters = {
    stockPortfolio (state, getters){
        return state.stocks.map(stock=>{
            const record = getters.stocks.find(element => element.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        })
    },
    funds (state){
        return state.funds;
    }
}

export default {
    state,actions,mutations,getters
}