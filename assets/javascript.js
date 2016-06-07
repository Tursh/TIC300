console.log("Program boot");
//Constructor Person
function Person(){
    this.hope = {
        name: "Hope",
        quantity: 0,
        solveID: "solvehope",
        msgID: "hope",
        infoID: "hopeprop",
        time: 10,
        info: "hopeinfo",
        clock: false,
        timer: 0,
		created: false,
        loot: "hopeloot",
        needID: "hopeneed",
        need: [null, "", ""]
    },
    this.existance = {
        name: "Existance",
        quantity: 0,
        solveID: "solveexistance",
        msgID: "existance",
        infoID: "existanceprop",
        time: 10,
        info: "existanceinfo",
        clock: false,
        timer: 0,
		created: false,
        loot: "existanceloot",
        needID: "existanceneed",
        need: [null, "", ""]
    },
    this.body = {
        name: "Body",
        quantity: 0,
        solveID: "solvebody",
        msgID: "body",
        infoID: "bodyprop",
        time: 10,
        info: "bodyinfo",
        clock: false,
        timer: 0,
		created: false,
        loot: "bodyloot",
        needID: "bodyneed",
        need: [null, "", ""]
    },
    this.life = {
        name: "Life",
        quantity: 0,
        solveID: "solvelife",
        msgID: "life",
        infoID: "lifeprop",
        time: 10,
        info: "lifeinfo",
        clock: false,
        timer: 0,
		created: false,
        loot: "lifeloot",
        needID: "lifeneed",
        need: [null, "", ""]
    },
    this.knowledge = {
        name: "Knowledge",
        quantity: 0,
        solveID: "solveknowledge",
        msgID: "knowledge",
        infoID: "knowledgeprop",
        time: 20,
        info: "knowledgeinfo",
        clock: false,
        timer: 0,
		created: false,
        loot: "knowledgeloot",
        needID: "knowledgeneed",
        need: [null, "", ""]
    },
    this.memory = {
        name: "Memory",
        quantity: 0,
        solveID: "solvememory",
        msgID: "memory",
        infoID: "memoryprop",
        time: 20,
		time2: 40,
        info: "memoryinfo",
        clock: false,
        timer: 0,
		created: false,
        loot: "memoryloot",
        needID: "memoryneed",
        need: [null, "", ""]
    },
    this.love = {
        name: "Love",
        quantity: 0,
        solveID: "solvelove",
        msgID: "love",
        infoID: "loveprop",
        time: 25,
        info: "loveinfo",
        clock: false,
        timer: 0,
		created: false,
        loot: "loveloot",
        needID: "loveneed",
        need: [null, "", ""]
    },
    this.integrity = {
        name: "Integrity",
        quantity: 0,
        solveID: "solveintegrity",
        msgID: "integrity",
        infoID: "integrityprop",
        time: 30,
        info: "integrityinfo",
        clock: false,
        timer: 0,
		created: false,
        loot: "integrityloot",
        needID: "integrityneed",
        need: [null, 8, "Knowledge"]
    },
    this.friend = {
        name: "Friend",
        quantity: 0,
        solveID: "solvefriend",
        msgID: "friend",
        infoID: "friendprop",
        time: 10,
        info: "friendinfo",
        clock: false,
        timer: 0,
		created: false,
        loot: "friendloot",
        needID: "friendneed",
        need: [null, "", ""]
    },
    this.seefriend = {
        name: "Memory",
        quantity: 0,
        solveID: "solveseefriend",
        msgID: "seefriend",
        infoID: "memoryprop",
        time: 10,
        info: "seefriendinfo",
        clock: false,
        timer: 0,
		created: true,
        loot: "seefriendloot",
        needID: "seefriendneed",
        need: [null, "", ""]
    },
	this.experience = {
        name: "Experience",
        quantity: 0,
        solveID: "solveexperience",
        msgID: "experience",
        infoID: "experienceprop",
        time: 10,
        info: "experienceinfo",
        clock: false,
        timer: 0,
		created: false,
        loot: "experienceloot",
        needID: "experienceneed",
        need: [null, "", ""]
    },
	this.loyalty = {
        name: "Loyalty",
        quantity: 0,
        solveID: "solveloyalty",
        msgID: "loyalty",
        infoID: "loyaltyprop",
        time: 10,
        info: "loyaltyinfo",
        clock: false,
        timer: 0,
		created: false,
        loot: "loyaltyloot",
        needID: "loyaltyneed",
        need: [null, 4, "Experience"]
    }
};
//Creation of the main character
var main = new Person();

//add function
function add(parameter){
    parameter.quantity += 1;
    console.log("There is " + parameter.name);
};

//Visual Part
window.onload = function(){
    document.getElementById(main.hope.solveID).innerHTML = "Solve";
    document.getElementById(main.hope.msgID).innerHTML = "There is nothing : ";
    document.getElementById(main.hope.loot).innerHTML = "+" + main.hope.name;
};

