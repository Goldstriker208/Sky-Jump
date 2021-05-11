using UnityEngine;
using System.Collections;

public class SideScrollingCamera : MonoBehaviour {

	public Transform player;
	public float distance = 10f;

	// Use this for initialization
	void Start () {

	}

	// Update is called once per frame
	void LateUpdate () {

		transform.position = player.position + new Vector3 (0, 0, distance);

	}
}