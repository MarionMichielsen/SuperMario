
export function store (posX, posY){
    var key = uuid

    const mario = {
        x: posX,
        y: posY,
    }

    window.localStorage.setItem(key,JSON.stringify(mario))
}


export function retrieveRecords(uuid){ //retrieves items in the localStorage
    console.log("retrieve records");
    var key = uuid;
    var data = window.localStorage.getItem(key);
    return data
}
  

export function removeItem(){  //deletes item from localStorage
    var key = document.getElementById('removeKey').value;
    localStorage.removeItem(key)
    console.log("remove items");
}

export function clearStorage(){ 
    //clears the entire localStorage
    localStorage.clear()
    console.log("clear records");
}

export function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}


