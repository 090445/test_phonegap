/*
 * SimpleModal Basic Modal Dialog
 * http://simplemodal.com
 *
 * Copyright (c) 2013 Eric Martin - http://ericmmartin.com
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */

jQuery(function ($) {
	// Load dialog on page load
	//$('#basic-modal-content').modal();

	// Load dialog on click
	$('#basic-modal .prod1').click(function (e) {
		$('#prod1').modal();

		return false;
	});
	
	$('#basic-modal .prod2').click(function (e) {
		$('#prod2').modal();

		return false;
	});
	
	$('#basic-modal .prod3').click(function (e) {
		$('#prod3').modal();

		return false;
	});
	
	$('#basic-modal .tact1').click(function (e) {
		$('#tact1').modal();

		return false;
	});
	
	$('#basic-modal .tact2').click(function (e) {
		$('#tact2').modal();

		return false;
	});
	
	$('#basic-modal .tact3').click(function (e) {
		$('#tact3').modal();

		return false;
	});
	
	
	$('#basic-modal .basic1').click(function (e) {
		$('#basic1-modal-content').modal();

		return false;
	});
	
	
	$('#basic-modal .basic2').click(function (e) {
		$('#basic2-modal-content').modal();

		return false;
	});
});