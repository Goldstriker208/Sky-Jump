using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DamageTrigger : MonoBehaviour {

	public bool RequirePlayerTag = false;
	public bool DestroyAfterTrigger = false;
	public int LifeTaken = 1;


	private void OnTriggerEnter(Collider other)
	{	

		if (RequirePlayerTag) {

			if (other.tag == "Player") {
				GameObject.Find ("LifeManager").BroadcastMessage ("TakeDamage", LifeTaken);
				if(DestroyAfterTrigger)Destroy (gameObject);
			}
		} else {
			GameObject.Find ("LifeManager").BroadcastMessage ("TakeDamage", LifeTaken);
			if(DestroyAfterTrigger)Destroy (gameObject);
		}

	}


}
