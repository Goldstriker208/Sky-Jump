using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CollectScript : MonoBehaviour {
	public int pointsGiven;
	public bool RequirePlayerTag = false;

	private void OnTriggerEnter(Collider other)
	{	
		
		if (RequirePlayerTag) {

			if (other.tag == "Player") {
				GameObject.Find ("CollectionManager").BroadcastMessage ("collectTriggered", pointsGiven);
				Destroy (gameObject);
			}
		} else {
			GameObject.Find ("CollectionManager").BroadcastMessage ("collectTriggered", pointsGiven);
			Destroy (gameObject);
		}

		}


}
