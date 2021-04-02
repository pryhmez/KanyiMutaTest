const data = {
    "notifications": [
        "{{172edb5e-0434-fb4b-abec-96bedc814599}} mentioned you in a post \n{{173d80bc-a995-c2ba-3d80-61d641b482df}}",
        "{{173d8098-ea25-dc4c-2c28-d1691ed8ea13}} sent you a friend request."
    ],
    "entities": {
        "173d80bc-a995-c2ba-3d80-61d641b482df": {
            "subject": "@backend what's up again?",
            "type": "POST"
        },
        "172edb5e-0434-fb4b-abec-96bedc814599": {
            "subject": "Power Sunday",
            "type": "USER"
        },
        "173d8098-ea25-dc4c-2c28-d1691ed8ea13": {
            "subject": "Emmanuel Sunday",
            "type": "USER"
        }
    }
}


var re = /(\{\{[0-9a-zA-z-]+\}\})|(\\n)/g;
var splt = data.notifications[0].split(re).filter(Boolean);

//splits the value and organizes them using regex
let newData = data.notifications.map(items => {


    let splited = items.split(re).filter(Boolean);

    let newStrings = splited.map(item => {
            if(item.match(/\{\{.*?\}\}/g)){
                
                str = item.replace(/[{}]/g, "").trim();
        
                // console.log(data.entities[str].subject)
                return data.entities[str].subject;
            }
            else{
                return item;
            }
        });

        return newStrings.join(" ");
})


newData.map((item, i) => {
    console.log(i, item);
})

