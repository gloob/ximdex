{**
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
 *}
 <form method="post" id="print_form" action="{$action_url}">
<div class="action_header">
  <h2>{t friendlyName=$friendlyName}Add %1{/t}</h2>
    <fieldset class="buttons-form">
    {button label="Create `$friendlyName`" class='validate btn main_action' }
  </fieldset>
</div>
  <div class="action_content">
    <fieldset>
      <input type="hidden" name="nodeid" value="{$nodeID}">
      <p>
        <label for="foldername">{t}Name{/t}</label>
        <input type="text" name="name" id="foldername" class="cajaxg validable not_empty">
      </p>



        <label>{t}Associating channels to project{/t}</label>
     <p>   <!--<label for="canales">{t}Canal{/t}</label>-->
     {foreach from=$channels key=index item=channelData }
          <span>
            <input type="checkbox" class="validable canales check_group__canales"
                    name="channels_listed[{$channelData.id}]" id="p_{$channelData.id}" />
           <label for="p_{$channelData.id}" >{$channelData.name}</label>
          <!--  <img class="xim-treeview-icon icon-channel"/> The path has been deleted and the icon just is show by CSS, src="{$_URL_ROOT}/xmd/images/icons/channel.png" --></span>
          {foreachelse}</p>
          <p class="message_warning">{t}There are no channels created in the system{/t}</p>
          {/foreach}

    </fieldset>
  </div>

</form>