//Clock
var t = 0;
function clock(parameter){
    document.getElementById(parameter.solveID).innerHTML = ""; //delete de solve
    document.getElementById(parameter.loot).innerHTML = ""; //delete the loot
    document.getElementById(parameter.needID).innerHTML = "";//delete the riquerement
	document.getElementById(parameter.solveID).onclick = false;//disable the onclick
    parameter.clock = true;//clock active
    parameter.timer = 0;//reset the timer
    var inter = setInterval(function(){
        document.getElementById(parameter.info).innerHTML = ("[" + parameter.timer + "%]");//print out the %
        parameter.timer++//add 1%
        if(parameter.timer === 100){
			document.getElementById(parameter.solveID).onclick = document.getElementById(parameter.solveID).prev_click;
            parameter.clock = false;//clock disactive
            add(parameter);//add one to the parameter quantity
			restriction(parameter);//if need something it will remove it
            if(parameter.created === false){
                createlist(parameter);//if it never had this paramter before it will add it in  the list
				parameter.created = true;//the ID created is true
            }else if(parameter.quantity === 0){
                document.getElementById(parameter.infoID).innerHTML = "";
            }else{
				document.getElementById(parameter.infoID).innerHTML = parameter.quantity + " " + parameter.name;
			}
            document.getElementById(parameter.info).innerHTML = "";
            clearInterval(inter);
            refresh();
        }
    }, parameter.time);
};

