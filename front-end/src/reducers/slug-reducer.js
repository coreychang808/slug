export default (state = [], {type, payload}) => {
    switch(type) {
      case 'SLUG_LOAD':
        return payload;
      case 'SLUG_UPDATE':
        return state.map(item => {
          console.log(item);
          if(item.id === payload.id){
            // console.log(item.id, payload.id, item.text, payload.slugs);
            // item.text = payload.slugs;
            // return item;
            return payload;
          }
          return item;
        })
      default:
        return state;
    }
  };