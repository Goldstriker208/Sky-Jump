using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class FalloutScript : MonoBehaviour {

	private void OnTriggerEnter(Collider other)
	{
		if(other.tag=="Player")SceneManager.LoadScene(SceneManager.GetActiveScene().name);
	}

}
