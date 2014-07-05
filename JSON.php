<?php

class Alert {

	protected $type;
	protected $title;
	protected $message;

	public function __construct($type, $title, $message) {
		$this->type = $type;
		$this->title = $title;
		$this->message = $message;

		$this->message = [
			"type" => $this->type,
			"title" => $this->title,
			"message" => $this->message
		];

		$this->json_message = json_encode($this->message);
	}

	public function send() {
		echo "<script>message.send(". $this->json_message .");</script>";
	}
}