enum Commands {rotateY, rotateX, rotateZ, moveY, moveX, moveZ}; 
var command : Commands = Commands.rotateY;

public var object : GameObject;
public var speed : float = 25.0;
private var setPoint : float = 0;
private var reverse : boolean = false;
private var forward : boolean = true;
public var localAngle : boolean = true;
public var stopAtPoint : float = 0.0;
public var triggerEvent : boolean = false;
private var movement : boolean = true;

function Start() {
	if(!object)object = gameObject;
	if (triggerEvent) movement = false;
}

function OnTriggerEnter ( other : Collider ){
	
	if(other.tag == "Player"){
		movement =true;	
	}
}
function OnTriggerExit ( other : Collider ){
	
	if(other.tag == "Player"){
		movement =false;	
	}
}

function Update () {
 	
 if(movement){
 	if(stopAtPoint!=0){
	    var sp;
    	if(speed < 0) sp = speed*-1;
    	else sp = speed;
	    setPoint += (Time.deltaTime * sp);
    	
    	if(setPoint > stopAtPoint){
    		if(forward)forward = false;
    		else forward=true;
    		setPoint = 0;
    	}        		
    		
    }

	switch (command)
	    {
	        case Commands.rotateY:
	           
	            if(forward)object.transform.Rotate(Vector3.up * (Time.deltaTime * speed));
	            else object.transform.Rotate(Vector3.up * -(Time.deltaTime * speed));       	
	          
	            //transform.Rotate(Vector3.up * (Time.deltaTime * speed));  
	        break;
	           
	        case Commands.rotateX:
		       
		         if(forward)object.transform.Rotate(Vector3.right * (Time.deltaTime * speed));
		         else object.transform.Rotate(Vector3.right * -(Time.deltaTime * speed)); 
	   
	        break;
	           
	        case Commands.rotateZ:
	         	if(forward)object.transform.Rotate(Vector3.forward * (Time.deltaTime * speed));
		         else object.transform.Rotate(Vector3.forward * -(Time.deltaTime * speed)); 
	       
	        break;
	               
	        case Commands.moveX:
	         		if(localAngle){
		         		if(forward)object.transform.Translate(Vector3.right * (Time.deltaTime * speed),  Space.Self);
			         	else object.transform.Translate(Vector3.left* (Time.deltaTime * speed), Space.Self); 
			         	
			         }else{
			         	if(forward)object.transform.Translate(Vector3.right* (Time.deltaTime * speed));
			         	else object.transform.Translate(Vector3.left* (Time.deltaTime * speed)); 			         		         
			         }
	       
	        break;
	        
	        case Commands.moveY:
	         		if(localAngle){
		         		if(forward)object.transform.Translate(Vector3.up * (Time.deltaTime * speed),  Space.Self);
			         	else object.transform.Translate(Vector3.down* (Time.deltaTime * speed), Space.Self); 
			         	
			         }else{
			         	if(forward)object.transform.Translate(Vector3.up* (Time.deltaTime * speed));
			         	else object.transform.Translate(Vector3.down* (Time.deltaTime * speed)); 			         		         
			         }
	       
	        break;
	        
	       case Commands.moveZ:
	         		if(localAngle){
		         		if(forward)object.transform.Translate(Vector3.forward * (Time.deltaTime * speed),  Space.Self);
			         	else object.transform.Translate(Vector3.back* (Time.deltaTime * speed), Space.Self); 
			         	
			         }else{
			         	if(forward)object.transform.Translate(Vector3.forward* (Time.deltaTime * speed));
			         	else object.transform.Translate(Vector3.back* (Time.deltaTime * speed)); 			         		         
			         } 
	       
	        break;
	        default:
	            print("No command");
	        break;
	    }
	
	}
}