//Refresh the Messages
function refresh(){
    //hope
    if(main.hope.quantity === 0 && main.hope.clock === false){
        document.getElementById(main.hope.solveID).innerHTML = "Solve";
        document.getElementById(main.hope.msgID).innerHTML = "There is nothing: ";
        document.getElementById(main.hope.loot).innerHTML = "+" + main.hope.name;
    }else if(main.hope.clock === true){
		document.getElementById(main.hope.solveID).innerHTML = "";
        document.getElementById(main.hope.msgID).innerHTML = "There is nothing: ";
	}else{
        document.getElementById(main.hope.solveID).innerHTML = "";
        document.getElementById(main.hope.msgID).innerHTML = "";
    }
    //existance
    if(main.existance.quantity === 0 && main.hope.quantity === 1 && main.existance.clock === false){
        document.getElementById(main.existance.solveID).innerHTML = "Solve";
        document.getElementById(main.existance.msgID).innerHTML = "You are not: ";
        document.getElementById(main.existance.loot).innerHTML = "+" + main.existance.name;
    }else if(main.existance.clock === true){
		document.getElementById(main.existance.solveID).innerHTML = "";
        document.getElementById(main.existance.msgID).innerHTML = "You are not: ";
	}else{
        document.getElementById(main.existance.solveID).innerHTML = "";
        document.getElementById(main.existance.msgID).innerHTML = "";
    }
    //body
    if(main.body.quantity === 0 && main.existance.quantity === 1 && main.body.clock === false){
        document.getElementById(main.body.solveID).innerHTML = "Solve";
        document.getElementById(main.body.msgID).innerHTML = "You are starting to become: ";
        document.getElementById(main.body.loot).innerHTML = "+" + main.body.name;
    }else if(main.body.clock === true){
		document.getElementById(main.body.solveID).innerHTML = "";
        document.getElementById(main.body.msgID).innerHTML = "You are starting to become: ";
	}else{
        document.getElementById(main.body.solveID).innerHTML = "";
        document.getElementById(main.body.msgID).innerHTML = "";
    }
    //life
    if(main.life.quantity === 0 && main.body.quantity === 1 && main.life.clock === false){
        document.getElementById(main.life.solveID).innerHTML = "Solve";
        document.getElementById(main.life.msgID).innerHTML = "You are: ";
        document.getElementById(main.life.loot).innerHTML = "+" + main.life.name;
    }else if(main.life.clock === true){
		document.getElementById(main.life.solveID).innerHTML = "";
        document.getElementById(main.life.msgID).innerHTML = "You are: ";
	}else{
        document.getElementById(main.life.solveID).innerHTML = "";
        document.getElementById(main.life.msgID).innerHTML = "";
    }
    //knowledge
    if(main.life.quantity === 1 && main.knowledge.clock === false){
        document.getElementById(main.knowledge.solveID).innerHTML = "Solve";
        document.getElementById(main.knowledge.msgID).innerHTML = "You need to learn: ";
        document.getElementById(main.knowledge.loot).innerHTML = "+" + main.knowledge.name;
    }else if(main.knowledge.clock === true){
		document.getElementById(main.knowledge.solveID).innerHTML = "";
        document.getElementById(main.knowledge.msgID).innerHTML = "You need to learn: ";
	}else{
        document.getElementById(main.knowledge.solveID).innerHTML = "";
        document.getElementById(main.knowledge.msgID).innerHTML = "";
    }
    if(main.life.quantity === 1 && main.love.clock === false && main.love.quantity === 0){
        document.getElementById(main.love.solveID).innerHTML = "Solve";
        document.getElementById(main.love.msgID).innerHTML = "You are born: ";
        document.getElementById(main.love.loot).innerHTML = "+" + main.love.name;
    }else if(main.love.clock === true){
		document.getElementById(main.love.solveID).innerHTML = "";
        document.getElementById(main.love.msgID).innerHTML = "You are born: ";
	}else{
        document.getElementById(main.love.solveID).innerHTML = "";
        document.getElementById(main.love.msgID).innerHTML = "";
    }
    //memory
    if(main.love.quantity === 1 && main.memory.clock === false){
        document.getElementById(main.memory.solveID).innerHTML = "Solve";
        document.getElementById(main.memory.msgID).innerHTML = "You need to play: ";
        document.getElementById(main.memory.loot).innerHTML = "+" + main.memory.name;
    }else if(main.memory.clock === true){
		document.getElementById(main.memory.solveID).innerHTML = "";
        document.getElementById(main.memory.msgID).innerHTML = "You need to play: ";
	}else{
        document.getElementById(main.memory.solveID).innerHTML = "";
        document.getElementById(main.memory.msgID).innerHTML = "";
    }
    //integrity
    if(main.love.quantity === 1 && main.knowledge.quantity >= 8 && main.integrity.quantity === 0 && main.integrity.clock === false){
        document.getElementById(main.integrity.msgID).innerHTML = "You are a toddler: ";
        document.getElementById(main.integrity.solveID).innerHTML = "Solve";
        document.getElementById(main.integrity.loot).innerHTML = "+" + main.integrity.name;
        document.getElementById(main.integrity.needID).innerHTML = "-" + main.integrity.need[1] + " " + main.integrity.need[2];
    }else if(main.integrity.clock === true){
        document.getElementById(main.integrity.msgID).innerHTML = "You are a toddler: ";
		document.getElementById(main.integrity.solveID).innerHTML = "";
        document.getElementById(main.integrity.loot).innerHTML = "";
        document.getElementById(main.integrity.needID).innerHTML = "";
	}else if(main.love.quantity === 1 && main.integrity.quantity === 0){
        document.getElementById(main.integrity.msgID).innerHTML = "You are a toddler: [Can't afford]";
        document.getElementById(main.integrity.solveID).innerHTML = "";
        document.getElementById(main.integrity.loot).innerHTML = "+" + main.integrity.name;
        document.getElementById(main.integrity.needID).innerHTML = "-" + main.integrity.need[1] + " " + main.integrity.need[2];
    }else{
        document.getElementById(main.integrity.msgID).innerHTML = "";
        document.getElementById(main.integrity.solveID).innerHTML = "";
        document.getElementById(main.integrity.loot).innerHTML = "";
        document.getElementById(main.integrity.needID).innerHTML = "";
    }
    //friend
    if(main.integrity.quantity === 1 && main.friend.clock === false){
        document.getElementById(main.friend.solveID).innerHTML = "Solve";
        document.getElementById(main.friend.msgID).innerHTML = "You need more friends: ";
        document.getElementById(main.friend.loot).innerHTML = "+" + main.friend.name;
    }else if(main.friend.clock === true){
		document.getElementById(main.friend.solveID).innerHTML = "";
        document.getElementById(main.friend.msgID).innerHTML = "You need more friends: ";
	}else{
        document.getElementById(main.friend.solveID).innerHTML = "";
        document.getElementById(main.friend.msgID).innerHTML = "";
    }
	//seefriend
	if(main.friend.quantity >= 1 && main.seefriend.clock === false) {
		document.getElementById(main.seefriend.solveID).innerHTML = "Solve";
        document.getElementById(main.seefriend.msgID).innerHTML = "You need to see a friend: ";
        document.getElementById(main.seefriend.loot).innerHTML = "+" + main.seefriend.name;
	}else if(main.seefriend.clock === true){
		document.getElementById(main.seefriend.solveID).innerHTML = "";
        document.getElementById(main.seefriend.msgID).innerHTML = "You need more friends: ";
	}else{
        document.getElementById(main.seefriend.solveID).innerHTML = "";
        document.getElementById(main.seefriend.msgID).innerHTML = "";
    }
};

//List Prop
function createlist(parameter){
    document.getElementById("have").innerHTML = "You have: ";
    var li = document.createElement("li");
    var node = document.createTextNode(parameter.name);
    li.appendChild(node);
    var ul = document.getElementById("ul");
    ul.appendChild(li);
    var att = document.createAttribute("id");
    att.value = parameter.infoID; 
    li.setAttributeNode(att)
};

//restriction
function restriction(parameter){
	if(parameter.name === "Integrity"){
		main.knowledge.quantity -= 8;
		if(main.knowledge.created === false){
                createlist(main.knowledge);
				main.knowledge.created = true;
        }else if(main.knowledge.quantity === 0){
                document.getElementById(main.knowledge.infoID).innerHTML = "";
        }else{
				document.getElementById(main.knowledge.infoID).innerHTML = main.knowledge.quantity + " " + main.knowledge.name;
		}
	}
};