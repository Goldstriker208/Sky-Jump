using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class CollectTextScript : MonoBehaviour {
	public Text thisText;
	public string textPrefix = "You need to collect";
	public string textEnd = "more objects";
	private string numberLeft;

	// Use this for initialization
	void Start () {
		
		thisText=GetComponent<Text>();
		
	}
	
	public void ChangeText(int number){

		thisText.text = textPrefix + " " + number.ToString () + " " + textEnd;
	}
}
