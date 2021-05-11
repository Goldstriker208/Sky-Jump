using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class CollectionManagerScript : MonoBehaviour {
	public int pointsCollected;
	public int pointsNeeded;
	private GameObject CT;
	// Use this for initialization
	void Start () {
		CT = GameObject.Find ("CollectText");
		if (CT)
			CT.BroadcastMessage ("ChangeText", pointsNeeded - pointsCollected);
		else
			Debug.Log ("Cannot Find CollectText GameObject in your Hierarchy");
	}
	
	// Update is called once per frame
	void Update () {
		
	}
	void collectTriggered(int points){
		pointsCollected += points;
		GameObject CT = GameObject.Find ("CollectText");
		if (CT)
			CT.BroadcastMessage ("ChangeText", pointsNeeded - pointsCollected);
		else
			Debug.Log ("Cannot Find CollectText GameObject in your Hierarchy");
		if(pointsCollected >= pointsNeeded){
			SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex + 1);
		}

	}
}
