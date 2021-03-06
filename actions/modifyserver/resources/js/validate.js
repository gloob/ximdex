/**
 *  \details &copy; 2011  Open Ximdex Evolution SL [http://www.ximdex.org]
 *
 *  Ximdex a Semantic Content Management System (CMS)
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Affero General Public License as published
 *  by the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Affero General Public License for more details.
 *
 *  See the Affero GNU General Public License for more details.
 *  You should have received a copy of the Affero GNU General Public License
 *  version 3 along with Ximdex (see LICENSE file).
 *
 *  If not, visit http://gnu.org/licenses/agpl-3.0.html.
 *
 *  @author Ximdex DevTeam <dev@ximdex.com>
 *  @version $Revision$
 */


X.actionLoaded(function(event, fn, params) {

	var form = params.actionView.getForm('mdfsv_form');
	var fm = form.getFormMgr();
	var valid = true;

	// Creates an alias for convenience
	var empty = Object.isEmpty;


	clearErrors();
	show_local_fields();

	fn('#protocol').change(show_local_fields);

	fn('select#serverid').change(function() {

		var urler = fn('#nodeURL').val() + '&serverid=' + fn('#serverid option:selected').val();
		fn('#mdfsv_form').attr('action', urler);

		fm.sendForm();
	});


	fn('a#delete_server').click(function(event) {

		if (fn('#serverid').val() != "none"){

			fn('input[name=borrar]').val(1);
			confirmar(event, _('Are you sure you want to remove this server?'), form, fm);

			return true;

		}
	});


	fn('a#create_server').get(0).beforeSubmit.add(function(event) {

		clearErrors();
		var protocolSelected = fn('#protocol').val();

		if (protocolSelected == 'LOCAL') {

			if (empty(fn('#url').val())) {
				addError(_('It is necessary to specify a local url for this server.'));
			} else if (empty(fn('#initialdirectory').val())) {
				addError(_('It is necessary to specify a local directory.'));
			}

		} else if ((protocolSelected == 'FTP') || (protocolSelected == 'SSH')) {

			var pw1 = fn('#password').val();
			var pw2 = fn('#password2').val();

			if (empty(pw1) || empty(pw2) || pw1 != pw2) {
				addError(_('Passwords do not match'));
			} else if (empty(fn('#initialdirectory').val())) {
				addError(_('It is necessary to specify a remote directory.'));
			} else if (empty(fn('#url').val())) {
				addError(_('It is necessary to specify a remote url for this server.'));
			} else if (empty(fn('#port').val())) {
				addError(_('It is necessary to specify a connection port for this server.'));
			} else if (empty(fn('#host').val())) {
				addError(_('It is necessary to specify a remote address for this server.'));
			} else if (empty(fn('#login').val())) {
				addError(_('It is necesary specify a login.'));
			}
		}

		if (empty(fn('#description').val())) {
			addError(_('It is necessary to specify a description for this server.'));
		}

		if (!valid) {
			$(form).closest('.action_container').scrollTop(0);
			return true;
		}

		var msg = _('Are you sure you want to modify these properties?');
		if (fn('#enabled').attr('checked') == false) {
			msg = _('Server is not enabled. Documents will not be published on this server.') + msg;
		}

		confirmar(event, msg, form, fm);

		return true;
	});

	function confirmar(event, msg, form, fm) {

		var div_dialog = $("<div/>").attr('id', 'dialog').appendTo(form);

		var dialogCallback = function(send) {
			$(div_dialog).dialog("destroy");
			if (send) {
				fm.sendForm({
					button: this,
					confirm: false
				});
			}
		}.bind(this);

		div_dialog.html(msg);
		div_dialog.dialog({
			buttons: {
				_("Accept"): function() {
					dialogCallback(true);
				},
				_("Cancel"): function() {
					dialogCallback(false);
				}
			}
		});
	}


	function show_local_fields() {

		if (fn('#protocol').val() == 'LOCAL') {

			var url = fn("input[name=url]");

			if( null == url.val() || "" == url.val() ) {
				url.val(url_root+"/data/previos");
			}

			fn('#labelUrl').text('URL');

			var directory = fn("input[name=initialdirectory]");
			if( null == directory.val() || "" == directory.val() ) {
				directory.val(ximdex_root+"/data/previos/");
			}

			fn('#labelDirectorio').text(_('Directory'));
			fn('#labeldirRemota').text(_('Address'));
			fn('.password').hide();
			fn('.password2').hide();
			fn('.port').hide();
			fn('.login').hide();
			fn('.host').hide();

		} else {

			fn('#labelUrl').text(_('Remote URL'));
			fn('#labelDirectorio').text(_('Remote directory'));
			fn('#labeldirRemota').text(_('Remote address'));
			fn('.password').show();
			fn('.password2').show();
			fn('.port').show();
			fn('.login').show();
			fn('.host').show();
		}
	}

	function clearErrors() {
		fn('fieldset.mdfsv_errors').hide();
		fn('fieldset.mdfsv_errors div.errors-container').empty();
		valid = true;
	}

	function addError(message) {
		var container = $('<div></div>').addClass('ui-state-error ui-corner-all msg-error');
		var icon = $('<span></span>').addClass('ui-icon ui-icon-alert').appendTo(container);
		var msg = $('<span></span>').html(message).appendTo(container);
		fn('fieldset.mdfsv_errors div.errors-container').append(container);
		fn('fieldset.mdfsv_errors').show();
		valid = false;
	}

});
